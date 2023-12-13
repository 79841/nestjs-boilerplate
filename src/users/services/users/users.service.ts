import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from '../../types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'anson',
      password: 'anson',
    },
    {
      username: 'danny',
      password: 'danny',
    },
    {
      password: 'derek',
      username: 'derek',
    },
    {
      username: 'samantha',
      password: 'samantha',
    },
  ];

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
