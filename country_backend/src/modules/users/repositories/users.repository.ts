import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../schemas/user.schema';
import { UsersAbstractRepository } from './users-abstract.repository';
import { Connection, Model } from 'mongoose';
import {
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Address } from '../schemas/address.schema';

export class UserRepository implements UsersAbstractRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Address.name) private readonly addressModel: Model<Address>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async create({ address, ...createUserDto }: CreateUserDto): Promise<User> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      if (address) {
        const newAddress = new this.addressModel(address);
        const savedAddress = await newAddress.save();
        const newUser = new this.userModel({
          ...createUserDto,
          address: savedAddress._id,
        });
        const createdUser = (await newUser.save()).populate('address');
        await session.commitTransaction();
        return createdUser;
      }

      const newUser = new this.userModel(createUserDto);
      const createdUser = await newUser.save();
      await session.commitTransaction();
      return createdUser;
    } catch (error) {
      await session.abortTransaction();
      if (error.code === 11000) {
        throw new BadRequestException('Email already in use');
      }

      console.log(error.message);
      throw new InternalServerErrorException('Error creating user');
    } finally {
      await session.endSession();
    }
  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userModel.find().populate('address').exec();
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Error fetching users');
    }
  }

  async findOne(id: string): Promise<User> {
    try {
      return await this.userModel.findById(id).populate('address').exec();
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Error fetching user');
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      return await this.userModel.findOne({ email }).exec();
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Error fetching user');
    }
  }

  async update(
    id: string,
    { address, ...updateUserDto }: UpdateUserDto,
  ): Promise<User> {
    const session = await this.connection.startSession();
    session.startTransaction();
    try {
      const updatedUser = await this.userModel
        .findByIdAndUpdate(id, updateUserDto, {
          new: true,
        })
        .populate('address')
        .exec();

      if (!updatedUser) {
        await session.abortTransaction();
        throw new NotFoundException('User not found');
      }

      if (address) {
        const updatedAddress = await this.addressModel
          .findByIdAndUpdate(updatedUser.address, address, {
            new: true,
          })
          .exec();
        updatedUser.address = updatedAddress;
      }

      session.commitTransaction();
      return updatedUser;
    } catch (error) {
      await session.abortTransaction();
      console.log(error.message);
      throw new InternalServerErrorException('Error updating user');
    } finally {
      session.endSession();
    }
  }

  async remove(id: string): Promise<User> {
    try {
      return await this.userModel
        .findByIdAndDelete(id)
        .populate('address')
        .exec();
    } catch (error) {
      console.log(error.message);
      throw new InternalServerErrorException('Error deleting user');
    }
  }
}
