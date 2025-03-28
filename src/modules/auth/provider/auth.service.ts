import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserLoginDataDto } from '../dtos/get-user-login-data.dto';
import { UserService } from 'src/modules/user/provider/user.service';
import { HashingProvider } from './hashing.provider';
import { LogInProvider } from './log-in.provider';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly hashingProvider: HashingProvider,
    private readonly logInProvider: LogInProvider,
  ) {}
  async loginUser(loginData: GetUserLoginDataDto) {
    const user = await this.userService.getByName(loginData.email);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.logInProvider.logIn(loginData);
  }
}
