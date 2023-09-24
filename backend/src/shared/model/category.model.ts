import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Category as ICategory } from '@prisma/client';

@ObjectType()
export class Category implements Omit<ICategory, 'userId'> {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  color: string;
}
