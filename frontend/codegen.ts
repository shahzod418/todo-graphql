import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '../schema.gql',
  documents: 'src/**/*.gql',
  generates: {
    'src/graphql/__generated__/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  config: {
    maybeValue: 'T',
    immutableTypes: true,
  },
};

export default config;
