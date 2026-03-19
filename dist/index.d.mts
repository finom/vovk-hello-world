import * as vovk_dist_types_utils from 'vovk/dist/types/utils';
import * as vovk from 'vovk';
import * as vovk_dist_internal from 'vovk/dist/internal';
import * as vovk_dist from 'vovk/dist';

declare class OpenApiController {
    static getSpec: () => any;
}

declare class StreamController {
    static streamTokens: {
        (req: vovk.VovkRequest<unknown, unknown, unknown>, params: unknown): vovk_dist_types_utils.KnownAny;
        __types: {
            body: unknown;
            query: unknown;
            params: unknown;
            output: any;
            iteration: {
                message: string;
            };
            contentType: ["application/json"];
        };
        __handleFn: () => AsyncGenerator<{
            message: string;
        }, void, unknown>;
        isRPC?: boolean;
        fn: {
            <TTransformed>(input: {
                body?: unknown;
                query?: unknown;
                params?: unknown;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
                transform: (data: AsyncGenerator<{
                    message: string;
                }, void, unknown>, fakeReq: Pick<vovk.VovkRequest<unknown, unknown, unknown>, "vovk">) => TTransformed;
            }): Promise<TTransformed>;
            <TReturnType = AsyncGenerator<{
                message: string;
            }, void, unknown>>(input?: {
                body?: unknown;
                query?: unknown;
                params?: unknown;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
            } | undefined): TReturnType;
            (input?: {
                body?: unknown;
                query?: unknown;
                params?: unknown;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
            } | undefined): AsyncGenerator<{
                message: string;
            }, void, unknown>;
        };
        definition: vovk_dist_types_utils.KnownAny;
        schema: vovk_dist_types_utils.KnownAny;
        wrapper?: vovk_dist_types_utils.KnownAny;
    };
}

declare class UserController {
    static updateUser: {
        (req: vovk.VovkRequest<{
            email: string;
            profile: {
                name: string;
                age: number;
            };
        }, {
            notify: "email" | "push" | "none";
        }, {
            id: string;
        }>, params: {
            id: string;
        }): vovk_dist_types_utils.KnownAny;
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
            contentType: ["application/json"];
        };
        __handleFn: (req: vovk.VovkRequest<{
            email: string;
            profile: {
                name: string;
                age: number;
            };
        }, {
            notify: "email" | "push" | "none";
        }, {
            id: string;
        }>, params: {
            id: string;
        }) => {
            success: boolean;
            id: string;
            notify: "email" | "push" | "none";
        } | Promise<{
            success: boolean;
            id: string;
            notify: "email" | "push" | "none";
        }>;
        isRPC?: boolean;
        fn: {
            <TTransformed>(input: {
                body?: {
                    email: string;
                    profile: {
                        name: string;
                        age: number;
                    };
                } | undefined;
                query?: {
                    notify: "email" | "push" | "none";
                } | undefined;
                params?: {
                    id: string;
                } | undefined;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
                transform: (data: {
                    success: boolean;
                    id: string;
                    notify: "email" | "push" | "none";
                }, fakeReq: Pick<vovk.VovkRequest<{
                    email: string;
                    profile: {
                        name: string;
                        age: number;
                    };
                }, {
                    notify: "email" | "push" | "none";
                }, {
                    id: string;
                }>, "vovk">) => TTransformed;
            }): Promise<TTransformed>;
            <TReturnType = {
                success: boolean;
                id: string;
                notify: "email" | "push" | "none";
            } | Promise<{
                success: boolean;
                id: string;
                notify: "email" | "push" | "none";
            }>>(input?: {
                body?: {
                    email: string;
                    profile: {
                        name: string;
                        age: number;
                    };
                } | undefined;
                query?: {
                    notify: "email" | "push" | "none";
                } | undefined;
                params?: {
                    id: string;
                } | undefined;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
            } | undefined): TReturnType;
            (input?: {
                body?: {
                    email: string;
                    profile: {
                        name: string;
                        age: number;
                    };
                } | undefined;
                query?: {
                    notify: "email" | "push" | "none";
                } | undefined;
                params?: {
                    id: string;
                } | undefined;
                meta?: Record<string, vovk_dist_types_utils.KnownAny>;
                disableClientValidation?: boolean;
            } | undefined): {
                success: boolean;
                id: string;
                notify: "email" | "push" | "none";
            } | Promise<{
                success: boolean;
                id: string;
                notify: "email" | "push" | "none";
            }>;
        };
        definition: vovk_dist_types_utils.KnownAny;
        schema: vovk_dist_types_utils.KnownAny;
        wrapper?: vovk_dist_types_utils.KnownAny;
    };
}

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
                                    type: string;
                                    properties: {
                                        email: {
                                            type: string;
                                            format: string;
                                            pattern: string;
                                            description: string;
                                            examples: string[];
                                        };
                                        profile: {
                                            type: string;
                                            properties: {
                                                name: {
                                                    type: string;
                                                    minLength: number;
                                                    description: string;
                                                    examples: string[];
                                                };
                                                age: {
                                                    type: string;
                                                    minimum: number;
                                                    maximum: number;
                                                    description: string;
                                                    examples: number[];
                                                };
                                            };
                                            required: string[];
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                    description: string;
                                };
                                query: {
                                    $schema: string;
                                    type: string;
                                    properties: {
                                        notify: {
                                            type: string;
                                            enum: string[];
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                    description: string;
                                };
                                params: {
                                    $schema: string;
                                    type: string;
                                    properties: {
                                        id: {
                                            type: string;
                                            format: string;
                                            pattern: string;
                                            description: string;
                                            examples: string[];
                                        };
                                    };
                                    required: string[];
                                    description: string;
                                };
                                output: {
                                    $schema: string;
                                    type: string;
                                    properties: {
                                        success: {
                                            type: string;
                                            description: string;
                                        };
                                        id: {
                                            type: string;
                                            format: string;
                                            pattern: string;
                                            description: string;
                                        };
                                        notify: {
                                            type: string;
                                            enum: string[];
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                    description: string;
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
                                    type: string;
                                    properties: {
                                        message: {
                                            type: string;
                                            description: string;
                                        };
                                    };
                                    required: string[];
                                    description: string;
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

declare const UserRPC: vovk_dist_internal.VovkRPCModule<typeof UserController, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk_dist.VovkValidateOnClient<unknown> | Promise<{
        validateOnClient: vovk_dist.VovkValidateOnClient<unknown>;
    }> | undefined;
    interpretAs?: string;
    init?: RequestInit;
}>;
declare const StreamRPC: vovk_dist_internal.VovkRPCModule<typeof StreamController, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk_dist.VovkValidateOnClient<unknown> | Promise<{
        validateOnClient: vovk_dist.VovkValidateOnClient<unknown>;
    }> | undefined;
    interpretAs?: string;
    init?: RequestInit;
}>;
declare const OpenApiRPC: vovk_dist_internal.VovkRPCModule<typeof OpenApiController, {
    apiRoot?: string;
    disableClientValidation?: boolean;
    validateOnClient?: vovk_dist.VovkValidateOnClient<unknown> | Promise<{
        validateOnClient: vovk_dist.VovkValidateOnClient<unknown>;
    }> | undefined;
    interpretAs?: string;
    init?: RequestInit;
}>;

export { OpenApiRPC, StreamRPC, UserRPC, schema };
