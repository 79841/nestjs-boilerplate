import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './../../services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    return this.usersService.getUsers();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/:username')
  getByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return new SerializedUser(user);
    else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
  }
}
