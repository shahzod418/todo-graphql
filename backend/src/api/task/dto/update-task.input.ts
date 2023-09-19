import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UpdateTaskInput implements Prisma.TaskUpdateInput {
  @Field()
  title?: string;

  @Field()
  description?: string;
}
