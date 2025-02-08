import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/api/api.service';

@Injectable()
export class AvailableCountriesService {
  constructor(private apiService: ApiService) {}
  async getAvailableCountries() {
    return await this.apiService.getAvaliableCountries();
  }
}
