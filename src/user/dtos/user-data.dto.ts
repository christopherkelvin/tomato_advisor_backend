import { isString } from 'util';

export class UserDataDto {
  @isString()
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string;
}
