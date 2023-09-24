import { Field, ID, InputType } from '@nestjs/graphql';

import { Prisma, User as IUser } from '@prisma/client';

@InputType()
export class CreateCategoryInput
  implements
    Pick<Prisma.CategoryCreateInput, 'title'>,
    Partial<Pick<Prisma.CategoryCreateInput, 'color'>>
{
  @Field()
  title: string;

  @Field({ nullable: true })
  color?: string;

  @Field(() => ID)
  userId: IUser['id'];
}
