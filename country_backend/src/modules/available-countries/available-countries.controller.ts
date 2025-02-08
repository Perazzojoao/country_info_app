import { Controller, Get, Param } from '@nestjs/common';
import { AvailableCountriesService } from './available-countries.service';
import { DefaultResponse } from 'src/lib/default-response';

@Controller('available-countries')
export class AvailableCountriesController extends DefaultResponse {
  constructor(
    private readonly availableCountriesService: AvailableCountriesService,
  ) {
    super();
  }
  @Get()
  async getAvailableCountries() {
    const response = await this.availableCountriesService.getAvailableCountries();
    return this.success(response, 'Available countries fetched successfully');
  }
}
