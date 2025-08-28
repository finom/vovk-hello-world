//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
const vovk = __toESM(require("vovk"));

//#region .vovk-schema/_meta.json
var $schema$2 = "https://vovk.dev/api/schema/v3/meta.json";
var config = {
	"libs": {},
	"generatorConfig": {
		"origin": "http://localhost:3000",
		"imports": { "validateOnClient": "vovk-ajv" },
		"openAPIObject": { "info": {
			"title": "\"Hello World\" app API",
			"description": "API for \"Hello World\" app hosted at https://vovk-hello-world.vercel.app/. Source code is available on Github https://github.com/finom/vovk-hello-world.",
			"license": {
				"name": "MIT",
				"url": "https://opensource.org/licenses/MIT"
			},
			"version": "1.0.0"
		} },
		"segments": {}
	},
	"$schema": "https://vovk.dev/api/schema/v3/config.json"
};
var _meta_default = {
	$schema: $schema$2,
	config
};

//#endregion
//#region .vovk-schema/root.json
var $schema$1 = "https://vovk.dev/api/schema/v3/segment.json";
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
	$schema: $schema$1,
	emitSchema: emitSchema$1,
	segmentName: segmentName$1,
	segmentType: segmentType$1,
	controllers: controllers$1
};

//#endregion
//#region .vovk-schema/static.json
var $schema = "https://vovk.dev/api/schema/v3/segment.json";
var emitSchema = true;
var segmentName = "static";
var segmentType = "segment";
var controllers = { "OpenApiRPC": {
	"rpcModuleName": "OpenApiRPC",
	"originalControllerName": "OpenApiController",
	"prefix": "openapi",
	"handlers": { "getSpec": {
		"path": "spec.json",
		"httpMethod": "GET",
		"operationObject": {
			"summary": "OpenAPI spec",
			"description": "Get the OpenAPI spec for the \"Hello World\" app API"
		}
	} }
} };
var static_default = {
	$schema,
	emitSchema,
	segmentName,
	segmentType,
	controllers
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
	meta: { ..._meta_default }
};

