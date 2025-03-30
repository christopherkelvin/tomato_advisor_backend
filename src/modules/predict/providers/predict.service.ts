import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as FormData from 'form-data';

@Injectable()
export class PredictService {
  async sendToFlask(imageBuffer: Buffer): Promise<any> {
    const formData = new FormData();
    formData.append('image', imageBuffer, {
      filename: Date.now().toString(),
      contentType: 'image/jpeg',
    });
    const response = await axios.post(
      'http://127.0.0.1:2000/predict',
      formData,
      {
        headers: formData.getHeaders(),
      },
    );
    return response.data;
  }
  catch(error: unknown) {
    console.error(error);
    throw new Error('Error contacting Flask server');
  }
}
