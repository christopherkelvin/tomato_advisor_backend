import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
  MaxLength,
} from 'class-validator';

export class UserDataDto {
  @ApiProperty({
    description: 'The user first name should be at least 3 characters',
    type: String,
    example: 'John',
  })
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    description: 'The user last name should be at least 3 characters',
    type: String,
    example: 'John',
  })
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ type: String, example: 'john@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, example: '+255789012345' })
  @IsPhoneNumber('TZ')
  @IsNotEmpty()
  phonenumber: string;

  @ApiProperty({
    description: 'The password should be at least 6 characters',
    type: String,
    example: 'password123',
  })
  @MinLength(6)
  @MaxLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
