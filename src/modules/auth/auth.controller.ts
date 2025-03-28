import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GetUserLoginDataDto } from './dtos/get-user-login-data.dto';
import { AuthService } from './provider/auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'Login user' })
  @Post('log-in')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: GetUserLoginDataDto) {
    return this.authService.loginUser(loginDto);
  }
}
