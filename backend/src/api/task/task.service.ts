import { Injectable } from '@nestjs/common';
import { Task, User } from '@prisma/client';

import { DatabaseService } from '../../database/database.service';

import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Injectable()
export class TaskService {
  constructor(private readonly db: DatabaseService) {}

  create(data: CreateTaskInput) {
    const { userId, ...taskInput } = data;

    return this.db.task.create({
      data: { ...taskInput, user: { connect: { id: userId } } },
    });
  }

  findAll(userId: User['id']) {
    return this.db.task.findMany({ where: { userId } });
  }

  update(args: {
    userId: User['id'];
    taskId: Task['id'];
    data: UpdateTaskInput;
  }) {
    const { userId, taskId, data } = args;

    return this.db.task.update({ where: { id: taskId, userId }, data });
  }

  complete(userId: User['id'], taskId: Task['id']) {
    return this.db.task.update({
      where: { id: taskId, userId },
      data: { completed: true },
    });
  }

  remove(userId: User['id'], taskIds: Task['id'][]) {
    return this.db.task.deleteMany({ where: { id: { in: taskIds }, userId } });
  }
}
