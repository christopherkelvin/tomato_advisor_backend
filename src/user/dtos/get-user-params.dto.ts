import { IsNumber } from 'class-validator';

export class GetUserParamDto {
  @IsNumber()
  id: number;
}
