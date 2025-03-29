import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './providers/image.service.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
