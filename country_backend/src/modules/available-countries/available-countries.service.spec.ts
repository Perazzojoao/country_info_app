import { Test, TestingModule } from '@nestjs/testing';
import { AvailableCountriesService } from './available-countries.service';

describe('AvailableCountriesService', () => {
  let service: AvailableCountriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailableCountriesService],
    }).compile();

    service = module.get<AvailableCountriesService>(AvailableCountriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
