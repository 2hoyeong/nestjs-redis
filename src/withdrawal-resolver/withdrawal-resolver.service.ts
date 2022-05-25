import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { delay } from '../app.util';
import { WITHDRAWAL_QUEUE_NAME } from '../withdrawal/withdrawal.constant';

@Processor(WITHDRAWAL_QUEUE_NAME)
export class WithdrawalResolverService {
  public leng = 0;
  public ms = 0;
  // @Process()
  // async transcode(job: Job<any>) {
  //   const startDate = Date.now();
  //   await delay(150);
  //   this.ms += Date.now() - startDate;
  //   console.log(this.ms);
  //   return {};
  // }
}
