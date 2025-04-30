import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { envs } from './config';


async function bootstrap() {
  const logger = new Logger('Orders-MS');

  const app = await NestFactory.create(AppModule);
  await app.listen( envs.port ?? 3002);

  logger.log( `MS running on port ${ envs.port }` );
}
bootstrap();
