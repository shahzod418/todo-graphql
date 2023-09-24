import { Field, ObjectType } from '@nestjs/graphql';

import { Prisma } from '@prisma/client';

@ObjectType()
export class Count implements Prisma.BatchPayload {
  @Field()
  count: number;
}
