import { Field, ID, InputType } from '@nestjs/graphql';
import { Prisma, User as IUser, Category as ICategory } from '@prisma/client';

@InputType()
export class UpdateCategoryInput implements Prisma.CategoryUpdateInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  color?: string;

  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => ID)
  categoryId: ICategory['id'];
}
