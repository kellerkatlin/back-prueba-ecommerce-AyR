import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'https://front-prueba-ecommerce-ayr-production.up.railway.app/',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
