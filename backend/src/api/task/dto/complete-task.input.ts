import { Field, ID, InputType } from '@nestjs/graphql';

import { User as IUser, Task as ITask } from '@prisma/client';

@InputType()
export class CompleteTaskInput {
  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => ID)
  taskId: ITask['id'];
}
