import { Injectable } from '@nestjs/common';
import { GetUserLoginDataDto } from '../dtos/get-user-login-data.dto';

@Injectable()
export class AuthService {
  async loginUser(loginData: GetUserLoginDataDto) {
    return loginData;
  }
}
