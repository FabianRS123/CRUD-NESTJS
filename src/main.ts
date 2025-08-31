import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.use(morgan('dev'));
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );


  await app.listen(process.env.PORT ?? 3000);
  console.log(`Aplicacion corriendo en el http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
