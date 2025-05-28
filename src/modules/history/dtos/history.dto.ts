import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class HistoryDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  time: string;

  @IsOptional()
  @IsString()
  disease?: string;

  @IsOptional()
  @IsEnum(['Umetibiwa', 'Haujatibiwa', ''])
  treatmentStatus?: 'Umetibiwa' | 'Haujatibiwa' | '';
}
