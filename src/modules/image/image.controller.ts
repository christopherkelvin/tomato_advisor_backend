import {
  Controller,
  //   Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageService } from './providers/image.service.service';
@Controller('image')
export class ImageController {
  constructor(
    //Injecting image provider
    private readonly imageProvider: ImageService,
  ) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const resizedImage = await this.imageProvider.imageResize(file);
    console.log(resizedImage);
    return { message: 'File uploaded successfully' };
  }
  //   @Get('test')
  //   testEndPoint() {
  //     return { message: 'Test endpoint is working' };
  //   }
}
