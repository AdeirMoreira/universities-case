import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpStatus, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Bis2Bis, API Universidades')
    .setDescription(
      `
    Uma API de Universidades para o case da Bis2Bis 👩‍🎓🎓👨‍🎓
    Antes de começar a usar os endpoints das universidades, você pode popular o banco de dados com os resgistros de todas as
    universidades da America do Sul, caso queria. Para isso rode a requisição Post da seção Banco de dados. 📝
    `,
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
