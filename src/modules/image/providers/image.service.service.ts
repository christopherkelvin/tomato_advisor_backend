import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as sharp from 'sharp';
@Injectable()
export class ImageService {
  public async imageResize(file: Express.Multer.File) {
    try {
      const outputPath = path.join(__dirname, '..', '..', '..', 'uploads');
      await sharp(file.buffer).resize(250, 250).toFile(outputPath);
      console.log(`Image resized and saved to: ${outputPath}`);
      return {
        message: 'File uploaded and resized successfully',
        path: outputPath,
      };
    } catch (error) {
      console.error('Error resizing image:', error);
      throw new Error('Error resizing image');
    }
  }
}
