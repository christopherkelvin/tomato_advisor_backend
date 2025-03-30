import { Injectable } from '@nestjs/common';

@Injectable()
export class PredictService {
  async predict(image: Express.Multer.File) {
    if (image) {
      const imagePath = image.path;
      // Perform prediction logic here
      // For example, you can use a machine learning model to make predictions based on the image
      // Return the prediction result
      return {
        message: 'Prediction successful',
        imagePath: imagePath,
        // Add more prediction results as needed
      };
    }
   }
  }
}
