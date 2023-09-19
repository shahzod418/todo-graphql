import { Injectable } from '@nestjs/common';

import { DatabaseService } from '../../database/database.service';

import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  create(data: CreateUserInput) {
    return this.db.user.create({ data });
  }

  async findAll() {
    return await this.db.user.findMany();
  }
}
