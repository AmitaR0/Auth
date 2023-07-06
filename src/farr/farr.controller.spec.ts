import { Test, TestingModule } from '@nestjs/testing';
import { FarrController } from './farr.controller';
import { FarrService } from './farr.service';

describe('FarrController', () => {
  let controller: FarrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarrController],
      providers: [FarrService],
    }).compile();

    controller = module.get<FarrController>(FarrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
