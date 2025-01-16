import { Injectable } from '@nestjs/common';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDataDto } from '../dtos/user-data.dto';
import { GetUserParamDto } from '../dtos/get-user-params.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  async createUser(userData: UserDataDto) {
    const newUser = this.userRepository.create(userData);
    return await this.userRepository.save(newUser);
  }
  async getUser(userId: GetUserParamDto) {
    return await this.userRepository.find({ where: userId });
  }
}
