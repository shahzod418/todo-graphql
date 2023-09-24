import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Task as ITask, Category as ICategory } from '@prisma/client';

import { Category } from '@model/category.model';

@ObjectType()
export class TaskCategory implements Pick<ITask, 'id' | 'updatedAt'> {
  @Field(() => ID)
  id: string;

  @Field()
  updatedAt: Date;

  @Field(() => [Category])
  category: Pick<ICategory, 'title' | 'color'>[];
}
