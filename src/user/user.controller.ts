import { Controller, Get, Param } from '@nestjs/common';
import { GetUserParamDto } from './dtos/get-user-params.dto';
@Controller('user')
export class UserController {
  @Get('/:id?')
  public getUser(@Param() getUserParamDto: GetUserParamDto) {
    console.log(getUserParamDto);
  }
  public createUser(@Body() userData:) {}
}
