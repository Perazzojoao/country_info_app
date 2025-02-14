import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DefaultResponse } from 'src/lib/default-response';
import { ParseMongoIdPipe } from 'src/resources/pipes/mongo-id/mongo-id.pipe';

@Controller('users')
export class UsersController extends DefaultResponse {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    const response = await this.usersService.create(createUserDto);
    return this.success(
      response,
      'User created successfully',
      HttpStatus.CREATED,
    );
  }

  @Get()
  async findAll() {
    const response = await this.usersService.findAll();
    return this.success(response, 'Users fetched successfully');
  }

  @Get(':id')
  async findOne(@Param('id', ParseMongoIdPipe) id: string) {
    const response = await this.usersService.findOne(id);
    return this.success(response, 'User fetched successfully');
  }

  @Patch(':id')
  async update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const response = await this.usersService.update(id, updateUserDto);
    return this.success(response, 'User updated successfully');
  }

  @Delete(':id')
  async remove(@Param('id', ParseMongoIdPipe) id: string) {
    const response = await this.usersService.remove(id);
    return this.success(response, 'User deleted successfully');
  }
}
