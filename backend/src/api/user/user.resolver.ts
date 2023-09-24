import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from './model/user.model';

import { UserInput } from './dto/user.input';

import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User, { nullable: true })
  user(@Args('userInput') data: UserInput) {
    return this.userService.find(data);
  }

  @Mutation(() => User)
  createUser() {
    return this.userService.create();
  }
}
