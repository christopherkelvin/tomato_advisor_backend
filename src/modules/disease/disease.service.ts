import { Injectable } from '@nestjs/common';
import { diseaseTreaments } from './tomato_disease_treatment';
@Injectable()
export class DiseaseService {
  getDisease(diseaseName: string) {
    return diseaseTreaments.find((disease) => disease.name === diseaseName);
  }
}
