import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  MinLength,
} from 'class-validator';

export class UserDataDto {
  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber('TZ')
  @IsNotEmpty()
  phonenumber: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
