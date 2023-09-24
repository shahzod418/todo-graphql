import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any };
};

export type CategoriesInput = {
  readonly userId: Scalars['ID']['input'];
};

export type Category = {
  readonly __typename?: 'Category';
  readonly color: Scalars['String']['output'];
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
};

export type CompleteTaskInput = {
  readonly taskId: Scalars['ID']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type Count = {
  readonly __typename?: 'Count';
  readonly count: Scalars['Float']['output'];
};

export type CreateCategoryInput = {
  readonly color?: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type CreateTaskInput = {
  readonly categoryId?: InputMaybe<Scalars['ID']['input']>;
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly title: Scalars['String']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly addTaskCategory: TaskCategory;
  readonly completeTask: Task;
  readonly createCategory: Category;
  readonly createTask: Task;
  readonly createUser: User;
  readonly removeCategory: Count;
  readonly removeTask: Count;
  readonly removeTaskCategory: TaskCategory;
  readonly updateCategory: Category;
  readonly updateTask: Task;
};

export type MutationAddTaskCategoryArgs = {
  taskCategoryInput: TaskCategoryInput;
};

export type MutationCompleteTaskArgs = {
  completeTaskInput: CompleteTaskInput;
};

export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};

export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};

export type MutationRemoveCategoryArgs = {
  removeCategoryInput: RemoveCategoryInput;
};

export type MutationRemoveTaskArgs = {
  removeTaskInput: RemoveTaskInput;
};

export type MutationRemoveTaskCategoryArgs = {
  taskCategoryInput: TaskCategoryInput;
};

export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};

export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly categories: ReadonlyArray<Category>;
  readonly tasks: ReadonlyArray<Task>;
  readonly user?: Maybe<User>;
};

export type QueryCategoriesArgs = {
  categoriesInput: CategoriesInput;
};

export type QueryTasksArgs = {
  tasksInput: TasksInput;
};

export type QueryUserArgs = {
  userInput: UserInput;
};

export type RemoveCategoryInput = {
  readonly categoryIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly userId: Scalars['ID']['input'];
};

export type RemoveTaskInput = {
  readonly taskIds: ReadonlyArray<Scalars['ID']['input']>;
  readonly userId: Scalars['ID']['input'];
};

export type Task = {
  readonly __typename?: 'Task';
  readonly category: ReadonlyArray<Category>;
  readonly completed: Scalars['Boolean']['output'];
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly title: Scalars['String']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TaskCategory = {
  readonly __typename?: 'TaskCategory';
  readonly category: ReadonlyArray<Category>;
  readonly id: Scalars['ID']['output'];
  readonly updatedAt: Scalars['DateTime']['output'];
};

export type TaskCategoryInput = {
  readonly categoryId: Scalars['ID']['input'];
  readonly taskId: Scalars['ID']['input'];
  readonly userId: Scalars['ID']['input'];
};

export type TasksInput = {
  readonly userId: Scalars['ID']['input'];
};

export type UpdateCategoryInput = {
  readonly categoryId: Scalars['ID']['input'];
  readonly color?: InputMaybe<Scalars['String']['input']>;
  readonly id: Scalars['ID']['input'];
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly userId: Scalars['ID']['input'];
};

export type UpdateTaskInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly taskId: Scalars['ID']['input'];
  readonly title?: InputMaybe<Scalars['String']['input']>;
  readonly userId: Scalars['ID']['input'];
};

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['ID']['output'];
};

export type UserInput = {
  readonly userId: Scalars['ID']['input'];
};

export type AddTaskCategoryMutationVariables = Exact<{
  taskCategoryInput: TaskCategoryInput;
}>;

export type AddTaskCategoryMutation = {
  readonly __typename?: 'Mutation';
  readonly addTaskCategory: {
    readonly __typename?: 'TaskCategory';
    readonly id: string;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  };
};

export type CompleteTaskMutationVariables = Exact<{
  completeTaskInput: CompleteTaskInput;
}>;

export type CompleteTaskMutation = {
  readonly __typename?: 'Mutation';
  readonly completeTask: {
    readonly __typename?: 'Task';
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly completed: boolean;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  };
};

