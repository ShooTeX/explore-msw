
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://rickandmortyapi.com/graphql",
  documents: "**/*.graphql",
  generates: {
    "graphql/generated/sdk.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-msw", "typescript-graphql-request", "typescript-mock-data"],
      config: {
        terminateCircularRelationships: true,
      }
    },
  }
};

export default config;
