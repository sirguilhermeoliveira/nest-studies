import { Module } from '@nestjs/common';
import { MessageModule } from 'message/message.module';
import { AppController } from './app.controller';

@Module({
  imports: [MessageModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
