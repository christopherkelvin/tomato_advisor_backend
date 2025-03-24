import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserLoginDataDto } from '../dtos/get-user-login-data.dto';
import { UserService } from 'src/modules/user/provider/user.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private readonly hashingProvider: HashingProvider,
  ) {}
  async loginUser(loginData: GetUserLoginDataDto) {
    const user = await this.userService.getByName(loginData.email);
    if (user) {
      this.hashingProvider.comparePasswords(user.password);
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
