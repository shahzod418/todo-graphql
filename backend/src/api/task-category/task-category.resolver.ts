import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { TaskCategory } from './model/task-category.model';

import { TaskCategoryInput } from './dto/task-category.input';

import { TaskCategoryService } from './task-category.service';

@Resolver()
export class TaskCategoryResolver {
  constructor(private readonly taskCategoryService: TaskCategoryService) {}

  @Mutation(() => TaskCategory)
  addTaskCategory(@Args('taskCategoryInput') data: TaskCategoryInput) {
    return this.taskCategoryService.add(data);
  }

  @Mutation(() => TaskCategory)
  removeTaskCategory(@Args('taskCategoryInput') data: TaskCategoryInput) {
    return this.taskCategoryService.remove(data);
  }
}