export type CreateCategoryMutationVariables = Exact<{
  createCategoryInput: CreateCategoryInput;
}>;

export type CreateCategoryMutation = {
  readonly __typename?: 'Mutation';
  readonly createCategory: {
    readonly __typename?: 'Category';
    readonly id: string;
    readonly title: string;
    readonly color: string;
  };
};

export type CreateTaskMutationVariables = Exact<{
  createTaskInput: CreateTaskInput;
}>;

export type CreateTaskMutation = {
  readonly __typename?: 'Mutation';
  readonly createTask: {
    readonly __typename?: 'Task';
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly completed: boolean;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  };
};

export type CreateUserMutationVariables = Exact<{ [key: string]: never }>;

export type CreateUserMutation = {
  readonly __typename?: 'Mutation';
  readonly createUser: { readonly __typename?: 'User'; readonly id: string };
};

export type RemoveCategoryMutationVariables = Exact<{
  removeCategoryInput: RemoveCategoryInput;
}>;

export type RemoveCategoryMutation = {
  readonly __typename?: 'Mutation';
  readonly removeCategory: { readonly __typename?: 'Count'; readonly count: number };
};

export type RemoveTaskCategoryMutationVariables = Exact<{
  taskCategoryInput: TaskCategoryInput;
}>;

export type RemoveTaskCategoryMutation = {
  readonly __typename?: 'Mutation';
  readonly removeTaskCategory: {
    readonly __typename?: 'TaskCategory';
    readonly id: string;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  };
};

export type RemoveTaskMutationVariables = Exact<{
  removeTaskInput: RemoveTaskInput;
}>;

export type RemoveTaskMutation = {
  readonly __typename?: 'Mutation';
  readonly removeTask: { readonly __typename?: 'Count'; readonly count: number };
};

export type UpdateCategoryMutationVariables = Exact<{
  updateCategoryInput: UpdateCategoryInput;
}>;

export type UpdateCategoryMutation = {
  readonly __typename?: 'Mutation';
  readonly updateCategory: {
    readonly __typename?: 'Category';
    readonly id: string;
    readonly title: string;
    readonly color: string;
  };
};

export type UpdateTaskMutationVariables = Exact<{
  updateTaskInput: UpdateTaskInput;
}>;

export type UpdateTaskMutation = {
  readonly __typename?: 'Mutation';
  readonly updateTask: {
    readonly __typename?: 'Task';
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly completed: boolean;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  };
};

export type CategoriesQueryVariables = Exact<{
  categoriesInput: CategoriesInput;
}>;

export type CategoriesQuery = {
  readonly __typename?: 'Query';
  readonly categories: ReadonlyArray<{
    readonly __typename?: 'Category';
    readonly id: string;
    readonly title: string;
    readonly color: string;
  }>;
};

export type TasksQueryVariables = Exact<{
  tasksInput: TasksInput;
}>;

export type TasksQuery = {
  readonly __typename?: 'Query';
  readonly tasks: ReadonlyArray<{
    readonly __typename?: 'Task';
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly completed: boolean;
    readonly updatedAt: any;
    readonly category: ReadonlyArray<{
      readonly __typename?: 'Category';
      readonly id: string;
      readonly title: string;
      readonly color: string;
    }>;
  }>;
};

export type UserQueryVariables = Exact<{
  userInput: UserInput;
}>;

export type UserQuery = {
  readonly __typename?: 'Query';
  readonly user?: { readonly __typename?: 'User'; readonly id: string };
};

export const AddTaskCategoryDocument = gql`
  mutation AddTaskCategory($taskCategoryInput: TaskCategoryInput!) {
    addTaskCategory(taskCategoryInput: $taskCategoryInput) {
      id
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;
export type AddTaskCategoryMutationFn = Apollo.MutationFunction<
  AddTaskCategoryMutation,
  AddTaskCategoryMutationVariables
>;

/**
 * __useAddTaskCategoryMutation__
 *
 * To run a mutation, you first call `useAddTaskCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskCategoryMutation, { data, loading, error }] = useAddTaskCategoryMutation({
 *   variables: {
 *      taskCategoryInput: // value for 'taskCategoryInput'
 *   },
 * });
 */
