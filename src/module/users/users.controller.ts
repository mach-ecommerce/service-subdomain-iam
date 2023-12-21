import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserCreateDTO } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() input: UserCreateDTO) {
    return this.usersService.execute(input);
  }
}
