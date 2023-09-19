import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateUserInput implements Prisma.UserCreateInput {
  @Field()
  id: string;
}
