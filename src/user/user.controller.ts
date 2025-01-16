import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUserParamDto } from './dtos/get-user-params.dto';
import { UserDataDto } from './dtos/user-data.dto';
import { UserService } from './provider/user.service';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/:id?')
  public getUser(@Param() getUserParamDto: GetUserParamDto) {
    return this.userService.getUser(getUserParamDto);
  }

  @Post()
  public createUser(@Body() userData: UserDataDto) {
    return this.userService.createUser(userData);
  }
}
