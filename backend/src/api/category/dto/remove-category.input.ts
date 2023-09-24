import { Field, ID, InputType } from '@nestjs/graphql';

import { User as IUser, Category as ICategory } from '@prisma/client';

@InputType()
export class RemoveCategoryInput {
  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => [ID])
  categoryIds: ICategory['id'][];
}
