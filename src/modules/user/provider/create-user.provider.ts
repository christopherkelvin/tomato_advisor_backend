import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserDataDto } from '../dtos/user-data.dto';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { HashingProvider } from 'src/modules/auth/provider/hashing.provider';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateUserProvider {
  constructor(
    //Inject user provider
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    //Inject auth provider
    @Inject(forwardRef(() => HashingProvider))
    private hashingProvider: HashingProvider,
  ) {}
  async createUser(userData: UserDataDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create({
        ...UserDataDto,
        password: await this.hashingProvider.hashPassword(userData.password),
      });
      return await this.userRepository.save(newUser);
    } catch (error) {
      if (error.code === '23505' || error.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Email or phone number already exists');
      }
      throw new InternalServerErrorException('Something went wrong');
    }
  }
}
