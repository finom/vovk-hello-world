//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion

//#region node_modules/vovk/mjs/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VovkSchemaIdEnum = exports.HttpStatus = exports.HttpMethod = void 0;
	/**
	* HTTP methods
	*/
	var HttpMethod;
	(function(HttpMethod) {
		HttpMethod["GET"] = "GET";
		HttpMethod["POST"] = "POST";
		HttpMethod["PUT"] = "PUT";
		HttpMethod["PATCH"] = "PATCH";
		HttpMethod["DELETE"] = "DELETE";
		HttpMethod["HEAD"] = "HEAD";
		HttpMethod["OPTIONS"] = "OPTIONS";
	})(HttpMethod || (exports.HttpMethod = HttpMethod = {}));
	/**
	* HTTP status codes
	*/
	var HttpStatus;
	(function(HttpStatus) {
		HttpStatus[HttpStatus["NULL"] = 0] = "NULL";
		HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
		HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
		HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
		HttpStatus[HttpStatus["EARLYHINTS"] = 103] = "EARLYHINTS";
		HttpStatus[HttpStatus["OK"] = 200] = "OK";
		HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
		HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
		HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
		HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
		HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
		HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
		HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
		HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
		HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
		HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
		HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
		HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
		HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
		HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
		HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
		HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
		HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
		HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
		HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
		HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
		HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
		HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
		HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
		HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
		HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
		HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
		HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
		HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
		HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
		HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
		HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
		HttpStatus[HttpStatus["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
		HttpStatus[HttpStatus["MISDIRECTED"] = 421] = "MISDIRECTED";
		HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
		HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
		HttpStatus[HttpStatus["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
		HttpStatus[HttpStatus["TOO_MANY_TRequestS"] = 429] = "TOO_MANY_TRequestS";
		HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
		HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
		HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
		HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
		HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
		HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
	})(HttpStatus || (exports.HttpStatus = HttpStatus = {}));
	/**
	* IDs of the JSON Schema files that can be generated by Vovk.ts
	*/
	var VovkSchemaIdEnum;
	(function(VovkSchemaIdEnum) {
		VovkSchemaIdEnum["META"] = "https://vovk.dev/api/schema/v3/meta.json";
		VovkSchemaIdEnum["CONFIG"] = "https://vovk.dev/api/schema/v3/config.json";
		VovkSchemaIdEnum["SEGMENT"] = "https://vovk.dev/api/schema/v3/segment.json";
		VovkSchemaIdEnum["SCHEMA"] = "https://vovk.dev/api/schema/v3/schema.json";
	})(VovkSchemaIdEnum || (exports.VovkSchemaIdEnum = VovkSchemaIdEnum = {}));
}));

//#endregion
//#region node_modules/vovk/mjs/core/HttpException.js
var require_HttpException = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HttpException = void 0;
	/**
	* Represents an HTTP exception with a status code and message.
	* @example
	* ```ts
	* throw new HttpException(HttpStatus.BAD_REQUEST, 'Invalid request data');
	* ```
	*/
	var HttpException = class extends Error {
		statusCode;
		message;
		cause;
		constructor(statusCode, message, cause) {
			super(message);
			this.statusCode = statusCode;
			this.message = message;
			this.cause = cause;
		}
		toJSON() {
			return {
				isError: true,
				statusCode: this.statusCode,
				message: this.message,
				...this.cause ? { cause: this.cause } : {}
			};
		}
	};
	exports.HttpException = HttpException;
}));

