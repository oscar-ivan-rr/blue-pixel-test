import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'test',
      password: '123',
    },
    {
      userId: 2,
      username: 'admin',
      password: '890890',
    },
  ];

  findOne(username: string, password: string): User | undefined {
    return this.users.find(user => user.username === username && user.password === password);
  }
}
