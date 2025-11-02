
//#region .vovk-schema/root.json
var $schema$2 = "https://vovk.dev/api/schema/v3/segment.json";
var emitSchema$1 = true;
var segmentName$1 = "";
var segmentType$1 = "segment";
var controllers$1 = {
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
									"type": "string"
								},
								"age": {
									"description": "User age",
									"examples": [25, 30],
									"type": "integer",
									"minimum": 16,
									"maximum": 120
								}
							},
							"required": ["name", "age"],
							"additionalProperties": false
						}
					},
					"required": ["email", "profile"],
					"additionalProperties": false
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
					"required": ["notify"],
					"additionalProperties": false
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
					"required": ["id"],
					"additionalProperties": false
				},
				"output": {
					"$schema": "https://json-schema.org/draft/2020-12/schema",
					"description": "Response object",
					"type": "object",
					"properties": { "success": {
						"description": "Success status",
						"type": "boolean"
					} },
					"required": ["success"],
					"additionalProperties": false
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
				"required": ["message"],
				"additionalProperties": false
			} },
			"operationObject": {
				"summary": "Stream tokens",
				"description": "Stream tokens to the client"
			},
			"path": "tokens",
			"httpMethod": "GET"
		} }
	}
};
var root_default = {
	$schema: $schema$2,
	emitSchema: emitSchema$1,
	segmentName: segmentName$1,
	segmentType: segmentType$1,
	controllers: controllers$1
};

//#endregion
//#region .vovk-schema/static.json
var $schema$1 = "https://vovk.dev/api/schema/v3/segment.json";
var emitSchema = true;
var segmentName = "static";
var segmentType = "segment";
var controllers = { "OpenApiRPC": {
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
} };
var static_default = {
	$schema: $schema$1,
	emitSchema,
	segmentName,
	segmentType,
	controllers
};

//#endregion
//#region .vovk-schema/_meta.json
var $schema = "https://vovk.dev/api/schema/v3/meta.json";
var config = {
	"libs": {},
	"outputConfig": {
		"imports": { "validateOnClient": "vovk-ajv" },
		"openAPIObject": { "info": {
			"title": "\"Hello World\" app API",
			"description": "API for \"Hello World\" app hosted at https://hello-world.vovk.dev/. Source code is available on Github https://github.com/finom/vovk-hello-world.",
			"license": {
				"name": "MIT",
				"url": "https://opensource.org/licenses/MIT"
			},
			"version": "1.0.0"
		} },
		"origin": "",
		"segments": {}
	},
	"$schema": "https://vovk.dev/api/schema/v3/config.json"
};
var _meta_default = {
	$schema,
	config
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
exports.schema = schema;