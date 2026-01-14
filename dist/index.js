//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __esmMin = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __exportAll = (all, symbols) => {
	let target = {};
	for (var name in all) {
		__defProp(target, name, {
			get: all[name],
			enumerable: true
		});
	}
	if (symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};

//#endregion
//#region node_modules/vovk/dist/types/enums.js
var HttpMethod, HttpStatus, VovkSchemaIdEnum;
var init_enums = __esmMin(() => {
	;
	(function(HttpMethod) {
		HttpMethod["GET"] = "GET";
		HttpMethod["POST"] = "POST";
		HttpMethod["PUT"] = "PUT";
		HttpMethod["PATCH"] = "PATCH";
		HttpMethod["DELETE"] = "DELETE";
		HttpMethod["HEAD"] = "HEAD";
		HttpMethod["OPTIONS"] = "OPTIONS";
	})(HttpMethod || (HttpMethod = {}));
	;
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
	})(HttpStatus || (HttpStatus = {}));
	;
	(function(VovkSchemaIdEnum) {
		VovkSchemaIdEnum["META"] = "https://vovk.dev/api/schema/v3/meta.json";
		VovkSchemaIdEnum["CONFIG"] = "https://vovk.dev/api/schema/v3/config.json";
		VovkSchemaIdEnum["SEGMENT"] = "https://vovk.dev/api/schema/v3/segment.json";
		VovkSchemaIdEnum["SCHEMA"] = "https://vovk.dev/api/schema/v3/schema.json";
	})(VovkSchemaIdEnum || (VovkSchemaIdEnum = {}));
});

