import { IsNotEmpty, MaxLength } from "class-validator";

export class SearchCountryDto {

  @IsNotEmpty()
  @MaxLength(10, { message: 'Country code can not be longer than 10 characters' })
  country_code: string;
}