import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { signUpDto } from 'src/auth/authdto/signup.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {
  }  
      async findOne(username: string): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { username: username }});
      }

      async create(user:signUpDto){
        
        return this.userRepository.save(user);
      }
}
