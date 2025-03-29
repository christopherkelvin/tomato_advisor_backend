import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs';
import * as fs from 'fs';
import * as jpeg from 'jpeg-js';
@Injectable()
export class ModelService {
  private model: tf.LayersModel;

  async loadModel() {
    try {
      const modelPath =
        'file://D:/Programming/Nestjs/tomato_advisor/tfjs_model/model.json';
      this.model = await tf.loadLayersModel(modelPath);

      if (this.model) {
        console.log('Model Loaded Successfully!');
        this.model.summary();
      } else {
        console.error('Failed to load the model.');
      }
    } catch (error) {
      console.error('Error loading the model:', error);
    }
  }

  private async preprocessImage(imagePath: string) {
    const imageBuffer = fs.readFileSync(imagePath);
    const rawImageData = jpeg.decode(imageBuffer, { useTArray: true });

    let { width, height, data } = rawImageData;

    // Convert to Tensor
    let imgTensor = tf.tensor3d(new Uint8Array(data), [height, width, 4]);

    // Remove Alpha Channel (RGBA → RGB)
    imgTensor = imgTensor.slice([0, 0, 0], [-1, -1, 3]);

    // Resize to match the model input size (adjust size accordingly)
    imgTensor = tf.image.resizeBilinear(imgTensor, [224, 224]); // Example: Resize to 224x224

    // Normalize the image to [0,1] range
    imgTensor = imgTensor.div(tf.scalar(255));

    // Expand dimensions to match batch format [1, height, width, channels]
    return imgTensor.expandDims(0);
  }

  async predict(imagePath: string) {
    if (!this.model) {
      throw new Error('Model not loaded yet.');
    }

    const inputTensor = await this.preprocessImage(imagePath);
    const prediction = this.model.predict(inputTensor) as tf.Tensor;
    const output = await prediction.data();

    return Array.from(output);
  }
}
