import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /*
   * Use validation pipes globally
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  /*
   * Install Swagger
   * npm i @nestjs/swagger@7.3.0
   */

  // Create the swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Cryser Tomato Advisor Documentation')
    .setDescription('Use the base API URL as http://localhost:4000')
    .setTermsOfService('http://localhost:4000/terms-of-service')
    .addServer('http://localhost:4000/')
    .setVersion('1.0')
    .build();
  // Instantiate Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(
    '/disease/static',
    express.static(
      join(__dirname, '..', 'src', 'modules', 'disease', 'static'),
    ),
  );
  app.use('/uploaded', express.static(join(__dirname, 'uploads')));
  await app.listen(process.env.DB_PORT);
}
bootstrap();
