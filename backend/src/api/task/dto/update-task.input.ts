import { Field, ID, InputType } from '@nestjs/graphql';

import { Prisma, User as IUser, Task as ITask } from '@prisma/client';

@InputType()
export class UpdateTaskInput implements Prisma.TaskUpdateInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => ID)
  taskId: ITask['id'];
}
