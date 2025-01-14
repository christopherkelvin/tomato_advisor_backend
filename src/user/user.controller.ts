import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUserParamDto } from './dtos/get-user-params.dto';
import { UserDataDto } from './dtos/user-data.dto';
@Controller('user')
export class UserController {
  @Get('/:id?')
  public getUser(@Param() getUserParamDto: GetUserParamDto) {
    console.log(getUserParamDto);
  }

  @Post()
  public createUser(@Body() userData: UserDataDto) {
    console.log(userData);
  }
}
