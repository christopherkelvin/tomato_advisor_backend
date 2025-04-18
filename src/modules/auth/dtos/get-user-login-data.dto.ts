import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class GetUserLoginDataDto {
  @ApiProperty({ type: String, example: 'johndoe@gmail.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: 'password123' })
  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
