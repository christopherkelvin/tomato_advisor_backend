import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class GetUserParamDto {
  @ApiProperty({
    type: Number,
    description: 'User ID',
    example: 6,
  })
  @IsNumberString()
  id: number;
}
