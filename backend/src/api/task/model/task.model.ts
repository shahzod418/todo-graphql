import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Task as ITask } from '@prisma/client';

@ObjectType()
export class Task implements ITask {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  completed: boolean;

  @Field({ nullable: true })
  description: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  userId: string;
}
