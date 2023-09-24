import { Field, InputType, ID } from '@nestjs/graphql';

import { Prisma, User as IUser, Category as ICategory } from '@prisma/client';

@InputType()
export class CreateTaskInput
  implements Pick<Prisma.TaskCreateInput, 'title' | 'description'>
{
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => ID)
  userId: IUser['id'];

  @Field(() => ID, { nullable: true })
  categoryId?: ICategory['id'];
}
