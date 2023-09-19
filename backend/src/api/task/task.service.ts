import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';

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

  findAll() {
    return this.db.task.findMany();
  }

  update(taskId: Task['id'], data: UpdateTaskInput) {
    return this.db.task.update({ where: { id: taskId }, data });
  }

  complete(taskId: Task['id']) {
    return this.db.task.update({
      where: { id: taskId },
      data: { completed: true },
    });
  }
}
