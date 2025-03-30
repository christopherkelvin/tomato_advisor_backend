import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PredictService } from './providers/predict.service';
@Controller('predict')
export class PredictController {
  constructor(
    //Injecting Image resize service
    private readonly predictService: PredictService,
  ) {}
  @Post('analyze')
  @UseInterceptors(FileInterceptor('image'))
  async predict(@UploadedFile() image: Express.Multer.File) {
    return this.predictService.sendToFlask(image.buffer);
  }
}
