import { Injectable } from '@nestjs/common';
import { UserCreateDTO } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async execute(input: UserCreateDTO) {
    const createdUser = new this.userModel(input);
    createdUser.save();
  }
}
