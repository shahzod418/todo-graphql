import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Task as ITask, Category as ICategory } from '@prisma/client';

import { Category } from '@model/category.model';

@ObjectType()
export class Task implements Omit<ITask, 'createdAt' | 'userId'> {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  completed: boolean;

  @Field({ nullable: true })
  description: string;

  @Field()
  updatedAt: Date;

  @Field(() => [Category])
  category: Pick<ICategory, 'title' | 'color'>[];
}
