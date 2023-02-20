import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageRepository } from 'message/message.repository';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}

  create(content: string) {
    return this.messageRepo.create(content);
  }

  findAll() {
    return this.messageRepo.findAll();
  }

  findOne(id: string) {
    return this.messageRepo.findOne(id);
  }
}
