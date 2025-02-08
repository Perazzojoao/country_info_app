import { Module } from '@nestjs/common';
import { CountryInfoService } from './country-info.service';
import { CountryInfoController } from './country-info.controller';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [CountryInfoController],
  providers: [CountryInfoService],
})
export class CountryInfoModule {}
