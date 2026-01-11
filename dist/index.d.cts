import * as vovk0 from "vovk";
import * as vovk_mjs_types0 from "vovk/mjs/types";
import * as vovk_mjs_validation_types0 from "vovk/mjs/validation/types";
import { z } from "zod";
import * as vovk_mjs0 from "vovk/mjs";
import * as vovk_mjs_internal0 from "vovk/mjs/internal";
import * as openapi3_ts_oas310 from "openapi3-ts/oas31";

//#region src/modules/user/UserController.d.ts
declare class UserController {
  static updateUser: ((req: vovk0.VovkRequest<{
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
    schema: Omit<vovk_mjs_types0.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk_mjs_types0.VovkHandlerSchema>;
    wrapper?: ((req: vovk0.VovkRequest<any, any, any>, params: {
      id: string;
    }) => Promise<{
      id: string;
      notify: "email" | "push" | "none";
      success: true;
    }>) | undefined;
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
      }, "transform"> & {
        transform: (result: {
          id: string;
          notify: "email" | "push" | "none";
          success: true;
        }, fakeReq: Pick<vovk0.VovkRequest<any, any, any>, "vovk">) => TTransformed;
      }): Promise<TTransformed>;
      <TReturnType = Promise<{
        id: string;
        notify: "email" | "push" | "none";
        success: true;
      }>>(input?: ({
        disableClientValidation?: boolean;
        transform?: undefined;
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
      }) | undefined): TReturnType;
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
      }): TReturnType;
    };
    definition: {
      isForm: false | undefined;
      disableServerSideValidation: boolean | vovk_mjs_types0.VovkValidationType[] | undefined;
      skipSchemaEmission: boolean | vovk_mjs_types0.VovkValidationType[] | undefined;
      validateEachIteration: boolean | undefined;
      body: z.ZodObject<{
        email: z.ZodEmail;
        profile: z.ZodObject<{
          name: z.ZodString;
          age: z.ZodInt;
        }, z.core.$strip>;
      }, z.core.$strip> | undefined;
      query: z.ZodObject<{
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip> | undefined;
      params: z.ZodObject<{
        id: z.ZodUUID;
      }, z.core.$strip> | undefined;
      output: z.ZodObject<{
        success: z.ZodBoolean;
        id: z.ZodUUID;
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip> | undefined;
      iteration: vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | undefined;
      handle: vovk_mjs_types0.VovkTypedMethod<(req: vovk0.VovkRequest<{
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
      }>, {
        email: string;
        profile: {
          name: string;
          age: number;
        };
      }, {
        notify: "email" | "push" | "none";
      }, {
        id: string;
      }, {
        success: boolean;
        id: string;
        notify: "email" | "push" | "none";
      }, unknown, false>;
      toJSONSchema: ((model: any, meta: {
        validationType: vovk_mjs_types0.VovkValidationType;
      }) => any) | undefined;
      validate: (data: unknown, model: NonNullable<z.ZodObject<{
        email: z.ZodEmail;
        profile: z.ZodObject<{
          name: z.ZodString;
          age: z.ZodInt;
        }, z.core.$strip>;
      }, z.core.$strip> | vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | z.ZodObject<{
        id: z.ZodUUID;
      }, z.core.$strip> | z.ZodObject<{
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip> | z.ZodObject<{
        success: z.ZodBoolean;
        id: z.ZodUUID;
        notify: z.ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, z.core.$strip>>, meta: {
        validationType: vovk_mjs_types0.VovkValidationType | "form";
        req: vovk0.VovkRequest<any, any, any>;
        status?: number;
        i?: number;
      }) => unknown;
      preferTransformed: boolean;
      operationObject: vovk_mjs_types0.VovkOperationObject | undefined;
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
    schema: Omit<vovk_mjs_types0.VovkHandlerSchema, "httpMethod" | "path"> & Partial<vovk_mjs_types0.VovkHandlerSchema>;
    wrapper?: ((req: vovk0.VovkRequest<any, any, any>, params: undefined) => AsyncGenerator<{
      message: string;
    }, void, unknown>) | undefined;
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
        }, void, unknown>, fakeReq: Pick<vovk0.VovkRequest<any, any, any>, "vovk">) => TTransformed;
      }): Promise<TTransformed>;
      <TReturnType = AsyncGenerator<{
        message: string;
      }, void, unknown>>(input?: ({
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
      }) | undefined): TReturnType;
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
    definition: {
      isForm: false | undefined;
      disableServerSideValidation: boolean | vovk_mjs_types0.VovkValidationType[] | undefined;
      skipSchemaEmission: boolean | vovk_mjs_types0.VovkValidationType[] | undefined;
      validateEachIteration: boolean | undefined;
      body: vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | undefined;
      query: vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | undefined;
      params: vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | undefined;
      output: vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | undefined;
      iteration: z.ZodObject<{
        message: z.ZodString;
      }, z.core.$strip> | undefined;
      handle: vovk_mjs_types0.VovkTypedMethod<() => AsyncGenerator<{
        message: string;
      }, void, unknown>, unknown, unknown, unknown, unknown, {
        message: string;
      }, false>;
      toJSONSchema: ((model: any, meta: {
        validationType: vovk_mjs_types0.VovkValidationType;
      }) => any) | undefined;
      validate: (data: unknown, model: NonNullable<vovk_mjs_validation_types0.CombinedSpec<unknown, unknown> | z.ZodObject<{
        message: z.ZodString;
      }, z.core.$strip>>, meta: {
        validationType: vovk_mjs_types0.VovkValidationType | "form";
        req: vovk0.VovkRequest<any, any, any>;
        status?: number;
        i?: number;
      }) => unknown;
      preferTransformed: boolean;
      operationObject: vovk_mjs_types0.VovkOperationObject | undefined;
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
  validateOnClient?: vovk_mjs0.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk_mjs0.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const StreamRPC: vovk_mjs_internal0.VovkRPCModule<typeof StreamController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: vovk_mjs0.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk_mjs0.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const OpenApiRPC: vovk_mjs_internal0.VovkRPCModule<typeof OpenApiController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: vovk_mjs0.VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: vovk_mjs0.VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, schema };