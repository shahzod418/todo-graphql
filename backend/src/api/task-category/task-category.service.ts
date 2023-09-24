import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@database/database.service';

import { TaskCategoryInput } from './dto/task-category.input';

@Injectable()
export class TaskCategoryService {
  private readonly dbInclude = {
    category: { select: { title: true, color: true } },
  };

  constructor(private readonly db: DatabaseService) {}

  add(data: TaskCategoryInput) {
    const { userId, taskId, categoryId } = data;

    return this.db.task.update({
      where: { id: taskId, userId },
      data: { category: { connect: { id: categoryId } } },
      include: this.dbInclude,
    });
  }

  remove(data: TaskCategoryInput) {
    const { userId, taskId, categoryId } = data;

    return this.db.task.update({
      where: { id: taskId, userId },
      data: { category: { disconnect: { id: categoryId } } },
      include: this.dbInclude,
    });
  }
}
