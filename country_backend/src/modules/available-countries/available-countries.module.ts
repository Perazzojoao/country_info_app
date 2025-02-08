import { Module } from '@nestjs/common';
import { AvailableCountriesService } from './available-countries.service';
import { AvailableCountriesController } from './available-countries.controller';
import { ApiModule } from 'src/api/api.module';

@Module({
  imports: [ApiModule],
  controllers: [AvailableCountriesController],
  providers: [AvailableCountriesService],
})
export class AvailableCountriesModule {}
