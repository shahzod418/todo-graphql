import { Field, ID, InputType } from '@nestjs/graphql';

import {
  User as IUser,
  Task as ITask,
  Category as ICategory,
} from '@prisma/client';

@InputType()
export class TaskCategoryInput {
  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => ID)
  taskId: ITask['id'];

  @Field(() => ID)
  categoryId: ICategory['id'];
}
