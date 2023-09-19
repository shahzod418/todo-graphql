import { Field, InputType } from '@nestjs/graphql';
import { Prisma, User } from '@prisma/client';

@InputType()
export class CreateTaskInput
  implements Pick<Prisma.TaskCreateInput, 'title' | 'description'>
{
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => String)
  userId: User['id'];
}
