/* eslint-disable prettier/prettier */
import { AppModule } from './src/app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function boostrap() {    
    const app = await NestFactory.create(AppModule);

    process.env.TZ = '-03:00'

    app.useGlobalPipes(new ValidationPipe());

    app.enableCors();

    await app.listen(process.env.PORT ?? 4000);

}
boostrap();