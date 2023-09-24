import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Count } from '@model/count.model';

import { Task } from './model/task.model';

import { TasksInput } from './dto/tasks.input';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { CompleteTaskInput } from './dto/complete-task.input';
import { RemoveTaskInput } from './dto/remove-task.input';

import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Query(() => [Task])
  tasks(@Args('tasksInput') data: TasksInput) {
    return this.taskService.findAll(data);
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') data: CreateTaskInput) {
    return this.taskService.create(data);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') data: UpdateTaskInput) {
    return this.taskService.update(data);
  }

  @Mutation(() => Task)
  completeTask(@Args('completeTaskInput') data: CompleteTaskInput) {
    return this.taskService.complete(data);
  }

  @Mutation(() => Count)
  removeTask(@Args('removeTaskInput') data: RemoveTaskInput) {
    return this.taskService.remove(data);
  }
}
