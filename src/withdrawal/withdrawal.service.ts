import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { randomBytes, randomUUID } from 'crypto';
import { WITHDRAWAL_QUEUE_NAME } from './withdrawal.constant';
import { delay } from '../app.util';

@Injectable()
export class WithdrawalService {
  constructor(
    @InjectQueue(WITHDRAWAL_QUEUE_NAME) private withdrawalQueue: Queue,
  ) {}

  generateRandomAddress() {
    const bytes = randomBytes(20);
    return `0x${bytes.toString('hex')}`;
  }

  generateRandomWithdrawal() {
    const withdrawal = {
      uuid: randomUUID({ disableEntropyCache: true }),
      fromAddress: this.generateRandomAddress(),
      toAddress: this.generateRandomAddress(),
      amount: Math.random() * 10,
      type: 'WITHDRAWAL',
      requiredApprovalCount: 2,
      useApiAutoApproval: true,
      useFeeDelegation: false,
      feePayerAddress: null,
      status: 'AWATING_WITHDRAWAL',
      createdDate: new Date(),
      modifiedDate: new Date(),
    };

    return withdrawal;
  }

  async getWithdrawals(size: number) {
    const withdrawals = Array.from(Array(size)).map(() =>
      this.generateRandomWithdrawal(),
    );
    await delay(100);
    return withdrawals;
  }

  async test() {
    console.time('WITHDRAWAL_QUEUE_WRITE');
    const startDate = Date.now();
    const withdrawals = await this.getWithdrawals(500);
    console.timeLog('WITHDRAWAL_QUEUE_WRITE');
    for await (const withdrawal of withdrawals) {
      await this.withdrawalQueue.add(withdrawal, { removeOnComplete: true });
    }
    const endDate = Date.now() - startDate;
    console.log((endDate / 500) * 1000);
    console.timeEnd('WITHDRAWAL_QUEUE_WRITE');
  }
}
