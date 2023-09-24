import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@database/database.service';

import { UserInput } from './dto/user.input';

@Injectable()
export class UserService {
  constructor(private readonly db: DatabaseService) {}

  find(data: UserInput) {
    const { userId } = data;

    return this.db.user.findUnique({ where: { id: userId } });
  }

  create() {
    return this.db.user.create({ data: {} });
  }
}