//#endregion
//#region tmp_prebundle/openapi.json
var info = {
	"title": "\"Hello World\" app API",
	"version": "1.0.0",
	"description": "API for \"Hello World\" app hosted at https://vovk-hello-world.vercel.app/. Source code is available on Github https://github.com/finom/vovk-hello-world.",
	"license": {
		"name": "MIT",
		"url": "https://opensource.org/licenses/MIT"
	}
};
var openapi = "3.1.0";
var components = { "schemas": {
	"HttpStatus": {
		"type": "integer",
		"description": "HTTP status code",
		"enum": [
			100,
			101,
			102,
			103,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			300,
			301,
			302,
			303,
			304,
			307,
			308,
			400,
			401,
			402,
			403,
			404,
			405,
			406,
			407,
			408,
			409,
			410,
			411,
			412,
			413,
			414,
			415,
			416,
			417,
			418,
			421,
			422,
			424,
			428,
			429,
			500,
			501,
			502,
			503,
			504,
			505
		]
	},
	"VovkErrorResponse": {
		"type": "object",
		"description": "Vovk error response",
		"properties": {
			"cause": { "description": "Error cause of any shape" },
			"statusCode": { "$ref": "#/components/schemas/HttpStatus" },
			"message": {
				"type": "string",
				"description": "Error message"
			},
			"isError": {
				"type": "boolean",
				"const": true,
				"description": "Indicates that this object represents an error"
			}
		},
		"required": [
			"statusCode",
			"message",
			"isError"
		],
		"additionalProperties": false
	}
} };
var paths = {
	"/api/users/{id}": { "post": {
		"summary": "Update user",
		"description": "Update user by ID",
		"x-codeSamples": [
			{
				"label": "TypeScript RPC",
				"lang": "typescript",
				"source": "import { UserRPC } from 'vovk-client';\n\nconst response = await UserRPC.updateUser({\n    body: {\n        // User email\n        email: \"john@example.com\",\n        // User profile object\n        profile: {\n            // User full name\n            name: \"John Doe\",\n            // User age\n            age: 25\n        }\n    },\n    query: {\n        // Notification type\n        notify: \"email\"\n    },\n    params: {\n        // User ID\n        id: \"123e4567-e89b-12d3-a456-426614174000\"\n    },\n});\n\nconsole.log(response); \n/* \n{\n    // -----\n    // Response object\n    // -----\n    // Success status\n    success: true\n}\n*/"
			},
			{
				"label": "Python RPC",
				"lang": "python",
				"source": "from vovk_client import UserRPC\n\nresponse = UserRPC.update_user(\n    body={\n        # User email\n        \"email\": \"john@example.com\",\n        # User profile object\n        \"profile\": {\n            # User full name\n            \"name\": \"John Doe\",\n            # User age\n            \"age\": 25\n        }\n    },\n    query={\n        # Notification type\n        \"notify\": \"email\"\n    },\n    params={\n        # User ID\n        \"id\": \"123e4567-e89b-12d3-a456-426614174000\"\n    },\n)\n\nprint(response)\n{\n    # -----\n    # Response object\n    # -----\n    # Success status\n    \"success\": true\n}"
			},
			{
				"label": "Rust RPC",
				"lang": "rust",
				"source": "use vovk_client::user_rpc;\nuse serde_json::{ \n  from_value, \n  json \n};\n\n\npub fn main() {\n  let response = user_rpc::update_user(\n    from_value(json!({\n        // User email\n        \"email\": \"john@example.com\",\n        // User profile object\n        \"profile\": {\n            // User full name\n            \"name\": \"John Doe\",\n            // User age\n            \"age\": 25\n        }\n    })).unwrap(), /* body */ \n    from_value(json!({\n        // Notification type\n        \"notify\": \"email\"\n    })).unwrap(), /* query */ \n    from_value(json!({\n        // User ID\n        \"id\": \"123e4567-e89b-12d3-a456-426614174000\"\n    })).unwrap(), /* params */ \n    None, /* headers (HashMap) */ \n    None, /* api_root */\n    false, /* disable_client_validation */\n  );\n\nmatch response {\n    Ok(output) => println!(\"{:?}\", output),\n    /* \n    output {\n        // Success status\n        success: true\n    } \n    */\n    Err(e) => println!(\"error: {:?}\", e),\n  }\n}"
			}
		],
		"parameters": [{
			"name": "notify",
			"in": "query",
			"required": true,
			"schema": {
				"description": "Notification type",
				"type": "string",
				"enum": [
					"email",
					"push",
					"none"
				]
			}
		}, {
			"name": "id",
			"in": "path",
			"required": true,
			"schema": {
				"description": "User ID",
				"examples": ["123e4567-e89b-12d3-a456-426614174000"],
				"type": "string",
				"format": "uuid",
				"pattern": "^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$"
			}
		}],
		"responses": { "200": {
			"description": "Response object",
			"content": { "application/json": { "schema": {
				"$schema": "https://json-schema.org/draft/2020-12/schema",
				"description": "Response object",
				"type": "object",
				"properties": { "success": {
					"description": "Success status",
					"type": "boolean"
				} },
				"required": ["success"],
				"additionalProperties": false
			} } }
		} },
		"requestBody": {
			"description": "User data object",
			"required": true,
			"content": { "application/json": { "schema": {
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
			} } }
		}
	} },
	"/api/streams/tokens": { "get": {
		"summary": "Stream tokens",
		"description": "Stream tokens to the client",
		"x-codeSamples": [
			{
				"label": "TypeScript RPC",
				"lang": "typescript",
				"source": "import { StreamRPC } from 'vovk-client';\n\nusing response = await StreamRPC.streamTokens();\n\nfor await (const item of response) {\n    console.log(item); \n    /*\n    {\n        // Message from the token\n        message: \"string\"\n    }\n    */\n}"
			},
			{
				"label": "Python RPC",
				"lang": "python",
				"source": "from vovk_client import StreamRPC\n\nresponse = StreamRPC.stream_tokens()\n\nfor i, item in enumerate(response):\n    print(f\"iteration #{i}:\\n {item}\")\n    # iteration #0:\n    {\n        # Message from the token\n        \"message\": \"string\"\n    }"
			},
			{
				"label": "Rust RPC",
				"lang": "rust",
				"source": "use vovk_client::stream_rpc;\nuse serde_json::{ \n  from_value, \n  json \n};\n\n\npub fn main() {\n  let response = stream_rpc::stream_tokens(\n    (), /* body */ \n    (), /* query */ \n    (), /* params */ \n    None, /* headers (HashMap) */ \n    None, /* api_root */\n    false, /* disable_client_validation */\n  );\n\nmatch response {\n    Ok(stream) => {\n      for (i, item) in stream.enumerate() {\n        println!(\"#{}: {:?}\", i, item);\n        /*\n        #0: iteration {\n            // Message from the token\n            message: \"string\"\n        }\n        */\n      }\n    },\n    Err(e) => println!(\"Error initiating stream: {:?}\", e),\n  }\n}"
			}
		],
		"responses": { "200": {
			"description": "Streamed token object",
			"content": { "application/jsonl": { "schema": {
				"$schema": "https://json-schema.org/draft/2020-12/schema",
				"description": "Streamed token object",
				"type": "object",
				"properties": { "message": {
					"description": "Message from the token",
					"type": "string"
				} },
				"required": ["message"],
				"additionalProperties": false,
				"examples": ["{\"message\":\"string\"}\n{\"message\":\"string\"}\n{\"message\":\"string\"}"]
			} } }
		} }
	} },
	"/api/static/openapi/spec.json": { "get": {
		"summary": "OpenAPI spec",
		"description": "Get the OpenAPI spec for the \"Hello World\" app API",
		"x-codeSamples": [
			{
				"label": "TypeScript RPC",
				"lang": "typescript",
				"source": "import { OpenApiRPC } from 'vovk-client';\n\nconst response = await OpenApiRPC.getSpec();"
			},
			{
				"label": "Python RPC",
				"lang": "python",
				"source": "from vovk_client import OpenApiRPC\n\nresponse = OpenApiRPC.get_spec()"
			},
			{
				"label": "Rust RPC",
				"lang": "rust",
				"source": "use vovk_client::open_api_rpc;\nuse serde_json::{ \n  from_value, \n  json \n};\n\n\npub fn main() {\n  let response = open_api_rpc::get_spec(\n    (), /* body */ \n    (), /* query */ \n    (), /* params */ \n    None, /* headers (HashMap) */ \n    None, /* api_root */\n    false, /* disable_client_validation */\n  );\n}"
			}
		]
	} }
};
var openapi_default = {
	info,
	openapi,
	components,
	paths
};

//#endregion
//#region tmp_prebundle/index.ts
const UserRPC = (0, vovk.createRPC)(schema, "", "UserRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "http://localhost:3000/api"
});
const StreamRPC = (0, vovk.createRPC)(schema, "", "StreamRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "http://localhost:3000/api"
});
const OpenApiRPC = (0, vovk.createRPC)(schema, "static", "OpenApiRPC", import("vovk"), {
	validateOnClient: import("vovk-ajv"),
	apiRoot: "http://localhost:3000/api"
});

//#endregion
exports.OpenApiRPC = OpenApiRPC;
exports.StreamRPC = StreamRPC;
exports.UserRPC = UserRPC;
Object.defineProperty(exports, 'openapi', {
  enumerable: true,
  get: function () {
    return openapi_default;
  }
});
exports.schema = schema;