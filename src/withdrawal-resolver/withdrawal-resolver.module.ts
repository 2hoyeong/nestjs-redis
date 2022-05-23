import { Module } from '@nestjs/common';
import { WithdrawalResolverService } from './withdrawal-resolver.service';

@Module({
  providers: [WithdrawalResolverService],
})
export class WithdrawalResolverModule {}
