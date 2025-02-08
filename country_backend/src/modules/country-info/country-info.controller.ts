import { Body, Controller, Post } from '@nestjs/common';
import { CountryInfoService } from './country-info.service';
import { DefaultResponse } from 'src/lib/default-response';
import { SearchCountryByCodeDto, SearchCountryByNameDto } from './dto/search-country.dto';

@Controller('country-info')
export class CountryInfoController extends DefaultResponse {
  constructor(private readonly countryInfoService: CountryInfoService) {
    super();
  }

  @Post('border')
  async getBorderCountries(@Body() body: SearchCountryByCodeDto) {
    const response = await this.countryInfoService.getBorderCountries(body);
    return this.success(response, 'Border countries fetched successfully');
  }

  @Post('population')
  async getPopulationData(@Body() body: SearchCountryByNameDto) {
    const response = await this.countryInfoService.getPopulationData(body);
    return this.success(response, 'Population data fetched successfully');
  }

  @Post('flag')
  async getFlagUrl(@Body() body: SearchCountryByNameDto) {
    const response = await this.countryInfoService.getFlagUrl(body);
    return this.success(response, 'Flag url fetched successfully');
  }
}
