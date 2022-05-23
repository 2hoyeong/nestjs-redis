import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { WITHDRAWAL_QUEUE_NAME } from './withdrawal.constant';
import { WithdrawalService } from './withdrawal.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: WITHDRAWAL_QUEUE_NAME,
    }),
  ],
  providers: [WithdrawalService],
})
export class WithdrawalModule {}
