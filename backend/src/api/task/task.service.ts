import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@database/database.service';

import { TasksInput } from './dto/tasks.input';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { CompleteTaskInput } from './dto/complete-task.input';
import { RemoveTaskInput } from './dto/remove-task.input';

@Injectable()
export class TaskService {
  private readonly dbInclude = {
    category: { select: { title: true, color: true } },
  };

  constructor(private readonly db: DatabaseService) {}

  findAll(data: TasksInput) {
    const { userId } = data;

    return this.db.task.findMany({
      where: { userId },
      include: this.dbInclude,
    });
  }

  create(data: CreateTaskInput) {
    const { userId, categoryId, ...taskInput } = data;

    return this.db.task.create({
      include: {
        category: {
          select: { title: true, color: true },
          where: { userId },
        },
      },
      data: {
        ...taskInput,
        user: { connect: { id: userId } },
        category: { connect: { id: categoryId } },
      },
    });
  }

  update(data: UpdateTaskInput) {
    const { userId, taskId, ...updateInput } = data;

    return this.db.task.update({
      where: { id: taskId, userId },
      include: this.dbInclude,
      data: updateInput,
    });
  }

  complete(data: CompleteTaskInput) {
    const { userId, taskId } = data;

    return this.db.task.update({
      where: { id: taskId, userId },
      include: this.dbInclude,
      data: { completed: true },
    });
  }

  remove(data: RemoveTaskInput) {
    const { userId, taskIds } = data;

    return this.db.task.deleteMany({
      where: { id: { in: taskIds }, userId },
    });
  }
}
