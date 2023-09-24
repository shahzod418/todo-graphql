export const GRAPHQL_URI = import.meta.env.DEV
  ? 'http://localhost/graphql'
  : `${window.location.href}/graphql`;
