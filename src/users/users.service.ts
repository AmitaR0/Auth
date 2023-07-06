import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          roles:'admin',
          username: 'a',
          password: 'a',
        },
        {
          userId: 2,
          roles:'user',
          username: 'u',
          password: 'u',
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
