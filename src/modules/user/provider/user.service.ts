import { ConflictException, Injectable } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { GetUserParamDto } from '../dtos/get-user-params.dto';
import { CreateUserProvider } from './create-user.provider';
import { UserDataDto } from '../dtos/user-data.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly createUserProvider: CreateUserProvider,
  ) {}

  async createUser(userData: UserDataDto) {
    return this.createUserProvider.createUser(userData);
  }
  async getUser(userId: GetUserParamDto) {
    const user = await this.userRepository.find({
      where: userId,
      select: ['id', 'firstname', 'lastname', 'phonenumber', 'email'],
    });
    if (!user) {
      throw new ConflictException('User not found');
    }
    return user;
  }
  async getByName(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
