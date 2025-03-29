import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ModelService } from './providers/model.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('model')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}
  @Post('predict')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          callback(null, uniqueSuffix + '-' + file.originalname);
        },
      }),
    }),
  )
  async predict(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      return { error: 'No image uploaded' };
    }

    try {
      const prediction = await this.modelService.predict(file.path);
      return { prediction };
    } catch (error) {
      return { error: error.message };
    }
  }
}
