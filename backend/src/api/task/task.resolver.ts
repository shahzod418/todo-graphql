import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';

import { Task } from './model/task.model';
import { Count } from './model/count.model';

import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  tasks(@Args('userId', { type: () => String }) userId: User['id']) {
    return this.taskService.findAll(userId);
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') data: CreateTaskInput) {
    return this.taskService.create(data);
  }

  @Mutation(() => Task)
  updateTask(
    @Args('userId', { type: () => String }) userId: User['id'],
    @Args('taskId', { type: () => String }) taskId: Task['id'],
    @Args('updateTaskInput') data: UpdateTaskInput,
  ) {
    return this.taskService.update({ userId, taskId, data });
  }

  @Mutation(() => Task)
  completeTask(
    @Args('userId', { type: () => String }) userId: User['id'],
    @Args('taskId', { type: () => String }) taskId: Task['id'],
  ) {
    return this.taskService.complete(userId, taskId);
  }

  @Mutation(() => Count)
  removeTask(
    @Args('userId', { type: () => String }) userId: User['id'],
    @Args('taskIds', { type: () => [String] }) taskIds: Task['id'][],
  ) {
    return this.taskService.remove(userId, taskIds);
  }
}
