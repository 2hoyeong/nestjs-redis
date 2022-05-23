import { Test, TestingModule } from '@nestjs/testing';
import { WithdrawalResolverService } from './withdrawal-resolver.service';

describe('WithdrawalResolverService', () => {
  let service: WithdrawalResolverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WithdrawalResolverService],
    }).compile();

    service = module.get<WithdrawalResolverService>(WithdrawalResolverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
