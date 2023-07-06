import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FarrModule } from './farr/farr.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Farr } from './farr/entities/farr.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Farr ,User],
      synchronize: true,
    }),FarrModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }],
})
export class AppModule {}
