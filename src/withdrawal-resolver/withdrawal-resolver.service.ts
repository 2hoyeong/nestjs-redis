import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { WITHDRAWAL_QUEUE_NAME } from '../withdrawal/withdrawal.constant';

@Processor(WITHDRAWAL_QUEUE_NAME)
export class WithdrawalResolverService {
  @Process()
  async transcode(job: Job<unknown>) {
    // console.log(job.data);
    return {};
  }
}