//#endregion
//#region node_modules/vovk/dist/core/HttpException.js
var HttpException;
var init_HttpException = __esmMin(() => {
	HttpException = class extends Error {
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
});

//#endregion
//#region node_modules/vovk/dist/client/fetcher.js
var fetcher_exports = /* @__PURE__ */ __exportAll({
	DEFAULT_ERROR_MESSAGE: () => DEFAULT_ERROR_MESSAGE$2,
	createFetcher: () => createFetcher,
	fetcher: () => fetcher
});
/**
* Creates a customizable fetcher function for client requests.
* @see https://vovk.dev/imports
*/
function createFetcher({ prepareRequestInit, transformResponse, onSuccess, onError } = {}) {
	const newFetcher = async ({ httpMethod, getURL, validate, defaultHandler: defaultHandler$1, defaultStreamHandler: defaultStreamHandler$1, schema: schema$1 }, inputOptions) => {
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
			if (unusedParams.length) throw new HttpException(HttpStatus.NULL, `Unused params: ${unusedParams.join(", ")} in ${endpoint}`, {
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
				if (e instanceof HttpException) throw e;
				throw new HttpException(HttpStatus.NULL, e.message ?? DEFAULT_ERROR_MESSAGE$2, {
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
				throw new HttpException(HttpStatus.NULL, (e?.message ?? DEFAULT_ERROR_MESSAGE$2) + " " + endpoint, {
					body,
					query,
					params,
					endpoint
				});
			}
			const contentType = interpretAs ?? response.headers.get("content-type");
			if (contentType?.startsWith("application/jsonl")) respData = defaultStreamHandler$1({
				response,
				abortController
			});
			else if (contentType?.startsWith("application/json")) respData = await defaultHandler$1({
				response,
				schema: schema$1
			});
			else respData = response;
			respData = transformResponse ? await transformResponse(respData, inputOptions, {
				response,
				init: requestInit,
				schema: schema$1
			}) : respData;
			await onSuccess?.(respData, inputOptions, {
				response,
				init: requestInit,
				schema: schema$1
			});
			return [respData, response];
		} catch (error) {
			await onError?.(error, inputOptions, {
				response,
				init: requestInit,
				respData,
				schema: schema$1
			});
			throw error;
		}
	};
	return newFetcher;
}
var DEFAULT_ERROR_MESSAGE$2, fetcher;
var init_fetcher = __esmMin(() => {
	init_enums();
	init_HttpException();
	DEFAULT_ERROR_MESSAGE$2 = "Unknown error at default fetcher";
	fetcher = createFetcher();
});

//#endregion
//#region node_modules/vovk/dist/client/defaultHandler.js
init_fetcher();
init_HttpException();
const DEFAULT_ERROR_MESSAGE$1 = "Unknown error at defaultHandler";
const getNestedValue = (obj, path) => {
	return path.split(".").reduce((o, key) => o && typeof o === "object" ? o[key] : void 0, obj);
};
const defaultHandler = async ({ response, schema: schema$1 }) => {
	let result;
	try {
		result = await response.json();
	} catch (e) {
		throw new HttpException(response.status, e?.message ?? DEFAULT_ERROR_MESSAGE$1);
	}
	if (!response.ok) {
		const errorKey = schema$1.operationObject && "x-errorMessageKey" in schema$1.operationObject ? schema$1.operationObject["x-errorMessageKey"] : "message";
		const errorResponse = result;
		throw new HttpException(response.status, getNestedValue(errorResponse, errorKey) ?? DEFAULT_ERROR_MESSAGE$1, errorResponse?.cause ?? JSON.stringify(result));
	}
	return result;
};

//#endregion
//#region node_modules/vovk/dist/utils/shim.js
if (typeof Symbol.dispose !== "symbol") Object.defineProperty(Symbol, "dispose", {
	configurable: false,
	enumerable: false,
	writable: false,
	value: Symbol.for("dispose")
});
if (typeof Symbol.asyncDispose !== "symbol") Object.defineProperty(Symbol, "asyncDispose", {
	configurable: false,
	enumerable: false,
	writable: false,
	value: Symbol.for("asyncDispose")
});

//#endregion
//#region node_modules/vovk/dist/client/defaultStreamHandler.js
init_enums();
init_HttpException();
const DEFAULT_ERROR_MESSAGE = "An unknown error at the default stream handler";
const defaultStreamHandler = ({ response, abortController }) => {
	if (!response.ok) {
		let cachedError = null;
		let errorParsed = false;
		response.json().then((res) => {
			cachedError = new HttpException(response.status, res.message ?? DEFAULT_ERROR_MESSAGE);
		}).catch((e) => {
			cachedError = new HttpException(response.status, e.message ?? DEFAULT_ERROR_MESSAGE, e);
		}).finally(() => {
			errorParsed = true;
		});
		const getError = async () => {
			while (!errorParsed) await new Promise((resolve) => setTimeout(resolve, 0));
			return cachedError ?? new HttpException(response.status, DEFAULT_ERROR_MESSAGE);
		};
		const errorIterator = () => ({ async next() {
			throw await getError();
		} });
		const noop = () => {};
		return {
			status: response.status,
			asPromise: async () => {
				throw await getError();
			},
			abortController,
			[Symbol.asyncIterator]: errorIterator,
			[Symbol.dispose]: noop,
			[Symbol.asyncDispose]: async () => {},
			abortWithoutError: noop,
			onIterate: () => noop
		};
	}
	if (!response.body) throw new HttpException(HttpStatus.NULL, "Stream body is falsy. Check your controller code.");
	const reader = response.body.getReader();
	const subscribers = /* @__PURE__ */ new Set();
	let isAbortedWithoutError = false;
	let streamExhausted = false;
	let streamError = null;
	let errorIndex = -1;
	let primaryStarted = false;
	const cachedItems = [];
	const waiters = [];
	const notifyWaiters = () => {
		for (let i = waiters.length - 1; i >= 0; i--) {
			const waiter = waiters[i];
			let handled = false;
			if (streamError && waiter.index >= errorIndex) {
				waiter.reject(streamError);
				handled = true;
			} else if (waiter.index < cachedItems.length) {
				waiter.resolve({
					value: cachedItems[waiter.index],
					done: false
				});
				handled = true;
			} else if (streamExhausted || abortController.signal.aborted && isAbortedWithoutError) {
				waiter.resolve({
					value: void 0,
					done: true
				});
				handled = true;
			}
			if (handled) waiters.splice(i, 1);
		}
	};
	const setStreamError = (error) => {
		errorIndex = cachedItems.length;
		streamError = error;
		notifyWaiters();
	};
	const disposeStream = (reason) => {
		isAbortedWithoutError = true;
		streamExhausted = true;
		notifyWaiters();
		abortController.abort(reason);
		reader.cancel().catch(() => {});
	};
	const runPrimaryReader = async () => {
		let buffer = "";
		let iterationIndex = 0;
		try {
			while (true) {
				if (abortController.signal.aborted && isAbortedWithoutError) break;
				let value;
				let done;
				try {
					({value, done} = await reader.read());
					if (done) break;
				} catch (error) {
					if (error?.name === "AbortError" && isAbortedWithoutError) break;
					const err = /* @__PURE__ */ new Error("JSONLines stream error. " + String(error));
					err.cause = error;
					setStreamError(err);
					return;
				}
				const chunk = typeof value === "number" ? String.fromCharCode(value) : new TextDecoder().decode(value);
				buffer += chunk;
				const lines = buffer.split("\n").filter(Boolean);
				for (const line of lines) {
					if (abortController.signal.aborted && isAbortedWithoutError) break;
					let data;
					try {
						data = JSON.parse(line);
						buffer = buffer.slice(line.length + 1);
					} catch {
						break;
					}
					if (data) {
						subscribers.forEach((cb) => {
							if (!abortController.signal.aborted) cb(data, iterationIndex);
						});
						iterationIndex++;
						if ("isError" in data && "reason" in data) {
							const upcomingError = data.reason;
							abortController.abort(upcomingError);
							setStreamError(typeof upcomingError === "string" ? new Error(upcomingError) : upcomingError);
							return;
						} else if (!abortController.signal.aborted) {
							cachedItems.push(data);
							notifyWaiters();
						}
					}
				}
				if (abortController.signal.aborted && isAbortedWithoutError) break;
			}
		} finally {
			streamExhausted = true;
			notifyWaiters();
		}
	};
	async function* asyncIterator() {
		if (!primaryStarted) {
			primaryStarted = true;
			runPrimaryReader();
		}
		let index = 0;
		while (true) {
			if (streamError && index >= errorIndex) throw streamError;
			if (abortController.signal.aborted && isAbortedWithoutError) return;
			if (index < cachedItems.length) {
				yield cachedItems[index++];
				continue;
			}
			if (streamExhausted) return;
			const result = await new Promise((resolve, reject) => {
				if (streamError && index >= errorIndex) {
					reject(streamError);
					return;
				}
				if (abortController.signal.aborted && isAbortedWithoutError) {
					resolve({
						value: void 0,
						done: true
					});
					return;
				}
				if (index < cachedItems.length) {
					resolve({
						value: cachedItems[index],
						done: false
					});
					return;
				}
				if (streamExhausted) {
					resolve({
						value: void 0,
						done: true
					});
					return;
				}
				waiters.push({
					index,
					resolve,
					reject
				});
			});
			if (result.done) return;
			index++;
			yield result.value;
		}
	}
	const asPromise = async () => {
		const items = [];
		for await (const item of asyncIterator()) items.push(item);
		return items;
	};
	const abortWithoutError = (reason) => {
		isAbortedWithoutError = true;
		streamExhausted = true;
		notifyWaiters();
		abortController.abort(reason);
		reader.cancel().catch(() => {});
	};
	return {
		status: response.status,
		asPromise,
		abortController,
		[Symbol.asyncIterator]: asyncIterator,
		[Symbol.dispose]: () => disposeStream("Stream disposed"),
		[Symbol.asyncDispose]: async () => disposeStream("Stream async disposed"),
		abortWithoutError,
		onIterate: (cb) => {
			if (abortController.signal.aborted) return () => {};
			subscribers.add(cb);
			return () => subscribers.delete(cb);
		}
	};
};

//#endregion
//#region node_modules/vovk/dist/client/serializeQuery.js
/**
* Recursively build query parameters from an object.
*
* @param key      - The query key so far (e.g. 'user', 'user[0]', 'user[0][name]')
* @param value    - The current value to serialize
* @returns        - An array of `key=value` strings
*/
function buildParams(key, value) {
	if (value === null || value === void 0) return [];
	if (typeof value === "object") {
		if (Array.isArray(value))
 /**
		* We use index-based bracket notation here:
		*   e.g. for value = ['aa', 'bb'] and key = 'foo'
		*   => "foo[0]=aa&foo[1]=bb"
		*
		* If you prefer "foo[]=aa&foo[]=bb" style, replace:
		*   `${key}[${i}]`
		* with:
		*   `${key}[]`
		*/
		return value.flatMap((v, i) => {
			return buildParams(`${key}[${i}]`, v);
		});
		return Object.keys(value).flatMap((k) => {
			return buildParams(`${key}[${k}]`, value[k]);
		});
	}
	return [`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`];
}
/**
* Serialize a nested object (including arrays, arrays of objects, etc.)
* into a bracket-based query string.
*
* @example
*   serializeQuery({ x: 'xx', y: [1, 2], z: { f: 'x' } })
*   => "x=xx&y[0]=1&y[1]=2&z[f]=x"
*
* @param obj - The input object to be serialized
* @returns   - A bracket-based query string (without leading "?")
*/
function serializeQuery(obj) {
	if (!obj || typeof obj !== "object") return "";
	const segments$1 = [];
	for (const key in obj) if (Object.prototype.hasOwnProperty.call(obj, key)) {
		const value = obj[key];
		segments$1.push(...buildParams(key, value));
	}
	return segments$1.join("&");
}

//#endregion
//#region node_modules/vovk/dist/utils/deepExtend.js
/*!
* @description Recursive object extending
* @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>
* @license MIT
*
* The MIT License (MIT)
*
* Copyright (c) 2013-2018 Viacheslav Lotsmanov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function isSpecificValue(val) {
	return val instanceof Buffer || val instanceof Date || val instanceof RegExp;
}
function cloneSpecificValue(val) {
	if (val instanceof Buffer) {
		const x = Buffer.alloc ? Buffer.alloc(val.length) : Buffer.from(val);
		val.copy(x);
		return x;
	} else if (val instanceof Date) return new Date(val.getTime());
	else if (val instanceof RegExp) return new RegExp(val);
	else throw new Error("Unexpected situation");
}
/**
* Recursive cloning array.
*/
function deepCloneArray(arr) {
	const clone = [];
	arr.forEach((item, index) => {
		if (typeof item === "object" && item !== null) if (Array.isArray(item)) clone[index] = deepCloneArray(item);
		else if (isSpecificValue(item)) clone[index] = cloneSpecificValue(item);
		else clone[index] = deepExtend({}, item);
		else clone[index] = item;
	});
	return clone;
}
function safeGetProperty(object, property) {
	return property === "__proto__" ? void 0 : object[property];
}
function deepExtend(...args) {
	if (args.length < 1 || typeof args[0] !== "object") return false;
	if (args.length < 2) return args[0];
	const target = args[0];
	args.slice(1).forEach((obj) => {
		if (typeof obj !== "object" || obj === null || Array.isArray(obj)) return;
		Object.keys(obj).forEach((key) => {
			const src = safeGetProperty(target, key);
			const val = safeGetProperty(obj, key);
			if (val === target) return;
			else if (typeof val !== "object" || val === null) {
				/**
				* if new value isn't object then just overwrite by new value
				* instead of extending.
				*/
				target[key] = val;
				return;
			} else if (Array.isArray(val)) {
				target[key] = deepCloneArray(val);
				return;
			} else if (isSpecificValue(val)) {
				target[key] = cloneSpecificValue(val);
				return;
			} else if (typeof src !== "object" || src === null || Array.isArray(src)) {
				target[key] = deepExtend({}, val);
				return;
			} else {
				target[key] = deepExtend(src, val);
				return;
			}
		});
	});
	return target;
}

//#endregion
//#region node_modules/vovk/dist/client/createRPC.js
const trimPath = (path) => path.trim().replace(/^\/|\/$/g, "");
const getHandlerPath = (endpoint, params, query) => {
	let result = endpoint;
	const queryStr = query ? serializeQuery(query) : null;
	for (const [key, value] of Object.entries(params ?? {})) result = result.replace(`{${key}}`, value);
	return `${result}${queryStr ? `?${queryStr}` : ""}`;
};
/**
* Creates a client-side RPC module for interacting with server-side controllers.
* @see https://vovk.dev/typescript
*/
const createRPC = (givenSchema, segmentName$2, rpcModuleName, givenFetcher, options) => {
	const schema$1 = givenSchema;
	const segmentNamePath = options?.segmentNameOverride ?? segmentName$2;
	const segmentSchema = schema$1.segments[segmentName$2];
	if (!segmentSchema) throw new Error(`Unable to create RPC module. Segment schema is missing for segment "${segmentName$2}".`);
	let controllerSchema = schema$1.segments[segmentName$2]?.controllers[rpcModuleName];
	const client = {};
	if (!controllerSchema) {
		console.warn(`🐺 Unable to create RPC module. Controller schema is missing for module "${rpcModuleName}" from segment "${segmentName$2}". Assuming that schema is not ready yet and a segment is importing an uncompiled RPC module.`);
		controllerSchema = {
			rpcModuleName,
			prefix: "",
			handlers: {}
		};
	}
	const controllerPrefix = trimPath(controllerSchema.prefix ?? "");
	const forceApiRoot = segmentSchema.forceApiRoot;
	const configRootEntry = schema$1.meta?.config?.rootEntry;
	const originalApiRoot = forceApiRoot ?? options?.apiRoot ?? (configRootEntry ? `/${configRootEntry}` : "/api");
	for (const [staticMethodName, handlerSchema] of Object.entries(controllerSchema.handlers ?? {})) {
		const { path, httpMethod, validation } = handlerSchema;
		const getURL = ({ apiRoot, params, query } = {}) => {
			apiRoot = apiRoot ?? originalApiRoot;
			return [
				apiRoot.startsWith("http://") || apiRoot.startsWith("https://") || apiRoot.startsWith("/") ? "" : "/",
				apiRoot,
				forceApiRoot ? "" : segmentNamePath,
				getHandlerPath([controllerPrefix, path].filter(Boolean).join("/"), params, query)
			].filter(Boolean).join("/").replace(/([^:])\/+/g, "$1/");
		};
		const handler = (async (input = {}) => {
			const optionsResolvedValidateOnClient = options?.validateOnClient instanceof Promise ? (await options?.validateOnClient)?.validateOnClient : options?.validateOnClient;
			const fetcher$1 = givenFetcher instanceof Promise ? (await givenFetcher).fetcher : givenFetcher ?? fetcher;
			const validate = async (validationInput, { endpoint }) => {
				const validateOnClient = input.validateOnClient ?? optionsResolvedValidateOnClient;
				if (validateOnClient && validation) {
					if (typeof validateOnClient !== "function") throw new Error("validateOnClient must be a function");
					return await validateOnClient({ ...validationInput }, validation, {
						fullSchema: schema$1,
						endpoint
					}) ?? validationInput;
				}
				return validationInput;
			};
			const internalOptions = {
				name: staticMethodName,
				httpMethod,
				getURL,
				validate,
				defaultHandler,
				defaultStreamHandler,
				schema: handlerSchema
			};
			const internalInput = {
				...deepExtend({}, options, { validateOnClient: optionsResolvedValidateOnClient }, input),
				body: input.body ?? null,
				query: input.query ?? {},
				params: input.params ?? {}
			};
			if (!fetcher$1) throw new Error("Fetcher is not provided");
			const [respData, resp] = await fetcher$1(internalOptions, internalInput);
			return input.transform ? input.transform(respData, resp) : respData;
		});
		handler.schema = handlerSchema;
		handler.controllerSchema = controllerSchema;
		handler.segmentSchema = segmentSchema;
		handler.fullSchema = schema$1;
		handler.isRPC = true;
		handler.apiRoot = originalApiRoot;
		handler.getURL = getURL;
		handler.queryKey = (key) => [
			handler.segmentSchema.segmentName,
			handler.controllerSchema.prefix ?? "",
			handler.controllerSchema.rpcModuleName,
			handler.schema.path,
			handler.schema.httpMethod,
			...key ?? []
		];
		client[staticMethodName] = handler;
	}
	client.withDefaults = (newOptions) => {
		return createRPC(schema$1, segmentName$2, rpcModuleName, givenFetcher, {
			...options,
			...newOptions
		});
	};
	return client;
};

//#endregion
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
const UserRPC = createRPC(schema, "", "UserRPC", Promise.resolve().then(() => (init_fetcher(), fetcher_exports)), {
	validateOnClient: void 0,
	apiRoot: "https://hello-world.vovk.dev/api"
});
const StreamRPC = createRPC(schema, "", "StreamRPC", Promise.resolve().then(() => (init_fetcher(), fetcher_exports)), {
	validateOnClient: void 0,
	apiRoot: "https://hello-world.vovk.dev/api"
});
const OpenApiRPC = createRPC(schema, "static", "OpenApiRPC", Promise.resolve().then(() => (init_fetcher(), fetcher_exports)), {
	validateOnClient: void 0,
	apiRoot: "https://hello-world.vovk.dev/api"
});

//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, schema };