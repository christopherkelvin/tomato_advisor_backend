import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class getDiseaseParamsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(
    [
      'Early Blight',
      'Late Blight',
      'Bacterial Spot',
      'Septoria Leaf Spot',
      'Tomato Yellow Leaf Curl Virus (TYLCV)',
      'Leaf Mold',
      'Tomato Mosaic Virus',
      'Spider Mites (Two-Spotted Spider Mite)',
      'Target Spot',
      'Healthy',
    ],
    { message: 'Invalid disease name' },
  )
  name: string;
}
