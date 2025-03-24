import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GetUserParamDto } from './dtos/get-user-params.dto';
import { UserDataDto } from './dtos/user-data.dto';
import { UserService } from './provider/user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './user.entity';
@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get user information by id' })
  @ApiResponse({
    status: 200,
    description: 'User fetched successfully based on the query',
  })
  @Get('/:id')
  public getUser(@Param() getUserParamDto: GetUserParamDto) {
    return this.userService.getUser(getUserParamDto);
  }

  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 200,
    description: 'User created successfully ',
  })
  @Post()
  public createUser(@Body() userData: UserDataDto) {
    return this.userService.createUser(userData);
  }
}