export function useAddTaskCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddTaskCategoryMutation,
    AddTaskCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AddTaskCategoryMutation, AddTaskCategoryMutationVariables>(
    AddTaskCategoryDocument,
    options,
  );
}
export type AddTaskCategoryMutationHookResult = ReturnType<typeof useAddTaskCategoryMutation>;
export type AddTaskCategoryMutationResult = Apollo.MutationResult<AddTaskCategoryMutation>;
export type AddTaskCategoryMutationOptions = Apollo.BaseMutationOptions<
  AddTaskCategoryMutation,
  AddTaskCategoryMutationVariables
>;
export const CompleteTaskDocument = gql`
  mutation CompleteTask($completeTaskInput: CompleteTaskInput!) {
    completeTask(completeTaskInput: $completeTaskInput) {
      id
      title
      description
      completed
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;
export type CompleteTaskMutationFn = Apollo.MutationFunction<
  CompleteTaskMutation,
  CompleteTaskMutationVariables
>;

/**
 * __useCompleteTaskMutation__
 *
 * To run a mutation, you first call `useCompleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeTaskMutation, { data, loading, error }] = useCompleteTaskMutation({
 *   variables: {
 *      completeTaskInput: // value for 'completeTaskInput'
 *   },
 * });
 */
export function useCompleteTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CompleteTaskMutation, CompleteTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CompleteTaskMutation, CompleteTaskMutationVariables>(
    CompleteTaskDocument,
    options,
  );
}
export type CompleteTaskMutationHookResult = ReturnType<typeof useCompleteTaskMutation>;
export type CompleteTaskMutationResult = Apollo.MutationResult<CompleteTaskMutation>;
export type CompleteTaskMutationOptions = Apollo.BaseMutationOptions<
  CompleteTaskMutation,
  CompleteTaskMutationVariables
>;
export const CreateCategoryDocument = gql`
  mutation CreateCategory($createCategoryInput: CreateCategoryInput!) {
    createCategory(createCategoryInput: $createCategoryInput) {
      id
      title
      color
    }
  }
`;
export type CreateCategoryMutationFn = Apollo.MutationFunction<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      createCategoryInput: // value for 'createCategoryInput'
 *   },
 * });
 */
export function useCreateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(
    CreateCategoryDocument,
    options,
  );
}
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const CreateTaskDocument = gql`
  mutation CreateTask($createTaskInput: CreateTaskInput!) {
    createTask(createTaskInput: $createTaskInput) {
      id
      title
      description
      completed
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;
export type CreateTaskMutationFn = Apollo.MutationFunction<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      createTaskInput: // value for 'createTaskInput'
 *   },
 * });
 */
export function useCreateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(
    CreateTaskDocument,
    options,
  );
}
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<
  CreateTaskMutation,
  CreateTaskMutationVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser {
    createUser {
      id
    }
  }
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const RemoveCategoryDocument = gql`
  mutation RemoveCategory($removeCategoryInput: RemoveCategoryInput!) {
    removeCategory(removeCategoryInput: $removeCategoryInput) {
      count
    }
  }
