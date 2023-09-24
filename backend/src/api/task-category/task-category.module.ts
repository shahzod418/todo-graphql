import { Module } from '@nestjs/common';

import { TaskCategoryResolver } from './task-category.resolver';
import { TaskCategoryService } from './task-category.service';

@Module({
  providers: [TaskCategoryResolver, TaskCategoryService],
})
export class TaskCategoryModule {}
