import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Task } from './model/task.model';

import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  tasks() {
    return this.taskService.findAll();
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') data: CreateTaskInput) {
    return this.taskService.create(data);
  }

  @Mutation(() => Task)
  updateTask(
    @Args('taskId', { type: () => String }) taskId: Task['id'],
    @Args('updateTaskInput') data: UpdateTaskInput,
  ) {
    return this.taskService.update(taskId, data);
  }

  @Mutation(() => Task)
  completeTask(@Args('taskId', { type: () => String }) taskId: Task['id']) {
    return this.taskService.complete(taskId);
  }
}
