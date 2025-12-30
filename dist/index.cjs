let vovk = require("vovk");

//#region .vovk-schema/root.json
var root_default = {
	$schema: "https://vovk.dev/api/schema/v3/segment.json",
	emitSchema: true,
	segmentName: "",
	segmentType: "segment",
	controllers: {
		"UserRPC": {
			"rpcModuleName": "UserRPC",
			"originalControllerName": "UserController",
			"prefix": "users",
			"handlers": { "updateUser": {
				"validation": {
					"body": {
						"$schema": "https://json-schema.org/draft/2020-12/schema",
						"description": "User data object",
						"type": "object",
						"properties": {
							"email": {
								"description": "User email",
								"examples": ["john@example.com", "jane@example.com"],
								"type": "string",
								"format": "email",
								"pattern": "^(?!\\.)(?!.*\\.\\.)([A-Za-z0-9_'+\\-\\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\\-]*\\.)+[A-Za-z]{2,}$"
							},
							"profile": {
								"description": "User profile object",
								"type": "object",
								"properties": {
									"name": {
										"description": "User full name",
										"examples": ["John Doe", "Jane Smith"],
										"type": "string",
										"minLength": 2
									},
									"age": {
										"description": "User age",
										"examples": [25, 30],
										"type": "integer",
										"minimum": 16,
										"maximum": 120
									}
								},
								"required": ["name", "age"]
							}
						},
						"required": ["email", "profile"]
					},
					"query": {
						"$schema": "https://json-schema.org/draft/2020-12/schema",
						"description": "Query parameters",
						"type": "object",
						"properties": { "notify": {
							"description": "Notification type",
							"type": "string",
							"enum": [
								"email",
								"push",
								"none"
							]
						} },
						"required": ["notify"]
					},
					"params": {
						"$schema": "https://json-schema.org/draft/2020-12/schema",
						"description": "Path parameters",
						"type": "object",
						"properties": { "id": {
							"description": "User ID",
							"examples": ["123e4567-e89b-12d3-a456-426614174000"],
							"type": "string",
							"format": "uuid",
							"pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
						} },
						"required": ["id"]
					},
					"output": {
						"$schema": "https://json-schema.org/draft/2020-12/schema",
						"description": "Response object",
						"type": "object",
						"properties": {
							"success": {
								"description": "Success status",
								"type": "boolean"
							},
							"id": {
								"description": "User ID",
								"type": "string",
								"format": "uuid",
								"pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
							},
							"notify": {
								"description": "Notification type",
								"type": "string",
								"enum": [
									"email",
									"push",
									"none"
								]
							}
						},
						"required": [
							"success",
							"id",
							"notify"
						]
					}
				},
				"operationObject": {
					"summary": "Update user",
					"description": "Update user by ID"
				},
				"path": "{id}",
				"httpMethod": "POST"
			} }
		},
		"StreamRPC": {
			"rpcModuleName": "StreamRPC",
			"originalControllerName": "StreamController",
			"prefix": "streams",
			"handlers": { "streamTokens": {
				"validation": { "iteration": {
					"$schema": "https://json-schema.org/draft/2020-12/schema",
					"description": "Streamed token object",
					"type": "object",
					"properties": { "message": {
						"description": "Message from the token",
						"type": "string"
					} },
					"required": ["message"]
				} },
				"operationObject": {
					"summary": "Stream tokens",
					"description": "Stream tokens to the client"
				},
				"path": "tokens",
				"httpMethod": "GET"
			} }
		}
	}
};

//#endregion
//#region .vovk-schema/static.json
var static_default = {
	$schema: "https://vovk.dev/api/schema/v3/segment.json",
	emitSchema: true,
	segmentName: "static",
	segmentType: "segment",
	controllers: { "OpenApiRPC": {
		"rpcModuleName": "OpenApiRPC",
		"originalControllerName": "OpenApiController",
		"prefix": "",
		"handlers": { "getSpec": {
			"path": "openapi.json",
			"httpMethod": "GET",
			"operationObject": {
				"summary": "OpenAPI spec",
				"description": "Get the OpenAPI spec for the \"Hello World\" app API"
			}
		} }
	} }
};

//#endregion
//#region .vovk-schema/_meta.json
var _meta_default = {
	$schema: "https://vovk.dev/api/schema/v3/meta.json",
	config: {
		"libs": {},
		"rootEntry": "api",
		"$schema": "https://vovk.dev/api/schema/v3/config.json"
	}
};

//#endregion
//#region tmp_prebundle/schema.ts
const segments = {
	"": root_default,
	"static": static_default
};
const schema = {
	$schema: "https://vovk.dev/api/schema/v3/schema.json",
	segments,
	meta: _meta_default
};

//#endregion
//#region tmp_prebundle/index.ts
const UserRPC = (0, vovk.createRPC)(schema, "", "UserRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "https://hello-world.vovk.dev/api"
});
const StreamRPC = (0, vovk.createRPC)(schema, "", "StreamRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "https://hello-world.vovk.dev/api"
});
const OpenApiRPC = (0, vovk.createRPC)(schema, "static", "OpenApiRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "https://hello-world.vovk.dev/api"
});

//#endregion
exports.OpenApiRPC = OpenApiRPC;
exports.StreamRPC = StreamRPC;
exports.UserRPC = UserRPC;
exports.schema = schema;