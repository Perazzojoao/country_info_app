import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class SearchCountryByCodeDto {

  @IsNotEmpty()
  @MaxLength(3, { message: 'Country code can not be longer than 3 characters' })
  country_code: string;
}

export class SearchCountryByNameDto {

  @IsNotEmpty()
  @MinLength(3, { message: 'Country name can not be shorter than 3 characters' })
  @MaxLength(20, { message: 'Country name can not be longer than 20 characters' })
  country_name: string;
}