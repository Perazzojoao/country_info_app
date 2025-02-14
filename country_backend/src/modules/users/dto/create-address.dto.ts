import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @IsNotEmpty({ message: 'City is required' })
  @IsString({ message: 'City must be a string' })
  @MaxLength(25, { message: 'City must be at most 25 characters' })
  city: string;

  @IsNotEmpty({ message: 'State is required' })
  @IsString({ message: 'State must be a string' })
  @MaxLength(2, { message: 'State must be at most 2 characters' })
  state: string;
}

export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
