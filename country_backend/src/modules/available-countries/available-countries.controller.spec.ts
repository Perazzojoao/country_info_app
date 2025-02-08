import { Test, TestingModule } from '@nestjs/testing';
import { AvailableCountriesController } from './available-countries.controller';
import { AvailableCountriesService } from './available-countries.service';

describe('AvailableCountriesController', () => {
  let controller: AvailableCountriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvailableCountriesController],
      providers: [AvailableCountriesService],
    }).compile();

    controller = module.get<AvailableCountriesController>(AvailableCountriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
