import * as vovk0 from "vovk";
import { VovkClientFetcher } from "vovk";
import * as _tanstack_react_query8 from "@tanstack/react-query";
import * as _tanstack_query_core9 from "@tanstack/query-core";
import * as openapi3_ts_oas3139 from "openapi3-ts/oas31";

//#region tmp_ts_rpc/schema.d.ts
declare const schema: {
  $schema: string;
  segments: {
    "": {
      $schema: string;
      emitSchema: boolean;
      segmentName: string;
      controllers: {
        UserRPC: {
          rpcModuleName: string;
          originalControllerName: string;
          prefix: string;
          handlers: {
            updateUser: {
              validation: {
                body: {
                  $schema: string;
                  description: string;
                  type: string;
                  properties: {
                    email: {
                      description: string;
                      examples: string[];
                      type: string;
                      format: string;
                      pattern: string;
                    };
                    profile: {
                      description: string;
                      type: string;
                      properties: {
                        name: {
                          description: string;
                          examples: string[];
                          type: string;
                        };
                        age: {
                          description: string;
                          examples: number[];
                          type: string;
                          minimum: number;
                          maximum: number;
                        };
                      };
                      required: string[];
                      additionalProperties: boolean;
                    };
                  };
                  required: string[];
                  additionalProperties: boolean;
                };
                query: {
                  $schema: string;
                  description: string;
                  type: string;
                  properties: {
                    notify: {
                      description: string;
                      type: string;
                      enum: string[];
                    };
                  };
                  required: string[];
                  additionalProperties: boolean;
                };
                params: {
                  $schema: string;
                  description: string;
                  type: string;
                  properties: {
                    id: {
                      description: string;
                      examples: string[];
                      type: string;
                      format: string;
                      pattern: string;
                    };
                  };
                  required: string[];
                  additionalProperties: boolean;
                };
                output: {
                  $schema: string;
                  description: string;
                  type: string;
                  properties: {
                    success: {
                      description: string;
                      type: string;
                    };
                  };
                  required: string[];
                  additionalProperties: boolean;
                };
              };
              path: string;
              httpMethod: string;
              openapi: {
                summary: string;
                description: string;
              };
            };
          };
        };
        StreamRPC: {
          rpcModuleName: string;
          originalControllerName: string;
          prefix: string;
          handlers: {
            streamTokens: {
              validation: {
                iteration: {
                  $schema: string;
                  description: string;
                  type: string;
                  properties: {
                    message: {
                      description: string;
                      type: string;
                    };
                  };
                  required: string[];
                  additionalProperties: boolean;
                };
              };
              path: string;
              httpMethod: string;
              openapi: {
                summary: string;
                description: string;
              };
            };
          };
        };
      };
    };
    static: {
      $schema: string;
      emitSchema: boolean;
      segmentName: string;
      controllers: {
        OpenApiRPC: {
          rpcModuleName: string;
          originalControllerName: string;
          prefix: string;
          handlers: {
            getSpec: {
              path: string;
              httpMethod: string;
              openapi: {
                summary: string;
                description: string;
              };
            };
          };
        };
      };
    };
  };
  meta: {
    config: {
      $schema: string;
      libs: {};
    };
    $schema: string;
    apiRoot: string;
  };
};
//#endregion
//#region tmp_ts_rpc/index.d.ts
declare const UserRPC: {
  updateUser: (<
    R,
    F extends unknown = vovk0.VovkDefaultFetcherOptions<{
      apiRoot?: string;
      disableClientValidation?: boolean;
      validateOnClient?: vovk0.VovkValidateOnClient;
      interpretAs?: string;
      init?: RequestInit;
    }>,
  >(options: {
    body:
      | FormData
      | {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        };
    query: {
      notify: "email" | "push" | "none";
    };
    params: {
      id: string;
    };
    apiRoot?: string | undefined;
    disableClientValidation?: boolean | undefined;
    validateOnClient?: vovk0.VovkValidateOnClient | undefined;
    interpretAs?: string | undefined;
    init?: RequestInit | undefined;
    transform?:
      | ((
          staticMethodReturn: {
            success: true;
          },
          resp: Response,
        ) => R)
      | undefined;
    fetcher?: VovkClientFetcher<F> | undefined;
  }) => R extends object
    ? Promise<Awaited<R>>
    : Promise<{
        success: true;
      }>) & {
    isRPC: true;
    schema: vovk0.VovkHandlerSchema;
    controllerSchema: vovk0.VovkControllerSchema;
    segmentSchema: vovk0.VovkSegmentSchema;
    fullSchema: vovk0.VovkSchema;
    __types: {
      body: {
        email: string;
        profile: {
          name: string;
          age: number;
        };
      };
      query: {
        notify: "email" | "push" | "none";
      };
      params: {
        id: string;
      };
      output: {
        success: boolean;
      };
      iteration: unknown;
      isForm: any;
    };
  } & {
    useQuery: (
      input: {
        body:
          | FormData
          | {
              email: string;
              profile: {
                name: string;
                age: number;
              };
            };
        query: {
          notify: "email" | "push" | "none";
        };
        params: {
          id: string;
        };
        apiRoot?: string | undefined;
        disableClientValidation?: boolean | undefined;
        validateOnClient?: vovk0.VovkValidateOnClient | undefined;
        interpretAs?: string | undefined;
        init?: RequestInit | undefined;
        transform?:
          | ((
              staticMethodReturn: {
                success: true;
              },
              resp: Response,
            ) => unknown)
          | undefined;
        fetcher?: VovkClientFetcher<unknown> | undefined;
      },
      options?:
        | Omit<
            _tanstack_react_query8.UseQueryOptions<
              Promise<{
                success: true;
              }>,
              Error,
              Promise<{
                success: true;
              }>,
              readonly unknown[]
            >,
            "queryFn" | "queryKey"
          >
        | undefined,
      queryClient?: _tanstack_query_core9.QueryClient,
    ) => _tanstack_react_query8.UseQueryResult<
      {
        success: true;
      },
      vovk0.HttpException
    >;
    useMutation: (
      options?:
        | Omit<
            _tanstack_react_query8.UseMutationOptions<
              Promise<{
                success: true;
              }>,
              Error,
              void,
              unknown
            >,
            "mutationFn"
          >
        | undefined,
      queryClient?: _tanstack_query_core9.QueryClient,
    ) => _tanstack_react_query8.UseMutationResult<
      {
        success: true;
      },
      vovk0.HttpException,
      {
        body:
          | FormData
          | {
              email: string;
              profile: {
                name: string;
                age: number;
              };
            };
        query: {
          notify: "email" | "push" | "none";
        };
        params: {
          id: string;
        };
        apiRoot?: string | undefined;
        disableClientValidation?: boolean | undefined;
        validateOnClient?: vovk0.VovkValidateOnClient | undefined;
        interpretAs?: string | undefined;
        init?: RequestInit | undefined;
        transform?:
          | ((
              staticMethodReturn: {
                success: true;
              },
              resp: Response,
            ) => unknown)
          | undefined;
        fetcher?: VovkClientFetcher<unknown> | undefined;
      },
      unknown
    >;
  };
};
declare const StreamRPC: {
  streamTokens: (<
    R,
    F extends unknown = vovk0.VovkDefaultFetcherOptions<{
      apiRoot?: string;
      disableClientValidation?: boolean;
      validateOnClient?: vovk0.VovkValidateOnClient;
      interpretAs?: string;
      init?: RequestInit;
    }>,
  >(
    options?:
      | {
          apiRoot?: string | undefined;
          disableClientValidation?: boolean | undefined;
          validateOnClient?: vovk0.VovkValidateOnClient | undefined;
          interpretAs?: string | undefined;
          init?: RequestInit | undefined;
          transform?:
            | ((
                staticMethodReturn: AsyncGenerator<
                  {
                    message: string;
                  },
                  void,
                  unknown
                >,
                resp: Response,
              ) => R)
            | undefined;
          fetcher?: VovkClientFetcher<F> | undefined;
        }
      | undefined,
  ) => Promise<
    vovk0.VovkStreamAsyncIterable<{
      message: string;
    }>
  >) & {
    isRPC: true;
    schema: vovk0.VovkHandlerSchema;
    controllerSchema: vovk0.VovkControllerSchema;
    segmentSchema: vovk0.VovkSegmentSchema;
    fullSchema: vovk0.VovkSchema;
    __types: {
      body: unknown;
      query: unknown;
      params: unknown;
      output: unknown;
      iteration: {
        message: string;
      };
      isForm: any;
    };
  } & {
    useQuery: (
      input?:
        | {
            apiRoot?: string | undefined;
            disableClientValidation?: boolean | undefined;
            validateOnClient?: vovk0.VovkValidateOnClient | undefined;
            interpretAs?: string | undefined;
            init?: RequestInit | undefined;
            transform?:
              | ((
                  staticMethodReturn: AsyncGenerator<
                    {
                      message: string;
                    },
                    void,
                    unknown
                  >,
                  resp: Response,
                ) => unknown)
              | undefined;
            fetcher?: VovkClientFetcher<unknown> | undefined;
          }
        | undefined,
      options?:
        | Omit<
            _tanstack_react_query8.UseQueryOptions<
              Promise<
                vovk0.VovkStreamAsyncIterable<{
                  message: string;
                }>
              >,
              Error,
              Promise<
                vovk0.VovkStreamAsyncIterable<{
                  message: string;
                }>
              >,
              readonly unknown[]
            >,
            "queryFn" | "queryKey"
          >
        | undefined,
      queryClient?: _tanstack_query_core9.QueryClient,
    ) => _tanstack_react_query8.UseQueryResult<
      {
        message: string;
      }[],
      vovk0.HttpException
    >;
    useMutation: (
      options?:
        | Omit<
            _tanstack_react_query8.UseMutationOptions<
              Promise<
                vovk0.VovkStreamAsyncIterable<{
                  message: string;
                }>
              >,
              Error,
              void,
              unknown
            >,
            "mutationFn"
          >
        | undefined,
      queryClient?: _tanstack_query_core9.QueryClient,
    ) => _tanstack_react_query8.UseMutationResult<
      vovk0.VovkStreamAsyncIterable<{
        message: string;
      }>,
      vovk0.HttpException,
      | {
          apiRoot?: string | undefined;
          disableClientValidation?: boolean | undefined;
          validateOnClient?: vovk0.VovkValidateOnClient | undefined;
          interpretAs?: string | undefined;
          init?: RequestInit | undefined;
          transform?:
            | ((
                staticMethodReturn: AsyncGenerator<
                  {
                    message: string;
                  },
                  void,
                  unknown
                >,
                resp: Response,
              ) => unknown)
            | undefined;
          fetcher?: VovkClientFetcher<unknown> | undefined;
        }
      | undefined,
      unknown
    >;
  };
};
declare const OpenApiRPC: {
  getSpec: () => Promise<openapi3_ts_oas3139.OpenAPIObject>;
};
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, schema };
