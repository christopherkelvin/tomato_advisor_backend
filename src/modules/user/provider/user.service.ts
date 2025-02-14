import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
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
  async createUser(userData: UserDataDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(userData);
      return await this.userRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505' || error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email or phone number already exists');
      }
      throw new InternalServerErrorException('Something went wrong');
    }
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
