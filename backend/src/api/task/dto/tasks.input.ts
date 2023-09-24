import { Field, ID, InputType } from '@nestjs/graphql';

import { User as IUser } from '@prisma/client';

@InputType()
export class TasksInput {
  @Field(() => ID)
  userId: IUser['id'];
}
