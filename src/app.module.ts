import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './modules/auth/auth.module';
import { DiseaseModule } from './modules/disease/disease.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'tomato_advisor',
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        // synchronize: true,
      }),
    }),
    AuthModule,
    DiseaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
