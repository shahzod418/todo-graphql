import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Count } from '@model/count.model';
import { Category } from '@model/category.model';

import { CategoriesInput } from './dto/categories.input';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { RemoveCategoryInput } from './dto/remove-category.input';

import { CategoryService } from './category.service';

@Resolver()
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(() => [Category])
  categories(@Args('categoriesInput') data: CategoriesInput) {
    return this.categoryService.findAll(data);
  }

  @Mutation(() => Category)
  createCategory(@Args('createCategoryInput') data: CreateCategoryInput) {
    return this.categoryService.create(data);
  }

  @Mutation(() => Category)
  updateCategory(@Args('updateCategoryInput') data: UpdateCategoryInput) {
    return this.categoryService.update(data);
  }

  @Mutation(() => Count)
  removeCategory(@Args('removeCategoryInput') data: RemoveCategoryInput) {
    return this.categoryService.remove(data);
  }
}