`;
export type RemoveCategoryMutationFn = Apollo.MutationFunction<
  RemoveCategoryMutation,
  RemoveCategoryMutationVariables
>;

/**
 * __useRemoveCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCategoryMutation, { data, loading, error }] = useRemoveCategoryMutation({
 *   variables: {
 *      removeCategoryInput: // value for 'removeCategoryInput'
 *   },
 * });
 */
export function useRemoveCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveCategoryMutation, RemoveCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveCategoryMutation, RemoveCategoryMutationVariables>(
    RemoveCategoryDocument,
    options,
  );
}
export type RemoveCategoryMutationHookResult = ReturnType<typeof useRemoveCategoryMutation>;
export type RemoveCategoryMutationResult = Apollo.MutationResult<RemoveCategoryMutation>;
export type RemoveCategoryMutationOptions = Apollo.BaseMutationOptions<
  RemoveCategoryMutation,
  RemoveCategoryMutationVariables
>;
export const RemoveTaskCategoryDocument = gql`
  mutation RemoveTaskCategory($taskCategoryInput: TaskCategoryInput!) {
    removeTaskCategory(taskCategoryInput: $taskCategoryInput) {
      id
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;
export type RemoveTaskCategoryMutationFn = Apollo.MutationFunction<
  RemoveTaskCategoryMutation,
  RemoveTaskCategoryMutationVariables
>;

/**
 * __useRemoveTaskCategoryMutation__
 *
 * To run a mutation, you first call `useRemoveTaskCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskCategoryMutation, { data, loading, error }] = useRemoveTaskCategoryMutation({
 *   variables: {
 *      taskCategoryInput: // value for 'taskCategoryInput'
 *   },
 * });
 */
export function useRemoveTaskCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTaskCategoryMutation,
    RemoveTaskCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTaskCategoryMutation, RemoveTaskCategoryMutationVariables>(
    RemoveTaskCategoryDocument,
    options,
  );
}
export type RemoveTaskCategoryMutationHookResult = ReturnType<typeof useRemoveTaskCategoryMutation>;
export type RemoveTaskCategoryMutationResult = Apollo.MutationResult<RemoveTaskCategoryMutation>;
export type RemoveTaskCategoryMutationOptions = Apollo.BaseMutationOptions<
  RemoveTaskCategoryMutation,
  RemoveTaskCategoryMutationVariables
>;
export const RemoveTaskDocument = gql`
  mutation RemoveTask($removeTaskInput: RemoveTaskInput!) {
    removeTask(removeTaskInput: $removeTaskInput) {
      count
    }
  }
`;
export type RemoveTaskMutationFn = Apollo.MutationFunction<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;

/**
 * __useRemoveTaskMutation__
 *
 * To run a mutation, you first call `useRemoveTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTaskMutation, { data, loading, error }] = useRemoveTaskMutation({
 *   variables: {
 *      removeTaskInput: // value for 'removeTaskInput'
 *   },
 * });
 */
export function useRemoveTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<RemoveTaskMutation, RemoveTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTaskMutation, RemoveTaskMutationVariables>(
    RemoveTaskDocument,
    options,
  );
}
export type RemoveTaskMutationHookResult = ReturnType<typeof useRemoveTaskMutation>;
export type RemoveTaskMutationResult = Apollo.MutationResult<RemoveTaskMutation>;
export type RemoveTaskMutationOptions = Apollo.BaseMutationOptions<
  RemoveTaskMutation,
  RemoveTaskMutationVariables
>;
export const UpdateCategoryDocument = gql`
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      id
      title
      color
    }
  }
`;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      updateCategoryInput: // value for 'updateCategoryInput'
 *   },
 * });
 */
export function useUpdateCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(
    UpdateCategoryDocument,
    options,
  );
}
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<
  UpdateCategoryMutation,
  UpdateCategoryMutationVariables
>;
export const UpdateTaskDocument = gql`
  mutation UpdateTask($updateTaskInput: UpdateTaskInput!) {
    updateTask(updateTaskInput: $updateTaskInput) {
      id
      title
      description
      completed
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;
export type UpdateTaskMutationFn = Apollo.MutationFunction<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTaskInput: // value for 'updateTaskInput'
 *   },
 * });
 */
export function useUpdateTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(
    UpdateTaskDocument,
    options,
  );
}
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<
  UpdateTaskMutation,
  UpdateTaskMutationVariables
>;
export const CategoriesDocument = gql`
  query Categories($categoriesInput: CategoriesInput!) {
    categories(categoriesInput: $categoriesInput) {
      id
      title
      color
    }
  }
`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      categoriesInput: // value for 'categoriesInput'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
}
export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  );
}
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const TasksDocument = gql`
  query Tasks($tasksInput: TasksInput!) {
    tasks(tasksInput: $tasksInput) {
      id
      title
      description
      completed
      category {
        id
        title
        color
      }
      updatedAt
    }
  }
`;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *      tasksInput: // value for 'tasksInput'
 *   },
 * });
 */
export function useTasksQuery(
  baseOptions: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
}
export function useTasksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
}
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const UserDocument = gql`
  query User($userInput: UserInput!) {
    user(userInput: $userInput) {
      id
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userInput: // value for 'userInput'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
