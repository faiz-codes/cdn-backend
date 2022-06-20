import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // enable CORS to enable communication with Angular
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
