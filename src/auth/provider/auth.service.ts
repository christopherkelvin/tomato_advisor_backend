import { Injectable, UnauthorizedException } from '@nestjs/common';
import { GetUserLoginDataDto } from '../dtos/get-user-login-data.dto';
import { UserService } from 'src/user/provider/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async loginUser(loginData: GetUserLoginDataDto) {
    const user = await this.userService.getByName(loginData.email);
    if (user && user.password === loginData.password) {
      return {
        message: 'Login successful',
        data: {
          accessToken: 'Fake Token',
          userId: user.id,
          email: user.email,
        },
      };
    }
    throw new UnauthorizedException('Invalid credentials');
  }
}
