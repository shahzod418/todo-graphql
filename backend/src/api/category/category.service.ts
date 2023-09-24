import randomColor from 'randomcolor';

import { Injectable } from '@nestjs/common';

import { DatabaseService } from '@database/database.service';

import { CategoriesInput } from './dto/categories.input';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { RemoveCategoryInput } from './dto/remove-category.input';

@Injectable()
export class CategoryService {
  constructor(private readonly db: DatabaseService) {}

  findAll(data: CategoriesInput) {
    const { userId } = data;

    return this.db.category.findMany({ where: { userId } });
  }

  create(data: CreateCategoryInput) {
    const { title, color, userId } = data;

    return this.db.category.create({
      data: {
        title,
        userId,
        color: color || randomColor({ format: 'hex' }),
      },
    });
  }

  update(data: UpdateCategoryInput) {
    const { categoryId, userId, ...updateInput } = data;

    return this.db.category.update({
      where: { id: categoryId, userId },
      data: updateInput,
    });
  }

  remove(data: RemoveCategoryInput) {
    const { userId, categoryIds } = data;

    return this.db.category.deleteMany({
      where: { id: { in: categoryIds }, userId },
    });
  }
}
