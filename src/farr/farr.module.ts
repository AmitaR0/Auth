import { Module } from '@nestjs/common';
import { FarrService } from './farr.service';
import { FarrController } from './farr.controller';
import { Farr } from './entities/farr.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Farr])],
  controllers: [FarrController],
  providers: [FarrService]
})
export class FarrModule {}
