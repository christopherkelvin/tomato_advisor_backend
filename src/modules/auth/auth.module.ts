import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './provider/auth.service';
import { UserModule } from 'src/modules/user/user.module';
import { HashingProvider } from './provider/hashing.provider';
import { BcryptProvider } from './provider/bcrypt.provider';
import { LogInProvider } from './provider/log-in.provider';

@Module({
  imports: [forwardRef(() => UserModule)],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: HashingProvider,
      useClass: BcryptProvider,
    },
    LogInProvider,
  ],
  exports: [AuthService, HashingProvider],
})
export class AuthModule {}
