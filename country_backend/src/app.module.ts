import { ConsoleLogger, Module } from '@nestjs/common';
import { AvailableCountriesModule } from './modules/available-countries/available-countries.module';
import { ApiModule } from './api/api.module';
import { CountryInfoModule } from './modules/country-info/country-info.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './resources/interceptors/logger.interceptor';
import { HttpExceptionFilter } from './resources/filters/http-exeption.filter';

@Module({
  imports: [AvailableCountriesModule, ApiModule, CountryInfoModule],
  providers: [
     ConsoleLogger,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
