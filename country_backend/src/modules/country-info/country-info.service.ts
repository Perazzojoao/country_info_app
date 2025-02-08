import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';
import { TBorder } from 'src/api/types/apiTypes';
import {
  SearchCountryByCodeDto,
  SearchCountryByNameDto,
} from './dto/search-country.dto';

@Injectable()
export class CountryInfoService {
  constructor(private readonly apiService: ApiService) {}

  async getBorderCountries(
    countryCode: SearchCountryByCodeDto,
  ): Promise<TBorder[]> {
    const code = countryCode.country_code;
    const response = await this.apiService.getBorderCountries(code);
    if (!response) {
      throw new NotFoundException('No border countries found');
    }

    return response;
  }

  async getPopulationData(countryCode: SearchCountryByNameDto) {
    const code = countryCode.country_name;
    const response = await this.apiService.getPopulationData(code);
    if (!response) {
      throw new NotFoundException('No population data found');
    }

    return response;
  }

  async getFlagUrl(countryCode: SearchCountryByNameDto) {
    const code = countryCode.country_name;
    const response = await this.apiService.getFlagUrl(code);
    if (!response) {
      throw new NotFoundException('No flag url found');
    }

    return response;
  }
}
