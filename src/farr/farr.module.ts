import { Module } from '@nestjs/common';
import { FarrService } from './farr.service';
import { FarrController } from './farr.controller';
import { Farr } from './entities/farr.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Farr])],
  controllers: [FarrController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard 
    }
    ,FarrService]
})
export class FarrModule {}
