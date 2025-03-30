import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
@Injectable()
export class ImageResizeService {
  resizeImage(image: Express.Multer.File) {
    const resizedImage = sharp(image.buffer).resize(250, 250);
    return resizedImage;
  }
}
