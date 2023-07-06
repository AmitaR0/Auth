import { Injectable } from '@nestjs/common';
import { CreateFarrDto } from './dto/create-farr.dto';
import { UpdateFarrDto } from './dto/update-farr.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Farr } from './entities/farr.entity';
import { Repository } from "typeorm";

@Injectable()
export class FarrService {
  constructor(
    @InjectRepository(Farr) private farrRepository: Repository<Farr>
  ) {
  }

  create(createFarrDto: CreateFarrDto) {
    return this.farrRepository.save(createFarrDto);
  }

  findAll() {
    return this.farrRepository.find();
  }

  findOne(id: number) {
    return this.farrRepository.findOne({ where: { id: id }});
  }

  update(id: number, updateFarrDto: UpdateFarrDto) {
    return this.farrRepository.update(id,updateFarrDto);
  }

  remove(id: number) {
    return this.farrRepository.delete(id);
  }
}
