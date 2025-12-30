import * as vovk7 from "vovk";
import * as vovk_mjs_types1 from "vovk/mjs/types";
import * as _standard_schema_spec3 from "@standard-schema/spec";
import { z } from "zod";
import * as vovk_mjs_internal0 from "vovk/mjs/internal";
import * as openapi3_ts_oas310 from "openapi3-ts/oas31";

//#region src/modules/user/UserController.d.ts
declare class UserController {
  static updateUser: ((req: vovk7.VovkRequest<{
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
    id: string;
    notify: "email" | "push" | "none";
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
        id: string;
        notify: "email" | "push" | "none";
      };
      iteration: unknown;
      isForm: false;
    };
    isRPC?: boolean;
  } & {
    schema: Omit<vovk_mjs_types1.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk_mjs_types1.VovkHandlerSchema>;
    wrapper?: (req: vovk7.VovkRequest<any, any, any>, params: {
      id: string;
    }) => Promise<{
      id: string;
      notify: "email" | "push" | "none";
      success: true;
    }>;
  } & {
    fn: {
      <TTransformed>(input: Omit<{
        disableClientValidation?: boolean;
        transform?: undefined;
      } & {
        body?: {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        };
      } & {
        query?: {
          notify: "email" | "push" | "none";
        };
      } & {
        params?: {
          id: string;
        };
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }, "transform"> & {
        transform: (result: {
          id: string;
          notify: "email" | "push" | "none";
          success: true;
        }, fakeReq: Pick<vovk7.VovkRequest<any, any, any>, "vovk">) => TTransformed;
      }): Promise<TTransformed>;
      <TReturnType = Promise<{
        id: string;
        notify: "email" | "push" | "none";
        success: true;
      }>>(input?: {
        disableClientValidation?: boolean;
        transform?: undefined;
      } & {
        body?: {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        };
      } & {
        query?: {
          notify: "email" | "push" | "none";
        };
      } & {
        params?: {
          id: string;
        };
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }): TReturnType;
      <TReturnType = Promise<{
        id: string;
        notify: "email" | "push" | "none";
        success: true;
      }>>(input: {
        disableClientValidation?: boolean;
        transform?: undefined;
      } & {
        body?: {
          email: string;
          profile: {
            name: string;
            age: number;
          };
        };
      } & {
        query?: {
          notify: "email" | "push" | "none";
        };
      } & {
        params?: {
          id: string;
        };
      } & {
        meta?: {
          [key: string]: any;
          __disableClientValidation?: boolean;
        };
      }): TReturnType;
    };
    models: {
      iteration?: _standard_schema_spec3.StandardSchemaV1<unknown, unknown>;
      output?: z.ZodObject<{
        success: z.ZodBoolean;
        id: z.ZodUUID;
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip>;
      params?: z.ZodObject<{
        id: z.ZodUUID;
      }, z.core.$strip>;
      query?: z.ZodObject<{
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip>;
      body?: z.ZodObject<{
        email: z.ZodEmail;
        profile: z.ZodObject<{
          name: z.ZodString;
          age: z.ZodInt;
        }, z.core.$strip>;
      }, z.core.$strip>;
    };
  };
}
//#endregion
//#region src/modules/stream/StreamController.d.ts
declare class StreamController {
  static streamTokens: (() => AsyncGenerator<{
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
    schema: Omit<vovk_mjs_types1.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk_mjs_types1.VovkHandlerSchema>;
    wrapper?: (req: vovk7.VovkRequest<any, any, any>, params: undefined) => AsyncGenerator<{
      message: string;
    }, void, unknown>;
  } & {
    fn: {
      <TTransformed>(input: Omit<{
        disableClientValidation?: boolean;
        transform?: undefined;
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
      }, "transform"> & {
        transform: (result: AsyncGenerator<{
          message: string;
        }, void, unknown>, fakeReq: Pick<vovk7.VovkRequest<any, any, any>, "vovk">) => TTransformed;
      }): Promise<TTransformed>;
      <TReturnType = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input?: {
        disableClientValidation?: boolean;
        transform?: undefined;
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
      }): TReturnType;
      <TReturnType = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input: {
        disableClientValidation?: boolean;
        transform?: undefined;
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
      }): TReturnType;
    };
    models: {
      iteration?: z.ZodObject<{
        message: z.ZodString;
      }, z.core.$strip>;
      output?: _standard_schema_spec3.StandardSchemaV1<unknown, unknown>;
      params?: _standard_schema_spec3.StandardSchemaV1<unknown, unknown>;
      query?: _standard_schema_spec3.StandardSchemaV1<unknown, unknown>;
      body?: _standard_schema_spec3.StandardSchemaV1<unknown, unknown>;
    };
  };
}
//#endregion
//#region src/modules/static/openapi/OpenApiController.d.ts
declare class OpenApiController {
  static getSpec: () => openapi3_ts_oas310.OpenAPIObject;
}
//#endregion
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
                          minLength: number;
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
                    };
                  };
                  required: string[];
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
                    id: {
                      description: string;
                      type: string;
                      format: string;
                      pattern: string;
                    };
                    notify: {
                      description: string;
                      type: string;
                      enum: string[];
                    };
                  };
                  required: string[];
                };
              };
              operationObject: {
                summary: string;
                description: string;
              };
              path: string;
              httpMethod: string;
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
                };
              };
              operationObject: {
                summary: string;
                description: string;
              };
              path: string;
              httpMethod: string;
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
              operationObject: {
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
    $schema: string;
    config: {
      libs: {};
      rootEntry: string;
      $schema: string;
    };
  };
};
//#endregion
//#region tmp_prebundle/index.d.ts
declare const UserRPC: vovk_mjs_internal0.VovkRPCModule<typeof UserController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: vovk7.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk7.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const StreamRPC: vovk_mjs_internal0.VovkRPCModule<typeof StreamController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: vovk7.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk7.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const OpenApiRPC: vovk_mjs_internal0.VovkRPCModule<typeof OpenApiController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: vovk7.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk7.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, schema };