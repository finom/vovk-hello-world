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
                  additionalProperties: boolean;
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
      $schema: string;
    };
  };
};
//#endregion
//#region tmp_prebundle/openapi.d.ts
declare let openapi: string;
declare namespace info {
  let title: string;
  let version: string;
  let description: string;
  namespace license {
    let name: string;
    let url: string;
  }
}
declare namespace components {
  namespace schemas {
    namespace HttpStatus {
      export let type: string;
      let description_1: string;
      export { description_1 as description };
      let _enum: number[];
      export { _enum as enum };
    }
    namespace VovkErrorResponse {
      let type_1: string;
      export { type_1 as type };
      let description_2: string;
      export { description_2 as description };
      export namespace properties {
        namespace cause {
          let description_3: string;
          export { description_3 as description };
        }
        namespace statusCode {
          let $ref: string;
        }
        namespace message {
          let type_2: string;
          export { type_2 as type };
          let description_4: string;
          export { description_4 as description };
        }
        namespace isError {
          let type_3: string;
          export { type_3 as type };
          let _const: boolean;
          export { _const as const };
          let description_5: string;
          export { description_5 as description };
        }
      }
      export let required: string[];
      export let additionalProperties: boolean;
    }
  }
}
declare let paths: {
  "/api/users/{id}": {
    post: {
      summary: string;
      description: string;
      "x-codeSamples": {
        label: string;
        lang: string;
        source: string;
      }[];
      parameters: ({
        name: string;
        in: string;
        required: boolean;
        schema: {
          description: string;
          type: string;
          enum: string[];
          examples?: undefined;
          format?: undefined;
          pattern?: undefined;
        };
      } | {
        name: string;
        in: string;
        required: boolean;
        schema: {
          description: string;
          examples: string[];
          type: string;
          format: string;
          pattern: string;
          enum?: undefined;
        };
      })[];
      responses: {
        "200": {
          description: string;
          content: {
            "application/json": {
              schema: {
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
          };
        };
      };
      requestBody: {
        description: string;
        required: boolean;
        content: {
          "application/json": {
            schema: {
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
          };
        };
      };
    };
  };
  "/api/streams/tokens": {
    get: {
      summary: string;
      description: string;
      "x-codeSamples": {
        label: string;
        lang: string;
        source: string;
      }[];
      responses: {
        "200": {
          description: string;
          content: {
            "application/jsonl": {
              schema: {
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
                examples: string[];
              };
            };
          };
        };
      };
    };
  };
  "/api/static/openapi.json": {
    get: {
      summary: string;
      description: string;
      "x-codeSamples": {
        label: string;
        lang: string;
        source: string;
      }[];
    };
  };
};
declare namespace __json_default_export {
  export { openapi, info, components, paths };
}
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
    schema: Omit<vovk0.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk0.VovkHandlerSchema>;
    wrapper?: (req: vovk0.VovkRequest<any, any, any>, params: {
      id: string;
    }) => Promise<{
      id: string;
      notify: "email" | "push" | "none";
      success: true;
    }>;
  } & {
    fn: {
      <TReturnType = Promise<{
        id: string;
        notify: "email" | "push" | "none";
        success: true;
      }>>(input?: {
        disableClientValidation?: boolean;
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
      iteration?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown>;
      output?: zod0.ZodObject<{
        success: zod0.ZodBoolean;
        id: zod0.ZodUUID;
        notify: zod0.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, zod_v4_core0.$strip>;
      params?: zod0.ZodObject<{
        id: zod0.ZodUUID;
      }, zod_v4_core0.$strip>;
      query?: zod0.ZodObject<{
        notify: zod0.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, zod_v4_core0.$strip>;
      body?: zod0.ZodObject<{
        email: zod0.ZodEmail;
        profile: zod0.ZodObject<{
          name: zod0.ZodString;
          age: zod0.ZodInt;
        }, zod_v4_core0.$strip>;
      }, zod_v4_core0.$strip>;
    };
  }, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk0.VovkValidateOnClient<unknown> | Promise<{
      validateOnClient: vovk0.VovkValidateOnClient<unknown>;
    }> | undefined;
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
    schema: Omit<vovk0.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk0.VovkHandlerSchema>;
    wrapper?: (req: vovk0.VovkRequest<any, any, any>, params: undefined) => AsyncGenerator<{
      message: string;
    }, void, unknown>;
  } & {
    fn: {
      <TReturnType = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input?: {
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
      }): TReturnType;
      <TReturnType = AsyncGenerator<{
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
      }): TReturnType;
    };
    models: {
      iteration?: zod0.ZodObject<{
        message: zod0.ZodString;
      }, zod_v4_core0.$strip>;
      output?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown>;
      params?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown>;
      query?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown>;
      body?: _standard_schema_spec0.StandardSchemaV1<unknown, unknown>;
    };
  }, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk0.VovkValidateOnClient<unknown> | Promise<{
      validateOnClient: vovk0.VovkValidateOnClient<unknown>;
    }> | undefined;
    interpretAs?: string;
    init?: RequestInit;
  }, unknown>;
};
declare const OpenApiRPC: {
  getSpec: () => openapi3_ts_oas310.OpenAPIObject;
};
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, __json_default_export as openapi, schema };