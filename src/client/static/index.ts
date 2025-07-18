// auto-generated by vovk-cli v0.0.1-draft.299 at 2025-07-18T17:49:48.504Z
import type { VovkClientFetcher } from 'vovk';
import { fetcher } from 'vovk';
import { createRPC } from 'vovk-react-query';
import { schema } from './schema';

import type { Controllers as Controllers0 } from "../../app/api/static/[[...vovk]]/route.ts";

import { validateOnClient } from 'vovk-ajv';

type Options = typeof fetcher extends VovkClientFetcher<infer U> ? U : never;

     
  
export const OpenApiRPC = createRPC<Controllers0["OpenApiRPC"], Options>(
  schema, 'static', 'OpenApiRPC', fetcher,
  { validateOnClient, apiRoot: 'http://localhost:3000/api' }
);

export { schema };
