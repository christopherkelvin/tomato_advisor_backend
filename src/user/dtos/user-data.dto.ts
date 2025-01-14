import { IsString, IsEmail, IsPhoneNumber } from 'class-validator';

export class UserDataDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber('TZ', {
    message: 'Please provide a valid Tanzanian phone number',
  })
  phone: number;
}