//#endregion
//#region node_modules/vovk/mjs/client/fetcher.js
var require_fetcher = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fetcher = exports.DEFAULT_ERROR_MESSAGE = void 0;
	exports.createFetcher = createFetcher;
	const types_1 = require_types();
	const HttpException_1 = require_HttpException();
	exports.DEFAULT_ERROR_MESSAGE = "Unknown error at default fetcher";
	/**
	* Creates a customizable fetcher function for client requests.
	* @see https://vovk.dev/imports
	*/
	function createFetcher({ prepareRequestInit, transformResponse, onSuccess, onError } = {}) {
		const newFetcher = async ({ httpMethod, getURL, validate, defaultHandler, defaultStreamHandler, schema }, inputOptions) => {
			let response = null;
			let respData = null;
			let requestInit = null;
			try {
				const { meta, apiRoot, disableClientValidation, init, interpretAs } = inputOptions;
				let { body, query, params } = inputOptions;
				const endpoint = getURL({
					apiRoot,
					params,
					query
				});
				const unusedParams = Array.from(new URL(endpoint.startsWith("/") ? `http://localhost${endpoint}` : endpoint).pathname.matchAll(/\{([^}]+)\}/g)).map((m) => m[1]);
				if (unusedParams.length) throw new HttpException_1.HttpException(types_1.HttpStatus.NULL, `Unused params: ${unusedParams.join(", ")} in ${endpoint}`, {
					body,
					query,
					params,
					endpoint
				});
				if (!disableClientValidation) try {
					({body, query, params} = await validate(inputOptions, { endpoint }) ?? {
						body,
						query,
						params
					});
				} catch (e) {
					if (e instanceof HttpException_1.HttpException) throw e;
					throw new HttpException_1.HttpException(types_1.HttpStatus.NULL, e.message ?? exports.DEFAULT_ERROR_MESSAGE, {
						body,
						query,
						params,
						endpoint
					});
				}
				requestInit = {
					method: httpMethod,
					...init,
					headers: {
						accept: "application/jsonl, application/json",
						...body instanceof FormData ? {} : { "content-type": "application/json" },
						...meta ? { "x-meta": JSON.stringify(meta) } : {},
						...init?.headers
					}
				};
				if (body instanceof FormData) requestInit.body = body;
				else if (body) requestInit.body = JSON.stringify(body);
				const abortController = new AbortController();
				requestInit.signal = abortController.signal;
				requestInit = prepareRequestInit ? await prepareRequestInit(requestInit, inputOptions) : requestInit;
				try {
					response = await fetch(endpoint, requestInit);
				} catch (e) {
					throw new HttpException_1.HttpException(types_1.HttpStatus.NULL, (e?.message ?? exports.DEFAULT_ERROR_MESSAGE) + " " + endpoint, {
						body,
						query,
						params,
						endpoint
					});
				}
				const contentType = interpretAs ?? response.headers.get("content-type");
				if (contentType?.startsWith("application/jsonl")) respData = defaultStreamHandler({
					response,
					abortController
				});
				else if (contentType?.startsWith("application/json")) respData = await defaultHandler({
					response,
					schema
				});
				else respData = response;
				respData = transformResponse ? await transformResponse(respData, inputOptions, {
					response,
					init: requestInit,
					schema
				}) : respData;
				await onSuccess?.(respData, inputOptions, {
					response,
					init: requestInit,
					schema
				});
				return [respData, response];
			} catch (error) {
				await onError?.(error, inputOptions, {
					response,
					init: requestInit,
					respData,
					schema
				});
				throw error;
			}
		};
		return newFetcher;
	}
	/**
	* Default fetcher implementation for client requests.
	* @see https://vovk.dev/imports
	*/
	exports.fetcher = createFetcher();
}));

//#endregion
Object.defineProperty(exports, '__commonJSMin', {
  enumerable: true,
  get: function () {
    return __commonJSMin;
  }
});
Object.defineProperty(exports, '__toESM', {
  enumerable: true,
  get: function () {
    return __toESM;
  }
});
Object.defineProperty(exports, 'require_HttpException', {
  enumerable: true,
  get: function () {
    return require_HttpException;
  }
});
Object.defineProperty(exports, 'require_fetcher', {
  enumerable: true,
  get: function () {
    return require_fetcher;
  }
});
Object.defineProperty(exports, 'require_types', {
  enumerable: true,
  get: function () {
    return require_types;
  }
});