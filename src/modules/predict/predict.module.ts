import { Module } from '@nestjs/common';
import { PredictController } from './predict.controller';
import { PredictService } from './providers/predict.service';
import { ImageResizeService } from './providers/image-resize.service';

@Module({
  controllers: [PredictController],
  providers: [PredictService, ImageResizeService],
})
export class PredictModule {}
