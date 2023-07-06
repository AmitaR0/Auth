import { Test, TestingModule } from '@nestjs/testing';
import { FarrService } from './farr.service';

describe('FarrService', () => {
  let service: FarrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FarrService],
    }).compile();

    service = module.get<FarrService>(FarrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
