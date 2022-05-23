import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WithdrawalModule } from './withdrawal/withdrawal.module';
import { WithdrawalResolverModule } from './withdrawal-resolver/withdrawal-resolver.module';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    WithdrawalModule,
    WithdrawalResolverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
