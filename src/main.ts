import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Task Management API')
    .setDescription('API для работы с досками, задачами и пользователями')
    .setVersion('1.0')
    .addTag('Boards', 'Эндпоинты для работы с досками')
    .addTag('Tasks', 'Эндпоинты для работы с задачами')
    .addTag('Users', 'Эндпоинты для работы с пользователями')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
