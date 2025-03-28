import {
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException,
} from '@nestjs/common';
import { GetUserLoginDataDto } from '../dtos/get-user-login-data.dto';
import { UserService } from 'src/modules/user/provider/user.service';
import { HashingProvider } from './hashing.provider';

@Injectable()
export class LogInProvider {
  constructor(
    // injecting user service
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,

    // injecting hashing provider
    private readonly hashingProvider: HashingProvider,
  ) {}
  public async logIn(logInDto: GetUserLoginDataDto) {
    const user = await this.userService.findOneUserByEmail(logInDto.email);
    //Compare password to hash password
    let isEqual: boolean = false;
    try {
      isEqual = await this.hashingProvider.comparePasswords(
        logInDto.password,
        user.password,
      );
    } catch (error) {
      throw new RequestTimeoutException(error, {
        description: 'Could not compare passwords',
      });
    }
    if (!isEqual) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      message: 'Login successful',
      user: { id: user.id, token: process.env.LOGIN_TOKEN },
    };
  }
}
