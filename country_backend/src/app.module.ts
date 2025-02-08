import { Module } from '@nestjs/common';
import { AvailableCountriesModule } from './modules/available-countries/available-countries.module';
import { ApiModule } from './api/api.module';
import { CountryInfoModule } from './modules/country-info/country-info.module';

@Module({
  imports: [AvailableCountriesModule, ApiModule, CountryInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
