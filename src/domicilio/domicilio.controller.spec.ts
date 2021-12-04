import { Test, TestingModule } from '@nestjs/testing';
import { DomicilioController } from './domicilio.controller';

describe('DomicilioController', () => {
  let controller: DomicilioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DomicilioController],
    }).compile();

    controller = module.get<DomicilioController>(DomicilioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
