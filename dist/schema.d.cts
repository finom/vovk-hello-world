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
      libs: {};
      $schema: string;
    };
    $schema: string;
    apiRoot: string;
  };
};
//#endregion
export { schema };