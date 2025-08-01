import * as vovk0 from "vovk";
import * as _standard_schema_spec0 from "@standard-schema/spec";
import * as zod0 from "zod";
import * as zod_v4_core0 from "zod/v4/core";
import * as vovk_mjs_client_types0 from "vovk/mjs/client/types";
import * as openapi3_ts_oas310 from "openapi3-ts/oas31";

//#region tmp_prebundle/schema.d.ts
declare const schema: {
  $schema: string;
  segments: {
    '': {
      $schema: string;
      emitSchema: boolean;
      segmentName: string;
      segmentType: string;
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
      segmentType: string;
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
//#region tmp_prebundle/index.d.ts
declare const UserRPC: {
  updateUser: vovk_mjs_client_types0.ClientMethod<((req: vovk0.VovkRequest<{
    email: string;
    profile: {
      name: string;
      age: number;
    };
  }, {
    notify: "email" | "push" | "none";
  }, {
    id: string;
  }>, {
    id
  }: {
    id: string;
  }) => Promise<{
    success: true;
  }>) & {
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
      isForm: false;
    };
    isRPC?: boolean;
  } & {
    schema: vovk0.VovkHandlerSchema;
    wrapper?: ((req: vovk0.VovkRequest<any, any, any>, params: {
      id: string;
    }) => Promise<{
      success: true;
    }>) | undefined;
  } & {
    fn: {
      <RETURN_TYPE = Promise<{
        success: true;
      }>>(input?: ({
        disableClientValidation?: boolean;
      } & {
        body?: {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        } | undefined;
      } & {
        query?: {
          notify: "email" | "push" | "none";
        } | undefined;
      } & {
        params?: {
          id: string;
        } | undefined;
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }) | undefined): RETURN_TYPE;
      <RETURN_TYPE = Promise<{
        success: true;
      }>>(input: {
        disableClientValidation?: boolean;
      } & {
        body?: {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        } | undefined;
      } & {
        query?: {
          notify: "email" | "push" | "none";
        } | undefined;
      } & {
        params?: {
          id: string;
        } | undefined;
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }): RETURN_TYPE;
    };
    models: {
      iteration?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown> | undefined;
      output?: zod0.ZodObject<{
        success: zod0.ZodBoolean;
      }, zod_v4_core0.$strip> | undefined;
      params?: zod0.ZodObject<{
        id: zod0.ZodUUID;
      }, zod_v4_core0.$strip> | undefined;
      query?: zod0.ZodObject<{
        notify: zod0.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, zod_v4_core0.$strip> | undefined;
      body?: zod0.ZodObject<{
        email: zod0.ZodEmail;
        profile: zod0.ZodObject<{
          name: zod0.ZodString;
          age: zod0.ZodInt;
        }, zod_v4_core0.$strip>;
      }, zod_v4_core0.$strip> | undefined;
    };
  }, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk0.VovkValidateOnClient<unknown> | undefined;
    interpretAs?: string;
    init?: RequestInit;
  }, unknown>;
};
declare const StreamRPC: {
  streamTokens: vovk_mjs_client_types0.ClientMethod<(() => AsyncGenerator<{
    message: string;
  }, void, unknown>) & {
    __types: {
      body: unknown;
      query: unknown;
      params: unknown;
      output: unknown;
      iteration: {
        message: string;
      };
      isForm: false;
    };
    isRPC?: boolean;
  } & {
    schema: vovk0.VovkHandlerSchema;
    wrapper?: ((req: vovk0.VovkRequest<any, any, any>, params: undefined) => AsyncGenerator<{
      message: string;
    }, void, unknown>) | undefined;
  } & {
    fn: {
      <RETURN_TYPE = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input?: ({
        disableClientValidation?: boolean;
      } & {
        body?: unknown;
      } & {
        query?: unknown;
      } & {
        params?: unknown;
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }) | undefined): RETURN_TYPE;
      <RETURN_TYPE = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input: {
        disableClientValidation?: boolean;
      } & {
        body?: unknown;
      } & {
        query?: unknown;
      } & {
        params?: unknown;
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }): RETURN_TYPE;
    };
    models: {
      iteration?: zod0.ZodObject<{
        message: zod0.ZodString;
      }, zod_v4_core0.$strip> | undefined;
      output?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown> | undefined;
      params?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown> | undefined;
      query?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown> | undefined;
      body?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown> | undefined;
    };
  }, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk0.VovkValidateOnClient<unknown> | undefined;
    interpretAs?: string;
    init?: RequestInit;
  }, unknown>;
};
declare const OpenApiRPC: {
  getSpec: () => Promise<openapi3_ts_oas310.OpenAPIObject>;
};
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, schema };