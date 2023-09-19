import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { UserService } from './user.service';
import { User } from './model/user.model';
import { CreateUserInput } from './dto/create-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  users() {
    return this.userService.findAll();
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') data: CreateUserInput) {
    return this.userService.create(data);
  }
}
