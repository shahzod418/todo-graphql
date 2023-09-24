import { resolve } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { DatabaseModule } from '@database/database.module';

import { UserModule } from '@api/user/user.module';
import { TaskModule } from '@api/task/task.module';
import { CategoryModule } from '@api/category/category.module';
import { TaskCategoryModule } from '@api/task-category/task-category.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ServeStaticModule.forRoot({
      rootPath: resolve('../frontend/dist'),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: resolve('..', 'schema.gql'),
      sortSchema: true,
    }),
    DatabaseModule,
    UserModule,
    TaskModule,
    CategoryModule,
    TaskCategoryModule,
  ],
})
export class AppModule {}
