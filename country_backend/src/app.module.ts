import { ConsoleLogger, Module } from '@nestjs/common';
import { AvailableCountriesModule } from './modules/available-countries/available-countries.module';
import { ApiModule } from './api/api.module';
import { CountryInfoModule } from './modules/country-info/country-info.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { LoggerInterceptor } from './resources/interceptors/logger.interceptor';
import { HttpExceptionFilter } from './resources/filters/http-exeption.filter';
import { UsersModule } from './modules/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    AvailableCountriesModule,
    ApiModule,
    CountryInfoModule,
    UsersModule,
  ],
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
