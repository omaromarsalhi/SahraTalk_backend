import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { SocketModule } from '../socket/socket.module';
import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [PrismaModule, SocketModule, UploadModule],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
