import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageRepository } from './message.repository';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(public messageService: MessageService) {}

  @Post()
  create(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get()
  findAll() {
    return this.messageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
