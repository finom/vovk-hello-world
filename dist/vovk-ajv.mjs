import { n as __require, t as __commonJSMin } from "./chunk.mjs";

//#region node_modules/ajv-formats/dist/formats.js
var require_formats = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatNames = exports.fastFormats = exports.fullFormats = void 0;
	function fmtDef(validate, compare) {
		return {
			validate,
			compare
		};
	}
	exports.fullFormats = {
		date: fmtDef(date, compareDate),
		time: fmtDef(getTime(true), compareTime),
		"date-time": fmtDef(getDateTime(true), compareDateTime),
		"iso-time": fmtDef(getTime(), compareIsoTime),
		"iso-date-time": fmtDef(getDateTime(), compareIsoDateTime),
		duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
		uri,
		"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
		"uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
		url: /^(?:https?|ftp):\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
		email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
		hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
		ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
		ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
		regex,
		uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
		"json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
		"json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
		"relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
		byte,
		int32: {
			type: "number",
			validate: validateInt32
		},
		int64: {
			type: "number",
			validate: validateInt64
		},
		float: {
			type: "number",
			validate: validateNumber
		},
		double: {
			type: "number",
			validate: validateNumber
		},
		password: true,
		binary: true
	};
	exports.fastFormats = {
		...exports.fullFormats,
		date: fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, compareDate),
		time: fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareTime),
		"date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, compareDateTime),
		"iso-time": fmtDef(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoTime),
		"iso-date-time": fmtDef(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, compareIsoDateTime),
		uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
		"uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
		email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
	};
	exports.formatNames = Object.keys(exports.fullFormats);
	function isLeapYear(year) {
		return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	}
	const DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
	const DAYS = [
		0,
		31,
		28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	];
	function date(str) {
		const matches = DATE.exec(str);
		if (!matches) return false;
		const year = +matches[1];
		const month = +matches[2];
		const day = +matches[3];
		return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
	}
	function compareDate(d1, d2) {
		if (!(d1 && d2)) return void 0;
		if (d1 > d2) return 1;
		if (d1 < d2) return -1;
		return 0;
	}
	const TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
	function getTime(strictTimeZone) {
		return function time(str) {
			const matches = TIME.exec(str);
			if (!matches) return false;
			const hr = +matches[1];
			const min = +matches[2];
			const sec = +matches[3];
			const tz = matches[4];
			const tzSign = matches[5] === "-" ? -1 : 1;
			const tzH = +(matches[6] || 0);
			const tzM = +(matches[7] || 0);
			if (tzH > 23 || tzM > 59 || strictTimeZone && !tz) return false;
			if (hr <= 23 && min <= 59 && sec < 60) return true;
			const utcMin = min - tzM * tzSign;
			const utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
			return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
		};
	}
	function compareTime(s1, s2) {
		if (!(s1 && s2)) return void 0;
		const t1 = (/* @__PURE__ */ new Date("2020-01-01T" + s1)).valueOf();
		const t2 = (/* @__PURE__ */ new Date("2020-01-01T" + s2)).valueOf();
		if (!(t1 && t2)) return void 0;
		return t1 - t2;
	}
	function compareIsoTime(t1, t2) {
		if (!(t1 && t2)) return void 0;
		const a1 = TIME.exec(t1);
		const a2 = TIME.exec(t2);
		if (!(a1 && a2)) return void 0;
		t1 = a1[1] + a1[2] + a1[3];
		t2 = a2[1] + a2[2] + a2[3];
		if (t1 > t2) return 1;
		if (t1 < t2) return -1;
		return 0;
	}
	const DATE_TIME_SEPARATOR = /t|\s/i;
	function getDateTime(strictTimeZone) {
		const time = getTime(strictTimeZone);
		return function date_time(str) {
			const dateTime = str.split(DATE_TIME_SEPARATOR);
			return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
		};
	}
	function compareDateTime(dt1, dt2) {
		if (!(dt1 && dt2)) return void 0;
		const d1 = new Date(dt1).valueOf();
		const d2 = new Date(dt2).valueOf();
		if (!(d1 && d2)) return void 0;
		return d1 - d2;
	}
	function compareIsoDateTime(dt1, dt2) {
		if (!(dt1 && dt2)) return void 0;
		const [d1, t1] = dt1.split(DATE_TIME_SEPARATOR);
		const [d2, t2] = dt2.split(DATE_TIME_SEPARATOR);
		const res = compareDate(d1, d2);
		if (res === void 0) return void 0;
		return res || compareTime(t1, t2);
	}
	const NOT_URI_FRAGMENT = /\/|:/;
	const URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
	function uri(str) {
		return NOT_URI_FRAGMENT.test(str) && URI.test(str);
	}
	const BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
	function byte(str) {
		BYTE.lastIndex = 0;
		return BYTE.test(str);
	}
	const MIN_INT32 = -(2 ** 31);
	const MAX_INT32 = 2 ** 31 - 1;
	function validateInt32(value) {
		return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
	}
	function validateInt64(value) {
		return Number.isInteger(value);
	}
	function validateNumber() {
		return true;
	}
	const Z_ANCHOR = /[^\\]\\Z/;
	function regex(str) {
		if (Z_ANCHOR.test(str)) return false;
		try {
			new RegExp(str);
			return true;
		} catch (e) {
			return false;
		}
	}
}));

//#endregion
//#region node_modules/ajv-formats/dist/limit.js
var require_limit = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.formatLimitDefinition = void 0;
	const ajv_1$2 = __require("ajv");
	const codegen_1$2 = __require("ajv/dist/compile/codegen");
	const ops = codegen_1$2.operators;
	const KWDs = {
		formatMaximum: {
			okStr: "<=",
			ok: ops.LTE,
			fail: ops.GT
		},
		formatMinimum: {
			okStr: ">=",
			ok: ops.GTE,
			fail: ops.LT
		},
		formatExclusiveMaximum: {
			okStr: "<",
			ok: ops.LT,
			fail: ops.GTE
		},
		formatExclusiveMinimum: {
			okStr: ">",
			ok: ops.GT,
			fail: ops.LTE
		}
	};
	const error = {
		message: ({ keyword, schemaCode }) => (0, codegen_1$2.str)`should be ${KWDs[keyword].okStr} ${schemaCode}`,
		params: ({ keyword, schemaCode }) => (0, codegen_1$2._)`{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`
	};
	exports.formatLimitDefinition = {
		keyword: Object.keys(KWDs),
		type: "string",
		schemaType: "string",
		$data: true,
		error,
		code(cxt) {
			const { gen, data, schemaCode, keyword, it } = cxt;
			const { opts, self } = it;
			if (!opts.validateFormats) return;
			const fCxt = new ajv_1$2.KeywordCxt(it, self.RULES.all.format.definition, "format");
			if (fCxt.$data) validate$DataFormat();
			else validateFormat();
			function validate$DataFormat() {
				const fmts = gen.scopeValue("formats", {
					ref: self.formats,
					code: opts.code.formats
				});
				const fmt = gen.const("fmt", (0, codegen_1$2._)`${fmts}[${fCxt.schemaCode}]`);
				cxt.fail$data((0, codegen_1$2.or)((0, codegen_1$2._)`typeof ${fmt} != "object"`, (0, codegen_1$2._)`${fmt} instanceof RegExp`, (0, codegen_1$2._)`typeof ${fmt}.compare != "function"`, compareCode(fmt)));
			}
			function validateFormat() {
				const format = fCxt.schema;
				const fmtDef = self.formats[format];
				if (!fmtDef || fmtDef === true) return;
				if (typeof fmtDef != "object" || fmtDef instanceof RegExp || typeof fmtDef.compare != "function") throw new Error(`"${keyword}": format "${format}" does not define "compare" function`);
				const fmt = gen.scopeValue("formats", {
					key: format,
					ref: fmtDef,
					code: opts.code.formats ? (0, codegen_1$2._)`${opts.code.formats}${(0, codegen_1$2.getProperty)(format)}` : void 0
				});
				cxt.fail$data(compareCode(fmt));
			}
			function compareCode(fmt) {
				return (0, codegen_1$2._)`${fmt}.compare(${data}, ${schemaCode}) ${KWDs[keyword].fail} 0`;
			}
		},
		dependencies: ["format"]
	};
	const formatLimitPlugin = (ajv) => {
		ajv.addKeyword(exports.formatLimitDefinition);
		return ajv;
	};
	exports.default = formatLimitPlugin;
}));

//#endregion
//#region node_modules/ajv-formats/dist/index.js
var require_dist$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const formats_1 = require_formats();
	const limit_1 = require_limit();
	const codegen_1$1 = __require("ajv/dist/compile/codegen");
	const fullName = new codegen_1$1.Name("fullFormats");
	const fastName = new codegen_1$1.Name("fastFormats");
	const formatsPlugin = (ajv, opts = { keywords: true }) => {
		if (Array.isArray(opts)) {
			addFormats(ajv, opts, formats_1.fullFormats, fullName);
			return ajv;
		}
		const [formats, exportName] = opts.mode === "fast" ? [formats_1.fastFormats, fastName] : [formats_1.fullFormats, fullName];
		addFormats(ajv, opts.formats || formats_1.formatNames, formats, exportName);
		if (opts.keywords) (0, limit_1.default)(ajv);
		return ajv;
	};
	formatsPlugin.get = (name, mode = "full") => {
		const f = (mode === "fast" ? formats_1.fastFormats : formats_1.fullFormats)[name];
		if (!f) throw new Error(`Unknown format "${name}"`);
		return f;
	};
	function addFormats(ajv, list, fs, exportName) {
		var _a;
		var _b;
		(_a = (_b = ajv.opts.code).formats) !== null && _a !== void 0 || (_b.formats = (0, codegen_1$1._)`require("ajv-formats/dist/formats").${exportName}`);
		for (const f of list) ajv.addFormat(f, fs[f]);
	}
	module.exports = exports = formatsPlugin;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = formatsPlugin;
}));

//#endregion
//#region node_modules/ajv-i18n/localize/en/index.js
var require_en = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_en(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "additionalProperties":
					out = "must NOT have additional properties";
					break;
				case "anyOf":
					out = "must match a schema in \"anyOf\"";
					break;
				case "const":
					out = "must be equal to constant";
					break;
				case "contains":
					out = "must contain a valid item";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "must have propert";
					if (n == 1) out += "y";
					else out += "ies";
					out += " " + e.params.deps + " when property " + e.params.property + " is present";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "must pass \"" + e.keyword + "\" keyword validation";
					}
					break;
				case "enum":
					out = "must be equal to one of the allowed values";
					break;
				case "false schema":
					out = "boolean schema is false";
					break;
				case "format":
					out = "must match format \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "must NOT be longer than " + n + " character";
					if (n != 1) out += "s";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "must NOT have more than " + n + " propert";
					if (n == 1) out += "y";
					else out += "ies";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "must NOT have less than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "must NOT be shorter than " + n + " character";
					if (n != 1) out += "s";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "must NOT have less than " + n + " propert";
					if (n == 1) out += "y";
					else out += "ies";
					break;
				case "multipleOf":
					out = "must be a multiple of " + e.params.multipleOf;
					break;
				case "not":
					out = "must NOT be valid according to schema in \"not\"";
					break;
				case "oneOf":
					out = "must match exactly one schema in \"oneOf\"";
					break;
				case "pattern":
					out = "must match pattern \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "must have property matching pattern \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "property name is invalid";
					break;
				case "required":
					out = "must have required property " + e.params.missingProperty;
					break;
				case "type":
					out = "must be " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "must NOT have duplicate items (items ## " + e.params.j + " and " + e.params.i + " are identical)";
					break;
				default: out = "must pass \"" + e.keyword + "\" keyword validation";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/ar/index.js
var require_ar = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_ar(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أكثر من " + n + " عنصر";
					break;
				case "additionalProperties":
					out = "يجب أن لا يحوي خصائص إضافية";
					break;
				case "anyOf":
					out = "يجب أن يوافق أحد المخططات الموجودة في \"anyOf\"";
					break;
				case "const":
					out = "يجب أن يكون ثابتاً";
					break;
				case "contains":
					out = "يجب أن يحوي عنصرا صحيح";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += " يجب أن يحوي الخصائص " + e.params.deps + " عندما تكون الخاصية " + e.params.property + " موجودة";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "يجب أن تمرر كلمة التحقق المفتاحية \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "قيمة هذا الحقل يجب أن تكون مساوية لأحد القيم المعرفة مسبقاً";
					break;
				case "false schema":
					out = "المخطط المنطقي غير صحيح";
					break;
				case "format":
					out = "يجب أن يوافق الصيغة \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " يجب أن يكون " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " يجب أن يكون " + cond;
					break;
				case "if":
					out = "يجب أن توافق المخطط \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " يجب أن يكون " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أكثر من " + n + " عنصر";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أكثر من " + n + " محرف";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أكثر من " + n + " خصائص";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " يجب أن يكون " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أقل من " + n + " عنصر";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أقل من " + n + " محرف";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += " يجب أن لا يحوي أقل من " + n + " خصائص";
					break;
				case "multipleOf":
					out = " يجب أن يحوي أكثر من " + e.params.multipleOf;
					break;
				case "not":
					out = "يجب أن يكون غير صحيح وفقاً للمخطط \"not\"";
					break;
				case "oneOf":
					out = "يجب أن يوافق مخطط واحد فقط موجود في \"oneOf\"";
					break;
				case "pattern":
					out = "يجب أن يوافق النمط \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "يجب أن يحوي خاصية توافق النمط \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "اسم الخاصية غير صالح";
					break;
				case "required":
					out = "هذا الحقل إلزامي";
					break;
				case "type":
					out = "قيمة هذا الحقل غير صالحة";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "يجب أن لا يحوي عناصر مكررة (العنصر ## " + e.params.j + " و " + e.params.i + " متطابقة)";
					break;
				default: out = "يجب أن تمرر كلمة التحقق المفتاحية \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/ca/index.js
var require_ca = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_ca(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "no ha de tenir més de " + n + " element";
					if (n != 1) out += "s";
					break;
				case "additionalProperties":
					out = "no ha de tenir propietats addicionals";
					break;
				case "anyOf":
					out = "ha de coincidir amb algun esquema definit a \"anyOf\"";
					break;
				case "const":
					out = "ha de ser igual a la constant";
					break;
				case "contains":
					out = "ha de contenir un ítem vàlid";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "ha de contenir la propietat";
					if (n != 1) out += "s";
					out += " " + e.params.deps + " quan la propietat " + e.params.property + " és present";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "ha de passar la validació de la clau \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "ha de ser igual a un dels valors predefinits";
					break;
				case "false schema":
					out = "l’esquema és fals";
					break;
				case "format":
					out = "ha de coincidir amb el format \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ha de ser " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ha de ser " + cond;
					break;
				case "if":
					out = "ha de correspondre’s amb l’esquema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ha de ser " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "no ha de tenir més de " + n + " ítem";
					if (n != 1) out += "s";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "no pot contenir més de " + n + " caràcter";
					if (n != 1) out += "s";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "no pot contenir més de " + n + " propietat";
					if (n != 1) out += "s";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ha de ser " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "no ha de tenir menys de " + n + " ítem";
					if (n != 1) out += "s";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "no pot contenir menys de " + n + " caràcter";
					if (n != 1) out += "s";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "no pot contenir menys de " + n + " propietat";
					if (n != 1) out += "s";
					break;
				case "multipleOf":
					out = "ha de ser múltiple de " + e.params.multipleOf;
					break;
				case "not":
					out = "no ha de ser vàlid d’acord amb l’esquema definit a \"not\"";
					break;
				case "oneOf":
					out = "ha de coincidir només amb un esquema definit a \"oneOf\"";
					break;
				case "pattern":
					out = "ha de coincidir amb el patró \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "la propietat ha de coincidir amb el patró \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "la propietat no és vàlida";
					break;
				case "required":
					out = "ha de tenir la propietat requerida " + e.params.missingProperty;
					break;
				case "type":
					out = "ha de ser del tipus " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "no ha de tenir ítems duplicats (els ítems ## " + e.params.j + " i " + e.params.i + " són idèntics)";
					break;
				default: out = "ha de passar la validació de la clau \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/cs/index.js
var require_cs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_cs(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "nemůže mít víc, než " + n + " prv";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ků";
					break;
				case "additionalProperties":
					out = "nemůže mít další položky";
					break;
				case "anyOf":
					out = "musí vyhovět alespoň jednomu schématu v \"anyOf\"";
					break;
				case "const":
					out = "musí být roven konstantě";
					break;
				case "contains":
					out = "musí obsahovat prvek odpovídající schématu";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "musí mít polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ka";
					out += ": " + e.params.deps + ", pokud obsahuje " + e.params.property;
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "musí vyhovět \"" + e.keyword + "\" validaci";
					}
					break;
				case "enum":
					out = "musí být rovno jedné hodnotě z výčtu";
					break;
				case "false schema":
					out = "schéma je false";
					break;
				case "format":
					out = "musí být ve formátu \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí být " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí být " + cond;
					break;
				case "if":
					out = "musí vyhovět \"" + e.params.failingKeyword + "\" schématu";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí být " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "nesmí obsahovat víc než " + n + " prv";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ků";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "nesmí být delší než " + n + " zna";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "k";
					else out += "ků";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "nesmí mít víc než " + n + " polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ka";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí být " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "nesmí obsahovat méně než " + n + " prv";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ků";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "nesmí být kratší než " + n + " zna";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "k";
					else out += "ků";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "nesmí mít méně než " + n + " polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "ek";
					else out += "ka";
					break;
				case "multipleOf":
					out = "musí být násobkem " + e.params.multipleOf;
					break;
				case "not":
					out = "nesmí vyhovět schématu v \"not\"";
					break;
				case "oneOf":
					out = "musí vyhovět právě jednomu schématu v \"oneOf\"";
					break;
				case "pattern":
					out = "musí vyhovět regulárnímu výrazu \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "musí obsahovat položku vyhovující regulárnímu výrazu \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "název položky není platný";
					break;
				case "required":
					out = "musí obsahovat požadovanou položku " + e.params.missingProperty;
					break;
				case "type":
					out = "musí být " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "nesmí obsahovat duplicitní prvky (prvky ## " + e.params.j + " a " + e.params.i + " jsou identické)";
					break;
				default: out = "musí vyhovět \"" + e.keyword + "\" validaci";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/de/index.js
var require_de = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_de(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "darf nicht mehr als " + n + " Element";
					if (n != 1) out += "e";
					out += " enthalten";
					break;
				case "additionalProperties":
					out = "darf keine zusätzlichen Attribute haben";
					break;
				case "anyOf":
					out = "muss einem der Schemata in \"anyOf\" entsprechen";
					break;
				case "const":
					out = "muss gleich der Konstanten sein";
					break;
				case "contains":
					out = "muss ein valides Element enthalten";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "muss Attribut";
					if (n != 1) out += "e";
					out += " " + e.params.deps + " aufweisen, wenn Attribut " + e.params.property + " gesetzt ist";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "der Tag \"" + e.params.tag + "\" muss eine Zeichenkette sein";
							break;
						case "mapping":
							out = "der Wert vom Tag \"" + e.params.tag + "\" muss im oneOf enthalten sein";
							break;
						default: out = "muss die Validierung \"" + e.keyword + "\" bestehen";
					}
					break;
				case "enum":
					out = "muss einem der vorgegebenen Werte entsprechen";
					break;
				case "false schema":
					out = "boolesches Schema ist falsch";
					break;
				case "format":
					out = "muss diesem Format entsprechen: \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "muss " + cond + " sein";
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "muss " + cond + " sein";
					break;
				case "if":
					out = "muss dem Schema \"" + e.params.failingKeyword + "\" entsprechen";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "muss " + cond + " sein";
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "darf nicht mehr als " + n + " Element";
					if (n != 1) out += "e";
					out += " haben";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "darf nicht länger als " + n + " Zeichen sein";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "darf nicht mehr als " + n + " Attribut";
					if (n != 1) out += "e";
					out += " haben";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "muss " + cond + " sein";
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "darf nicht weniger als " + n + " Element";
					if (n != 1) out += "e";
					out += " haben";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "darf nicht kürzer als " + n + " Zeichen sein";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "darf nicht weniger als " + n + " Attribut";
					if (n != 1) out += "e";
					out += " haben";
					break;
				case "multipleOf":
					out = "muss ein Vielfaches von " + e.params.multipleOf + " sein";
					break;
				case "not":
					out = "muss dem in \"not\" angegebenen Schema widersprechen";
					break;
				case "oneOf":
					out = "muss genau einem der Schemata in \"oneOf\" entsprechen";
					break;
				case "pattern":
					out = "muss diesem Muster entsprechen: \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "muss ein Attribut nach folgendem Muster haben \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "Attributname ist ungültig";
					break;
				case "required":
					out = "muss das erforderliche Attribut " + e.params.missingProperty + " enthalten";
					break;
				case "type":
					out = "muss sein: " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "darf nicht mehr als " + n + " Element";
					if (n != 1) out += "e";
					out += " haben";
					break;
				case "unevaluatedProperties":
					out = "darf keine unausgewerteten Attribute haben";
					break;
				case "uniqueItems":
					out = "darf keine Duplikate enthalten (Elemente #" + e.params.j + " und #" + e.params.i + " sind gleich)";
					break;
				default: out = "muss die Validierung \"" + e.keyword + "\" bestehen";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/es/index.js
var require_es = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_es(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "no debe tener más de " + n + " elemento";
					if (n != 1) out += "s";
					break;
				case "additionalProperties":
					out = "no debe tener propiedades adicionales";
					break;
				case "anyOf":
					out = "debe coincidir con algún esquema en \"anyOf\"";
					break;
				case "const":
					out = "debe ser igual a la constante";
					break;
				case "contains":
					out = "debe contener un elemento válido";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "debe contener la";
					if (n != 1) out += "s";
					out += " propiedad";
					if (n != 1) out += "es";
					out += " " + e.params.deps + " cuando la propiedad " + e.params.property + " se encuentra presente";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "debe pasar la validación de palabra clave \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "deber ser igual a uno de los valores predefinidos";
					break;
				case "false schema":
					out = "el esquema és falso";
					break;
				case "format":
					out = "debe coincidir con el formato \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "debe ser " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "debe ser " + cond;
					break;
				case "if":
					out = "debe corresponderse con el esquema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "debe ser " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "no debe contener más de " + n + " elemento";
					if (n != 1) out += "s";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "no debe contener más de " + n + " caracter";
					if (n != 1) out += "es";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "no debe contener más de " + n + " propiedad";
					if (n != 1) out += "es";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "debe ser " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "no debe contener menos de " + n + " elemento";
					if (n != 1) out += "s";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "no debe contener menos de " + n + " caracter";
					if (n != 1) out += "es";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "no debe contener menos de " + n + " propiedad";
					if (n != 1) out += "es";
					break;
				case "multipleOf":
					out = "debe ser múltiplo de " + e.params.multipleOf;
					break;
				case "not":
					out = "no debe ser válido según el esquema en \"not\"";
					break;
				case "oneOf":
					out = "debe coincidir con un solo esquema en \"oneOf\"";
					break;
				case "pattern":
					out = "debe coincidir con el patron \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "la propiedad debe coincidir con el patrón \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "la propiedad no és válida";
					break;
				case "required":
					out = "debe tener la propiedad requerida " + e.params.missingProperty;
					break;
				case "type":
					out = "debe ser " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "no debe contener elementos duplicados, (los elementos ## " + e.params.j + " y " + e.params.i + " son idénticos)";
					break;
				default: out = "debe pasar la validación de palabra clave \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/fi/index.js
var require_fi = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_fi(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "saa sisältää enintään " + n;
					if (n == 1) out += ":n elementin";
					else out += " elementtiä";
					break;
				case "additionalProperties":
					out = "ei saa sisältää ylimääräisiä ominaisuuksia";
					break;
				case "anyOf":
					out = "täytyy vastata \"anyOf\" skeemaa";
					break;
				case "const":
					out = "täytyy olla yhtä kuin vakio";
					break;
				case "contains":
					out = "täytyy sisältää kelvollinen elementti";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "täytyy sisältää " + e.params.deps + " ominaisuu";
					if (n == 1) out += "s";
					else out += "det";
					out += " kun " + e.params.property + "-ominaisuus on läsnä";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tunniste \"" + e.params.tag + "\" täytyy olla merkkijono";
							break;
						case "mapping":
							out = "tunnisteen \"" + e.params.tag + "\" arvon muoto pitää olla oneOf";
							break;
						default: out = "täytyy läpäistä \"" + e.keyword + "\" avainsanatarkistus";
					}
					break;
				case "enum":
					out = "täytyy olla yhtä kuin jokin sallituista arvoista";
					break;
				case "false schema":
					out = "boolean skeema on väärä";
					break;
				case "format":
					out = "täytyy vastata muotoa \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "täytyy olla " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "täytyy olla " + cond;
					break;
				case "if":
					out = "täytyy vastata \"" + e.params.failingKeyword + "\" skeemaa";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "täytyy olla " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "tulee sisältää enintään " + n + " ";
					if (n == 1) out += "elementti";
					else out += "elementtiä";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "ei saa olla pidempi kuin " + n + " merkki";
					if (n != 1) out += "ä";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "tulee sisältää enintään " + n + " ";
					if (n == 1) out += "ominaisuus";
					else out += "ominaisuutta";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "täytyy olla " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "tulee sisältää vähintään " + n + " ";
					if (n == 1) out += "elementti";
					else out += "elementtiä";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "ei saa olla lyhyempi kuin " + n + " merkki";
					if (n != 1) out += "ä";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "tulee sisältää vähintään " + n + " ";
					if (n == 1) out += "ominaisuus";
					else out += "ominaisuutta";
					break;
				case "multipleOf":
					out = "täytyy olla moninkertainen: " + e.params.multipleOf;
					break;
				case "not":
					out = "ei saa olla hyväksytty skeeman \"not\" mukaan";
					break;
				case "oneOf":
					out = "täytyy vastata täsmälleen yhtä \"oneOf\" -kohdassa määriteltyä skeemaa";
					break;
				case "pattern":
					out = "täytyy vastata muotoa \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "täytyy sisältää ominaisuus joka vastaa kaavaa \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "ominaisuuden nimi on virheellinen";
					break;
				case "required":
					out = "täytyy sisältää vaadittu ominaisuus " + e.params.missingProperty;
					break;
				case "type":
					out = "";
					var t = e.params.type;
					out += "täytyy olla ";
					if (t == "number") out += "numero";
					else if (t == "integer") out += "kokonaisluku";
					else if (t == "string") out += "merkkijono";
					else if (t == "boolean") out += "boolean";
					else out += t;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "ei saa olla enemmän kuin " + n + " elementti";
					if (n != 1) out += "ä";
					break;
				case "unevaluatedProperties":
					out = "ei saa sisältää arvioimattomia ominaisuuksia";
					break;
				case "uniqueItems":
					out = "ei saa sisältää duplikaatteja (elementit ## " + e.params.j + " ja " + e.params.i + " ovat identtiset)";
					break;
				default: out = "täytyy läpäistä \"" + e.keyword + "\" avainsanatarkistus";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/fr/index.js
var require_fr = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_fr(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas contenir plus de " + n + " élémént";
					if (n != 1) out += "s";
					break;
				case "additionalProperties":
					out = "ne doit pas contenir de propriétés additionnelles";
					break;
				case "anyOf":
					out = "doit correspondre à un schéma de \"anyOf\"";
					break;
				case "const":
					out = "doit être égal à la constante";
					break;
				case "contains":
					out = "doit contenir un élément valide";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "doit avoir la propriété " + e.params.deps + " quand la propriété " + e.params.property + " est présente";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "doit être valide selon le critère \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "doit être égal à une des valeurs prédéfinies";
					break;
				case "false schema":
					out = "le schema est \"false\"";
					break;
				case "format":
					out = "doit correspondre au format \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "doit être " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "doit être " + cond;
					break;
				case "if":
					out = "doit correspondre au schéma \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "doit être " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas contenir plus de " + n + " élément";
					if (n != 1) out += "s";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas dépasser " + n + " caractère";
					if (n != 1) out += "s";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas contenir plus de " + n + " propriété";
					if (n != 1) out += "s";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "doit être " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas contenir moins de " + n + " élément";
					if (n != 1) out += "s";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas faire moins de " + n + " caractère";
					if (n != 1) out += "s";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "ne doit pas contenir moins de " + n + " propriété";
					if (n != 1) out += "s";
					break;
				case "multipleOf":
					out = "doit être un multiple de " + e.params.multipleOf;
					break;
				case "not":
					out = "est invalide selon le schéma \"not\"";
					break;
				case "oneOf":
					out = "doit correspondre à exactement un schéma de \"oneOf\"";
					break;
				case "pattern":
					out = "doit correspondre au format \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "la propriété doit correspondre au format \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "le nom de propriété est invalide";
					break;
				case "required":
					out = "requiert la propriété " + e.params.missingProperty;
					break;
				case "type":
					out = "doit être de type " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "ne doit pas contenir de doublons (les éléments ## " + e.params.j + " et " + e.params.i + " sont identiques)";
					break;
				default: out = "doit être valide selon le critère \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/hu/index.js
var require_hu = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_hu(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "nem lehet több, mint " + n + " eleme";
					break;
				case "additionalProperties":
					out = "nem lehetnek további elemei";
					break;
				case "anyOf":
					out = "meg kell feleljen legalább egy \"anyOf\" alaknak";
					break;
				case "const":
					out = "must be equal to constant";
					break;
				case "contains":
					out = "must contain a valid item";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "-nak kell legyen";
					if (n > 1) out += "ek";
					out += " a következő tulajdonsága";
					if (n != 1) out += "i";
					out += ": " + e.params.deps + ", ha van " + e.params.property + " tulajdonsága";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "must pass \"" + e.keyword + "\" keyword validation";
					}
					break;
				case "enum":
					out = "egyenlő kell legyen valamely előre meghatározott értékkel";
					break;
				case "false schema":
					out = "boolean schema is false";
					break;
				case "format":
					out = "meg kell feleljen a következő formátumnak: \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "kell legyen " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "nem lehet több, mint " + n + " eleme";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "nem lehet hosszabb, mint " + n + " szimbólum";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "nem lehet több, mint " + n + " tulajdonsága";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "kell legyen " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "nem lehet kevesebb, mint " + n + " eleme";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "nem lehet rövidebb, mint " + n + " szimbólum";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "nem lehet kevesebb, mint " + n + " tulajdonsága";
					break;
				case "multipleOf":
					out = "a többszöröse kell legyen a következő számnak: " + e.params.multipleOf;
					break;
				case "not":
					out = "nem lehet érvényes a \"not\" alaknak megfelelően";
					break;
				case "oneOf":
					out = "meg kell feleljen pontosan egy \"oneOf\" alaknak";
					break;
				case "pattern":
					out = "meg kell feleljen a következő mintának: \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "must have property matching pattern \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "property name is invalid";
					break;
				case "required":
					out = "kell legyen " + e.params.missingProperty + " tulajdonsága";
					break;
				case "type":
					out = "" + e.params.type + " kell legyen";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "nem lehetnek azonos elemei (" + e.params.j + " és " + e.params.i + " elemek azonosak)";
					break;
				default: out = "must pass \"" + e.keyword + "\" keyword validation";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/id/index.js
var require_id = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_id(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh memiliki lebih dari " + n + " item";
					break;
				case "additionalProperties":
					out = "tidak boleh memiliki properti tambahan";
					break;
				case "anyOf":
					out = "harus cocok dengan beberapa skema pada \"anyOf\"";
					break;
				case "const":
					out = "harus sama dengan konstan";
					break;
				case "contains":
					out = "harus berisi item yang valid";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += " harus memiliki properti " + e.params.deps + " ketika properti " + e.params.property + " hadir";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "harus lulus validasi kata kunci \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "harus sama dengan salah satu dari nilai yang telah ditentukan";
					break;
				case "false schema":
					out = "skema boolean salah";
					break;
				case "format":
					out = "harus cocok dengan format \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "harus " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "harus " + cond;
					break;
				case "if":
					out = "harus cocok dengan skema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "harus " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh memiliki lebih dari " + n + " item";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh lebih dari " + n + " karakter";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh memiliki lebih dari " + n + " properti";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "harus " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh kurang dari " + n + " item";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh lebih pendek dari " + n + " karakter";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += " tidak boleh kurang dari " + n + " properti";
					break;
				case "multipleOf":
					out = "harus merupakan kelipatan dari " + e.params.multipleOf;
					break;
				case "not":
					out = "tidak boleh valid sesuai dengan skema pada \"not\"";
					break;
				case "oneOf":
					out = "harus sama persis dengan satu skema pada \"oneOf\"";
					break;
				case "pattern":
					out = "harus cocok dengan pola \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "harus memiliki pola pencocokan properti \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "nama properti tidak valid";
					break;
				case "required":
					out = "harus memiliki properti " + e.params.missingProperty;
					break;
				case "type":
					out = "harus berupa " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "tidak boleh memiliki item duplikat (item ## " + e.params.j + " dan " + e.params.i + " identik)";
					break;
				default: out = "harus lulus validasi kata kunci \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/it/index.js
var require_it = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_it(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "non dovrebbe avere più di " + n + " element";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "additionalProperties":
					out = "non deve avere attributi aggiuntivi";
					break;
				case "anyOf":
					out = "deve corrispondere ad uno degli schema in \"anyOf\"";
					break;
				case "const":
					out = "deve essere uguale alla costante";
					break;
				case "contains":
					out = "deve contentere un elemento valido";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "dovrebbe avere ";
					if (n == 1) out += "l'";
					else out += "gli ";
					out += "attribut";
					if (n == 1) out += "o";
					else out += "i";
					out += " " + e.params.deps + " quando l'attributo " + e.params.property + " è presente";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "il tag \"" + e.params.tag + "\" deve essere di tipo stringa";
							break;
						case "mapping":
							out = "il valore del tag \"" + e.params.tag + "\" deve essere nei oneOf";
							break;
						default: out = "deve essere valido secondo il criterio \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "deve essere uguale ad uno dei valori consentiti";
					break;
				case "false schema":
					out = "lo schema booleano è falso";
					break;
				case "format":
					out = "deve corrispondere al formato \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve essere " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve essere " + cond;
					break;
				case "if":
					out = "deve corrispondere allo schema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve essere " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "non deve avere più di " + n + " element";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "non deve essere più lungo di " + n + " caratter";
					if (n == 1) out += "e";
					else out += "i";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "non deve avere più di " + n + " attribut";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve essere " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "non deve avere meno di " + n + " element";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "non deve essere meno lungo di " + n + " caratter";
					if (n == 1) out += "e";
					else out += "i";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "non deve avere meno di " + n + " attribut";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "multipleOf":
					out = "deve essere un multiplo di " + e.params.multipleOf;
					break;
				case "not":
					out = "non deve essere valido in base allo schema di \"non\"";
					break;
				case "oneOf":
					out = "deve corrispondere esattamente ad uno degli schema in \"oneOf\"";
					break;
				case "pattern":
					out = "deve corrispondere al formato \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "deve avere un attributo che corrisponda al formato \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "il nome dell'attritbuto non è valido";
					break;
				case "required":
					out = "deve avere l'attributo obbligatorio " + e.params.missingProperty;
					break;
				case "type":
					out = "deve essere di tipo " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "non deve avere più di " + n + " elementi";
					if (n == 1) out += "o";
					else out += "i";
					break;
				case "unevaluatedProperties":
					out = "non deve avere attributi non valutati";
					break;
				case "uniqueItems":
					out = "non deve avere duplicati (gli elementi ## " + e.params.j + " e " + e.params.i + " sono uguali)";
					break;
				default: out = "deve essere valido secondo il criterio \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/ja/index.js
var require_ja = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_ja(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "以上あってはいけない";
					break;
				case "additionalProperties":
					out = "追加してはいけない";
					break;
				case "anyOf":
					out = "\"anyOf\"のスキーマとマッチしなくてはいけない";
					break;
				case "const":
					out = "must be equal to constant";
					break;
				case "contains":
					out = "must contain a valid item";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "" + e.params.property + "がある場合、";
					var n = e.params.depsCount;
					out += "は" + e.params.deps + "をつけなければいけない";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "must pass \"" + e.keyword + "\" keyword validation";
					}
					break;
				case "enum":
					out = "事前に定義された値のいずれかに等しくなければいけない";
					break;
				case "false schema":
					out = "boolean schema is false";
					break;
				case "format":
					out = "\"" + e.params.format + "\"形式に揃えなければいけない";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "must be " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += cond + "でなければいけない";
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "個以上であってはいけない";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "文字以上であってはいけない";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "個以上のプロパティを有してはいけない";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += cond + "でなければいけない";
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "個以下であってはいけない";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "文字以下であってはいけない";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "は" + n + "個以下のプロパティを有してはいけない";
					break;
				case "multipleOf":
					out = "" + e.params.multipleOf + "の倍数でなければいけない";
					break;
				case "not":
					out = "\"not\"のスキーマに従って有効としてはいけない";
					break;
				case "oneOf":
					out = "\"oneOf\"のスキーマと完全に一致しなくてはいけない";
					break;
				case "pattern":
					out = "\"" + e.params.pattern + "\"のパターンと一致しなければいけない";
					break;
				case "patternRequired":
					out = "must have property matching pattern \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "property name is invalid";
					break;
				case "required":
					out = "必要なプロパティ" + e.params.missingProperty + "がなければいけない";
					break;
				case "type":
					out = "" + e.params.type + "でなければいけない";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "重複するアイテムがあってはいけない（" + e.params.j + "と" + e.params.i + "は同じである）";
					break;
				default: out = "must pass \"" + e.keyword + "\" keyword validation";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/ko/index.js
var require_ko = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_ko(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += " 항목은 아이템을 " + n + "개 이상 가질 수 없습니다";
					break;
				case "additionalProperties":
					out = "추가적인 속성은 허용되지 않습니다";
					break;
				case "anyOf":
					out = "\"anyOf\"의 스키마와 일치해야 합니다";
					break;
				case "const":
					out = "상수와 같아야합니다";
					break;
				case "contains":
					out = "올바른 아이템을 포함해야 합니다";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += e.params.property + "속성이 있는 경우, " + e.params.deps + " 속성이 있어야합니다";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "\"" + e.params.tag + "\"태그는 반드시 문자열이여야 합니다";
							break;
						case "mapping":
							out = "\"" + e.params.tag + "\"태그의 값은 반드시 oneOf에 있어야 합니다";
							break;
						default: out = "\"" + e.keyword + "\"키워드 검사를 통과해야 합니다";
					}
					break;
				case "enum":
					out = "미리 정의된 값중 하나여야 합니다";
					break;
				case "false schema":
					out = "boolean 스키마는 올바르지 않습니다";
					break;
				case "format":
					out = "\"" + e.params.format + "\" 포맷과 일치해야 합니다";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " " + cond + " 이여야 합니다";
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " " + cond + " 이여야 합니다";
					break;
				case "if":
					out = "\"" + e.params.failingKeyword + "\" 스키마와 일치해야 합니다";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " " + cond + " 이여야 합니다";
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "아이템이 최대 " + n + "개이여야 합니다";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "최대 " + n + "글자여야 합니다";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "속성은 최대 " + n + "개 이내여야 합니다";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += " " + cond + " 이여야 합니다";
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "아이템이 최소 " + n + "개이여야 합니다";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "최소 " + n + "글자여야 합니다";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "속성은 최소 " + n + "개 이상이여야 합니다";
					break;
				case "multipleOf":
					out = "" + e.params.multipleOf + "의 배수여야 합니다";
					break;
				case "not":
					out = "\"not\"스키마에 따라 유효하지 않아야 합니다";
					break;
				case "oneOf":
					out = "\"oneOf\" 스키마중 하나와 정확하게 일치해야 합니다";
					break;
				case "pattern":
					out = "\"" + e.params.pattern + "\"패턴과 일치해야 합니다";
					break;
				case "patternRequired":
					out = "\"" + e.params.missingPattern + "\"패턴과 일치하는 속성을 가져야 합니다";
					break;
				case "propertyNames":
					out = "속성명이 올바르지 않습니다";
					break;
				case "required":
					out = "" + e.params.missingProperty + " 속성은 필수입니다";
					break;
				case "type":
					out = "" + e.params.type + "이여야 합니다";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "항목이 " + n + "개 아이템을 초과하면 안됩니다";
					break;
				case "unevaluatedProperties":
					out = "평가되지 않은 속성이 없어야합니다.";
					break;
				case "uniqueItems":
					out = "중복 아이템이 없어야 합니다 (아이템" + e.params.j + "과 아이템" + e.params.i + "가 동일합니다)";
					break;
				default: out = "\"" + e.keyword + "\"키워드 검사를 통과해야 합니다";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/nb/index.js
var require_nb = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_nb(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "kan ikke ha mer enn " + n + " element";
					if (n != 1) out += "er";
					break;
				case "additionalProperties":
					out = "kan ikke ha flere egenskaper";
					break;
				case "anyOf":
					out = "må samsvare med et schema i \"anyOf\"";
					break;
				case "const":
					out = "må være lik konstanten";
					break;
				case "contains":
					out = "må inneholde et gyldig element";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "må ha egenskapen";
					if (n != 1) out += "e";
					out += " " + e.params.deps + " når egenskapen " + e.params.property + " er angitt";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "må samsvare med valideringen for " + e.keyword;
					}
					break;
				case "enum":
					out = "må være lik en av de forhåndsdefinerte verdiene";
					break;
				case "false schema":
					out = "boolsk schema er usannt";
					break;
				case "format":
					out = "må stemme overens med formatet \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "må være " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "må være " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "må være " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "kan ikke ha fler enn " + n + " element";
					if (n != 1) out += "er";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "kan ikke være lengre enn " + n + " tegn";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "kan ikke ha mer enn " + n + " egenskap";
					if (n != 1) out += "er";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "må være " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "kan ikke ha færre enn " + n + " element";
					if (n != 1) out += "er";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "kan ikke være kortere enn " + n + " tegn";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "kan ikke ha mindre enn " + n + " egenskap";
					if (n != 1) out += "er";
					break;
				case "multipleOf":
					out = "må være et multiplum av " + e.params.multipleOf;
					break;
				case "not":
					out = "kan ikke samsvare med schema i \"not\"";
					break;
				case "oneOf":
					out = "må samsvare med nøyaktig ett schema i \"oneOf\"";
					break;
				case "pattern":
					out = "må samsvare med mønsteret \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "må ha en egenskap som samsvarer med mønsteret \"" + e.params.missingPattern;
					break;
				case "propertyNames":
					out = "egenskapen med navnet '";
					e.params.propertyNameout += "' er ugyldig";
					break;
				case "required":
					out = "må ha den påkrevde egenskapen " + e.params.missingProperty;
					break;
				case "type":
					out = "";
					var t = e.params.type;
					out += "må være ";
					if (t == "number") out += "et tall";
					else if (t == "integer") out += "et heltall";
					else if (t == "string") out += "en streng";
					else if (t == "boolean") out += "ja eller nei";
					else out += t;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "kan ikke ha duplikate elemeneter (elementene ## " + e.params.j + " og " + e.params.i + " er identiske)";
					break;
				default: out = "må samsvare med valideringen for " + e.keyword;
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/nl/index.js
var require_nl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_nl(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "mag niet meer dan " + n + " item";
					if (n != 1) out += "s";
					out += " bevatten";
					break;
				case "additionalProperties":
					out = "mag geen extra eigenschappen bevatten";
					break;
				case "anyOf":
					out = "moet overeenkomen met een schema in \"anyOf\"";
					break;
				case "const":
					out = "moet gelijk zijn aan constante";
					break;
				case "contains":
					out = "moet een geldig item bevatten";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "moet de eigenschap";
					if (n != 1) out += "pen";
					out += " " + e.params.deps + " bevatten als " + e.params.property + " is gedefinieerd";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" moet een tekenreeks zijn";
							break;
						case "mapping":
							out = "de waarde van het veld \"" + e.params.tag + "\" moet voorkomen in de oneOf";
							break;
						default: out = "moet sleutelwoord validatie \"" + e.keyword + "\" doorstaan";
					}
					break;
				case "enum":
					out = "moet overeenkomen met één van de voorgedefinieerde waarden";
					break;
				case "false schema":
					out = "boolean schema is fout";
					break;
				case "format":
					out = "moet overeenkomen met het volgende formaat: \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "moet " + cond + " zijn";
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "moet " + cond + " zijn";
					break;
				case "if":
					out = "moet overeenkomen met \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "moet " + cond + " zijn";
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "mag niet meer dan " + n + " item";
					if (n != 1) out += "s";
					out += " bevatten";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "mag niet langer dan " + n + " karakter";
					if (n != 1) out += "s";
					out += " zijn";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "mag niet meer dan " + n + " eigenschap";
					if (n != 1) out += "pen";
					out += " bevatten";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "moet " + cond + " zijn";
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "mag niet minder dan " + n + " item";
					if (n != 1) out += "s";
					out += " bevatten";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "mag niet korter dan " + n + " karakter";
					if (n != 1) out += "s";
					out += " zijn";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "mag niet minder dan " + n + " eigenschap";
					if (n != 1) out += "pen";
					out += " bevatten";
					break;
				case "multipleOf":
					out = "moet een veelvoud van " + e.params.multipleOf + " zijn";
					break;
				case "not":
					out = "mag niet overeenkomen met een schema in \"not\"";
					break;
				case "oneOf":
					out = "moet overeenkomen met één schema in \"oneOf\"";
					break;
				case "pattern":
					out = "moet overeenkomen met het volgende patroon: \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "moet een eigenschap bevatten die overeenkomt met het pattroon: \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "eigenschapnaam is ongeldig";
					break;
				case "required":
					out = "moet de eigenschap " + e.params.missingProperty + " bevatten";
					break;
				case "type":
					out = "";
					var t = e.params.type;
					out += "moet een ";
					if (t == "number") out += "nummer";
					else if (t == "integer") out += "geheel getal";
					else if (t == "string") out += "tekenreeks";
					else if (t == "boolean") out += "ja of nee waarde";
					out += " (" + t + ") bevatten";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "mag niet meer dan " + n + " item";
					if (n != 1) out += "s";
					out += " bevatten";
					break;
				case "unevaluatedProperties":
					out = "mag geen ongecontroleerde eigenschappen bevatten";
					break;
				case "uniqueItems":
					out = "mag geen gedupliceerde items bevatten (items ## " + e.params.j + " en " + e.params.i + " zijn identiek)";
					break;
				default: out = "moet sleutelwoord validatie \"" + e.keyword + "\" doorstaan";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/pl/index.js
var require_pl = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_pl(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "nie powinien mieć więcej niż " + n + " element";
					if (n == 1) out += "u";
					else out += "ów";
					break;
				case "additionalProperties":
					out = "nie powinien zawierać dodatkowych pól";
					break;
				case "anyOf":
					out = "powinien pasować do wzoru z sekcji \"anyOf\"";
					break;
				case "const":
					out = "powinien być równy stałej";
					break;
				case "contains":
					out = "must contain a valid item";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "powinien zawierać pol";
					if (n == 1) out += "e";
					else out += "a";
					out += " " + e.params.deps + " kiedy pole " + e.params.property + " jest obecne";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "powinien przejść walidację \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "powinien być równy jednej z predefiniowanych wartości";
					break;
				case "false schema":
					out = "boolean schema is false";
					break;
				case "format":
					out = "powinien zgadzać się z formatem \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "powinien być " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "powinien być " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "powinien być " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "nie powinien mieć więcej niż " + n + " element";
					if (n == 1) out += "u";
					else out += "ów";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "nie powinien być dłuższy niż " + n + " znak";
					if (n != 1) out += "ów";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "nie powinien zawierać więcej niż " + n + " ";
					if (n == 1) out += "pole";
					else out += "pól";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "powinien być " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "nie powinien mieć mniej niż " + n + " element";
					if (n == 1) out += "u";
					else out += "ów";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "nie powinien być krótszy niż " + n + " znak";
					if (n != 1) out += "ów";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "nie powinien zawierać mniej niż " + n + " ";
					if (n == 1) out += "pole";
					else out += "pól";
					break;
				case "multipleOf":
					out = "powinien być wielokrotnością " + e.params.multipleOf;
					break;
				case "not":
					out = "nie powinien pasować do wzoru z sekcji \"not\"";
					break;
				case "oneOf":
					out = "powinien pasować do jednego wzoru z sekcji \"oneOf\"";
					break;
				case "pattern":
					out = "powinien zgadzać się ze wzorem \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "powinien mieć pole pasujące do wzorca \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "property name is invalid";
					break;
				case "required":
					out = "powinien zawierać wymagane pole " + e.params.missingProperty;
					break;
				case "type":
					out = "powinien być " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "nie powinien zawierać elementów które się powtarzają (elementy " + e.params.j + " i " + e.params.i + " są identyczne)";
					break;
				default: out = "powinien przejść walidację \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/pt-BR/index.js
var require_pt_BR = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_pt_BR(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "não são permitidos itens adicionais (mais do que " + n + ")";
					break;
				case "additionalProperties":
					out = "não são permitidas propriedades adicionais";
					break;
				case "anyOf":
					out = "os dados não correspondem a nenhum schema de \"anyOf\"";
					break;
				case "const":
					out = "deve ser igual à constante";
					break;
				case "contains":
					out = "deve conter um item válido";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += " deve ter propriedade";
					if (n != 1) out += "s";
					out += " " + e.params.deps + " quando a propriedade " + e.params.property + " estiver presente";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "a tag \"" + e.params.tag + "\" deve ser uma string";
							break;
						case "mapping":
							out = "o valor da tag \"" + e.params.tag + "\" deve estar no oneOf";
							break;
						default: out = "deve passar a validação da keyword \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "deve ser igual a um dos valores permitidos";
					break;
				case "false schema":
					out = "o schema booleano é \"false\"";
					break;
				case "format":
					out = "deve corresponder ao formato \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve ser " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve ser " + cond;
					break;
				case "if":
					out = "deve corresponder ao schema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve ser " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "não deve ter mais que " + n + " elemento";
					if (n != 1) out += "s";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "não deve ser maior que " + n + " caracter";
					if (n != 1) out += "es";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "não deve ter mais que " + n + " propriedade";
					if (n != 1) out += "s";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "deve ser " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "não deve ter menos que " + n + " elemento";
					if (n != 1) out += "s";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "não deve ser mais curta que " + n + " caracter";
					if (n != 1) out += "es";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "não deve ter menos que " + n + " propriedade";
					if (n != 1) out += "s";
					break;
				case "multipleOf":
					out = "deve ser múltiplo de " + e.params.multipleOf;
					break;
				case "not":
					out = "não deve ser valido segundo o schema em \"not\"";
					break;
				case "oneOf":
					out = "deve corresponder exatamente com um schema em \"oneOf\"";
					break;
				case "pattern":
					out = "deve corresponder ao padrão \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "deve ter a propriedade correspondente ao padrão \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "o nome da propriedade é inválido";
					break;
				case "required":
					out = "deve ter a propriedade obrigatória " + e.params.missingProperty;
					break;
				case "type":
					out = "";
					var t = e.params.type;
					out += "deve ser ";
					if (t == "number") out += "um número";
					else if (t == "integer") out += "um número inteiro";
					else if (t == "string") out += "um texto";
					else if (t == "boolean") out += "um booleano";
					else out += t;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "não pode possuir mais que " + n + " ";
					if (n == 1) out += "item";
					else out += "itens";
					break;
				case "unevaluatedProperties":
					out = "não pode possuir propridades não avaliadas";
					break;
				case "uniqueItems":
					out = "não deve ter itens duplicados (os itens ## " + e.params.j + " e " + e.params.i + " são idênticos)";
					break;
				default: out = "deve passar a validação da keyword \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/ru/index.js
var require_ru = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_ru(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "должно иметь не более, чем " + n + " элемент";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "additionalProperties":
					out = "не должно иметь дополнительных полей";
					break;
				case "anyOf":
					out = "должно соответствовать одной их схем в \"anyOf\"";
					break;
				case "const":
					out = "должно быть равно заданному значению";
					break;
				case "contains":
					out = "должно содержать значение соответствующее схеме";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "должно иметь пол";
					if (n == 1) out += "е";
					else out += "я";
					out += " " + e.params.deps + ", когда присутствует поле " + e.params.property;
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "поле \"" + e.params.tag + "\" должно быть строкой";
							break;
						case "mapping":
							out = "значение поля \"" + e.params.tag + "\" должно быть в одной из oneOf схем ";
							break;
						default: out = "должно соответствовать правилу \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "должно быть равно одному из разрешенных значений";
					break;
				case "false schema":
					out = "схема равна false";
					break;
				case "format":
					out = "должно соответствовать формату \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "должно быть " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "должно быть " + cond;
					break;
				case "if":
					out = "должно соответствовать схемe \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "должно быть " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "должно иметь не более, чем " + n + " элемент";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "должно быть не длиннее, чем " + n + " символ";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "должно иметь не более, чем " + n + " пол";
					if (n == 1) out += "е";
					else if (n >= 2 && n <= 4) out += "я";
					else out += "ей";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "должно быть " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "должно иметь не менее, чем " + n + " элемент";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "должно быть не короче, чем " + n + " символ";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "должно иметь не менее, чем " + n + " пол";
					if (n == 1) out += "е";
					else if (n >= 2 && n <= 4) out += "я";
					else out += "ей";
					break;
				case "multipleOf":
					out = "должно быть кратным " + e.params.multipleOf;
					break;
				case "not":
					out = "должно не соответствовать схеме в \"not\"";
					break;
				case "oneOf":
					out = "должно соответствовать в точности одной схемe в \"oneOf\"";
					break;
				case "pattern":
					out = "должно соответствовать образцу \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "должно иметь поле, соответствующее образцу \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "имя поля не соответствует схеме";
					break;
				case "required":
					out = "должно иметь обязательное поле " + e.params.missingProperty;
					break;
				case "type":
					out = "должно быть " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "должно иметь не более, чем " + n + " элемент";
					if (n >= 2 && n <= 4) out += "а";
					else if (n != 1) out += "ов";
					break;
				case "unevaluatedProperties":
					out = "не должно иметь непроверенных полей";
					break;
				case "uniqueItems":
					out = "не должно иметь повторяющихся элементов (элементы " + e.params.j + " и " + e.params.i + " идентичны)";
					break;
				default: out = "должно соответствовать правилу \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/sk/index.js
var require_sk = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_sk(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "nemôže obsahovať viac, než " + n + " prv";
					if (n == 1) out += "ok";
					else out += "kov";
					break;
				case "additionalProperties":
					out = "nemôže obsahovať ďalšie položky";
					break;
				case "anyOf":
					out = "musí splňovať aspoň jednu zo schém v \"anyOf\"";
					break;
				case "const":
					out = "musí byť konštanta";
					break;
				case "contains":
					out = "musí obsahovať prvok zodpovedajúci schéme";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += " musí obsahovať polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "iek";
					else out += "ka";
					out += ": " + e.params.deps + ", ak obsahuje " + e.params.property;
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "musí splniť \"" + e.keyword + "\" validáciu";
					}
					break;
				case "enum":
					out = "musí byť jedna z definovaných hodnôt";
					break;
				case "false schema":
					out = "schéma je false";
					break;
				case "format":
					out = "musí obsahovať formát \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí byť " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí byť " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí byť " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "nesmie obsahovať viac než " + n + " prv";
					if (n == 1) out += "ok";
					else out += "kov";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "nesmie byť dlhší než " + n + " znak";
					if (n != 1) out += "ov";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "nesmie obsahovať viac než " + n + " polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "iek";
					else out += "ka";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "musí byť " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "nesmie obsahovať menej než " + n + " prv";
					if (n == 1) out += "ok";
					else out += "kov";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "nesmie byť kratší než " + n + " znak";
					if (n != 1) out += "ov";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "nesmie obsahovať menej než " + n + " polož";
					if (n >= 2 && n <= 4) out += "ky";
					else if (n != 1) out += "iek";
					else out += "ka";
					break;
				case "multipleOf":
					out = "musí byť násobkom " + e.params.multipleOf;
					break;
				case "not":
					out = "nesmie splňovať schému v \"not\"";
					break;
				case "oneOf":
					out = "musí splňovať práve jednu schému v \"oneOf\"";
					break;
				case "pattern":
					out = "musí splňovať regulárny výraz \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "musí obsahovať položku splňjúcu regulárny výraz \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "názov položky nezodpovedá schéme";
					break;
				case "required":
					out = "musí obsahovať požadovanú položku " + e.params.missingProperty;
					break;
				case "type":
					out = "musí byť " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "nesmie obsahovať duplicitné prvky (prvky ## " + e.params.j + " a " + e.params.i + " sú rovnaké)";
					break;
				default: out = "musí splniť \"" + e.keyword + "\" validáciu";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/sv/index.js
var require_sv = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_sv(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "borde ha fler än " + n + " sak";
					if (n != 1) out += "er";
					break;
				case "additionalProperties":
					out = "borde inte ha fler egenskaper";
					break;
				case "anyOf":
					out = "borde matcha något schema i \"anyOf\"";
					break;
				case "const":
					out = "bör vara en konstant";
					break;
				case "contains":
					out = "bör innehålla ett giltigt objekt";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "borde ha egenskap";
					if (n != 1) out += "er";
					out += " " + e.params.deps + " när egenskap " + e.params.property + " finns tillgängligt";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" must be string";
							break;
						case "mapping":
							out = "value of tag \"" + e.params.tag + "\" must be in oneOf";
							break;
						default: out = "bör passera \"" + e.keyword + "\" nyckelord validering";
					}
					break;
				case "enum":
					out = "borde vara ekvivalent med en av dess fördefinierade värden";
					break;
				case "false schema":
					out = "boolean schema är falskt";
					break;
				case "format":
					out = "borde matcha formatet \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "bör vara " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "bör vara " + cond;
					break;
				case "if":
					out = "must match \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "borde vara " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "borde inte ha fler än " + n + " sak";
					if (n != 1) out += "er";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "borde inte vara längre än " + n + " tecken";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "borde inte ha fler än " + n + " egenskap";
					if (n != 1) out += "er";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "borde vara " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "borde inte ha färre än " + n + " sak";
					if (n != 1) out += "er";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "borde inte vara kortare än " + n + " tecken";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "borde inte ha färre än " + n + " egenskap";
					if (n != 1) out += "er";
					break;
				case "multipleOf":
					out = "borde vara en multipel av " + e.params.multipleOf;
					break;
				case "not":
					out = "borde inte vara giltigt enligt schema i \"not\"";
					break;
				case "oneOf":
					out = "borde matcha exakt ett schema i \"oneOf\"";
					break;
				case "pattern":
					out = "borde matcha mönstret \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "bör ha en egenskap som matchar mönstret \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "egenskap med namnet är inte giltig";
					break;
				case "required":
					out = "borde ha den nödvändiga egenskapen " + e.params.missingProperty;
					break;
				case "type":
					out = "borde vara " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "must NOT have more than " + n + " item";
					if (n != 1) out += "s";
					break;
				case "unevaluatedProperties":
					out = "must NOT have unevaluated properties";
					break;
				case "uniqueItems":
					out = "borde inte ha duplicerade saker (sakerna ## " + e.params.j + " och " + e.params.i + " är identiska)";
					break;
				default: out = "bör passera \"" + e.keyword + "\" nyckelord validering";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/th/index.js
var require_th = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_th(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "ต้องมีสมาชิกไม่เกิน " + n + " ตัว";
					break;
				case "additionalProperties":
					out = "ต้องไม่มี property อื่นๆ นอกเหนีอจากที่กำหนดไว้";
					break;
				case "anyOf":
					out = "ต้องตรงกับหนึ่งใน schema ที่กำหนดไว้ใน \"anyOf\"";
					break;
				case "const":
					out = "ต้องเท่ากับค่าคงที่";
					break;
				case "contains":
					out = "ต้องมีสมาชิกที่ผ่านเงื่อนไขอยู่";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "เมื่อมี property " + e.params.property + " แล้วจะต้องมี property " + e.params.deps + " ด้วย";
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "tag \"" + e.params.tag + "\" ต้องเป็น string";
							break;
						case "mapping":
							out = "ต้องมีค่าของ tag \"" + e.params.tag + "\" ใน oneOf";
							break;
						default: out = "ต้องผ่านคีย์เวิร์ด \"" + e.keyword + "\"";
					}
					break;
				case "enum":
					out = "ต้องตรงกับหนึ่งในค่าที่กำหนดไว้";
					break;
				case "false schema":
					out = "schema เป็น false";
					break;
				case "format":
					out = "ต้องเป็นรูปแบบ \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ต้อง " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ต้อง " + cond;
					break;
				case "if":
					out = "ต้องตรงกับ schema \"" + e.params.failingKeyword + "\"";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ต้อง " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "ต้องมีสมาชิกไม่เกิน " + n;
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "ต้องยาวไม่เกิน " + n + " ตัวอักษร";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "ต้องมี property ไม่เกิน " + n + " ตัว";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "ต้อง " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "ควรมีสมาชิกไม่น้อยกว่า " + n;
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "ต้องมีอย่างน้อย " + n + " ตัวอักษร";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "ต้องมี property อย่างน้อย " + n + " ตัว";
					break;
				case "multipleOf":
					out = "ต้องเป็นเลขที่หาร " + e.params.multipleOf + " ลงตัว";
					break;
				case "not":
					out = "ต้องไม่ผ่าน schema ที่กำหนดไว้ใน \"not\"";
					break;
				case "oneOf":
					out = "ต้องตรงกับ schema ตัวเดียวใน \"oneOf\" เท่านั้น";
					break;
				case "pattern":
					out = "ต้องตรงตาม pattern \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "ต้องมี property ที่มีชื่อตรงตาม pattern \"" + e.params.missingPattern + "\"";
					break;
				case "propertyNames":
					out = "ชื่อ property ไม่ถูกต้อง";
					break;
				case "required":
					out = "ต้องมี property " + e.params.missingProperty + " ด้วย";
					break;
				case "type":
					out = "ต้องเป็น " + e.params.type;
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += "ต้องมีไม่เกิน " + n + " ตัว";
					break;
				case "unevaluatedProperties":
					out = "ต้องไม่มี property ที่ยังไม่ได้ผ่านการตรวจสอบเงื่อนไขใดๆ";
					break;
				case "uniqueItems":
					out = "ต้องมีสมาชิกไม่ซ้ำักัน (ลำดับที่ " + e.params.j + " กับ " + e.params.i + " ซ้ำกัน)";
					break;
				default: out = "ต้องผ่านคีย์เวิร์ด \"" + e.keyword + "\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/zh/index.js
var require_zh = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_zh(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "不允许超过" + n + "个元素";
					break;
				case "additionalProperties":
					out = "不允许有额外的属性";
					break;
				case "anyOf":
					out = "数据应为 anyOf 所指定的其中一个";
					break;
				case "const":
					out = "应当等于常量";
					break;
				case "contains":
					out = "应当包含一个有效项";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "应当拥有属性" + e.params.property + "的依赖属性" + e.params.deps;
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "标签 \"" + e.params.tag + "\" 的类型必须为字符串";
							break;
						case "mapping":
							out = "标签 \"" + e.params.tag + "\" 的值必须在 oneOf 之中";
							break;
						default: out = "应当通过 \"" + e.keyword + " 关键词校验\"";
					}
					break;
				case "enum":
					out = "应当是预设定的枚举值之一";
					break;
				case "false schema":
					out = "布尔模式出错";
					break;
				case "format":
					out = "应当匹配格式 \"" + e.params.format + "\"";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "应当是 " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "应当是 " + cond;
					break;
				case "if":
					out = "应当匹配模式 \"" + e.params.failingKeyword + "\" ";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "应当为 " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "不应多于 " + n + " 个项";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "不应多于 " + n + " 个字符";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "不应有多于 " + n + " 个属性";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "应当为 " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "不应少于 " + n + " 个项";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "不应少于 " + n + " 个字符";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "不应有少于 " + n + " 个属性";
					break;
				case "multipleOf":
					out = "应当是 " + e.params.multipleOf + " 的整数倍";
					break;
				case "not":
					out = "不应当匹配 \"not\" schema";
					break;
				case "oneOf":
					out = "只能匹配一个 \"oneOf\" 中的 schema";
					break;
				case "pattern":
					out = "应当匹配模式 \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "应当有属性匹配模式 " + e.params.missingPattern;
					break;
				case "propertyNames":
					out = "属性名 无效";
					break;
				case "required":
					out = "应当有必需属性 " + e.params.missingProperty;
					break;
				case "type":
					out = "应当是 " + e.params.type + " 类型";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += " 不允许有超过 " + n + " 个元素";
					break;
				case "unevaluatedProperties":
					out = "不允许存在未求值的属性";
					break;
				case "uniqueItems":
					out = "不应当含有重复项 (第 " + e.params.j + " 项与第 " + e.params.i + " 项是重复的)";
					break;
				default: out = "应当通过 \"" + e.keyword + " 关键词校验\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/zh-TW/index.js
var require_zh_TW = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function localize_zh_TW(errors) {
		if (!(errors && errors.length)) return;
		for (const e of errors) {
			let out;
			switch (e.keyword) {
				case "additionalItems":
				case "items":
					out = "";
					var n = e.params.limit;
					out += "不可以超過" + n + "個元素";
					break;
				case "additionalProperties":
					out = "不可以有額外的屬性";
					break;
				case "anyOf":
					out = "不符合 anyOf 指定的模式";
					break;
				case "const":
					out = "應該等於常數";
					break;
				case "contains":
					out = "應該包含一個有效元素";
					break;
				case "dependencies":
				case "dependentRequired":
					out = "";
					var n = e.params.depsCount;
					out += "應該要有屬性" + e.params.property + "的依賴屬性" + e.params.deps;
					break;
				case "discriminator":
					switch (e.params.error) {
						case "tag":
							out = "標籤 \"" + e.params.tag + "\" 的類型必須是字串";
							break;
						case "mapping":
							out = "標籤 \"" + e.params.tag + "\" 必須在 oneOf 其中之一";
							break;
						default: out = "應該通過 \"" + e.keyword + " 關鍵詞檢驗\"";
					}
					break;
				case "enum":
					out = "應該要在預設的值之中";
					break;
				case "false schema":
					out = "布林模式不正確";
					break;
				case "format":
					out = "應該要符合" + e.params.format + "格式";
					break;
				case "formatMaximum":
				case "formatExclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "應該是 " + cond;
					break;
				case "formatMinimum":
				case "formatExclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "應該是 " + cond;
					break;
				case "if":
					out = "應該符合 \"" + e.params.failingKeyword + "\" schema";
					break;
				case "maximum":
				case "exclusiveMaximum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "應該要 " + cond;
					break;
				case "maxItems":
					out = "";
					var n = e.params.limit;
					out += "不應該多於 " + n + " 個";
					break;
				case "maxLength":
					out = "";
					var n = e.params.limit;
					out += "不應該多於 " + n + " 個字元";
					break;
				case "maxProperties":
					out = "";
					var n = e.params.limit;
					out += "不應該多於 " + n + " 個屬性";
					break;
				case "minimum":
				case "exclusiveMinimum":
					out = "";
					var cond = e.params.comparison + " " + e.params.limit;
					out += "應該要 " + cond;
					break;
				case "minItems":
					out = "";
					var n = e.params.limit;
					out += "不應該少於 " + n + " 個";
					break;
				case "minLength":
					out = "";
					var n = e.params.limit;
					out += "不應該少於 " + n + " 個字元";
					break;
				case "minProperties":
					out = "";
					var n = e.params.limit;
					out += "不應該少於 " + n + " 個屬性";
					break;
				case "multipleOf":
					out = "應該是 " + e.params.multipleOf + " 的整數倍";
					break;
				case "not":
					out = "不應該符合 \"not\" schema";
					break;
				case "oneOf":
					out = "只能符合一個 \"oneOf\" 中的 schema";
					break;
				case "pattern":
					out = "應該符合模式 \"" + e.params.pattern + "\"";
					break;
				case "patternRequired":
					out = "應該有屬性對應模式 " + e.params.missingPattern;
					break;
				case "propertyNames":
					out = "属性名 無效";
					break;
				case "required":
					out = "應該有必須屬性 " + e.params.missingProperty;
					break;
				case "type":
					out = "應該是 " + e.params.type + " 類型";
					break;
				case "unevaluatedItems":
					out = "";
					var n = e.params.len;
					out += " 的元素不可以超過 " + n + " 個";
					break;
				case "unevaluatedProperties":
					out = "不應該有未驗證的屬性";
					break;
				case "uniqueItems":
					out = "不應該有重複項目 (第 " + e.params.j + " 項和第 " + e.params.i + " 項是重複的)";
					break;
				default: out = "應該通過 \"" + e.keyword + " 關鍵詞檢驗\"";
			}
			e.message = out;
		}
	};
}));

//#endregion
//#region node_modules/ajv-i18n/localize/index.js
var require_localize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		en: require_en(),
		ar: require_ar(),
		ca: require_ca(),
		cs: require_cs(),
		de: require_de(),
		es: require_es(),
		fi: require_fi(),
		fr: require_fr(),
		hu: require_hu(),
		id: require_id(),
		it: require_it(),
		ja: require_ja(),
		ko: require_ko(),
		nb: require_nb(),
		nl: require_nl(),
		pl: require_pl(),
		"pt-BR": require_pt_BR(),
		ru: require_ru(),
		sk: require_sk(),
		sv: require_sv(),
		th: require_th(),
		zh: require_zh(),
		"zh-TW": require_zh_TW()
	};
}));

//#endregion
//#region node_modules/ajv-errors/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	const ajv_1$1 = __require("ajv");
	const codegen_1 = __require("ajv/dist/compile/codegen");
	const code_1 = __require("ajv/dist/compile/codegen/code");
	const validate_1 = __require("ajv/dist/compile/validate");
	const errors_1 = __require("ajv/dist/compile/errors");
	const names_1 = __require("ajv/dist/compile/names");
	const keyword = "errorMessage";
	const used = new ajv_1$1.Name("emUsed");
	const KEYWORD_PROPERTY_PARAMS = {
		required: "missingProperty",
		dependencies: "property",
		dependentRequired: "property"
	};
	const INTERPOLATION = /\$\{[^}]+\}/;
	const INTERPOLATION_REPLACE = /\$\{([^}]+)\}/g;
	const EMPTY_STR = /^""\s*\+\s*|\s*\+\s*""$/g;
	function errorMessage(options) {
		return {
			keyword,
			schemaType: ["string", "object"],
			post: true,
			code(cxt) {
				const { gen, data, schema, schemaValue, it } = cxt;
				if (it.createErrors === false) return;
				const sch = schema;
				const instancePath = codegen_1.strConcat(names_1.default.instancePath, it.errorPath);
				gen.if(ajv_1$1._`${names_1.default.errors} > 0`, () => {
					if (typeof sch == "object") {
						const [kwdPropErrors, kwdErrors] = keywordErrorsConfig(sch);
						if (kwdErrors) processKeywordErrors(kwdErrors);
						if (kwdPropErrors) processKeywordPropErrors(kwdPropErrors);
						processChildErrors(childErrorsConfig(sch));
					}
					const schMessage = typeof sch == "string" ? sch : sch._;
					if (schMessage) processAllErrors(schMessage);
					if (!options.keepErrors) removeUsedErrors();
				});
				function childErrorsConfig({ properties, items }) {
					const errors = {};
					if (properties) {
						errors.props = {};
						for (const p in properties) errors.props[p] = [];
					}
					if (items) {
						errors.items = {};
						for (let i = 0; i < items.length; i++) errors.items[i] = [];
					}
					return errors;
				}
				function keywordErrorsConfig(emSchema) {
					let propErrors;
					let errors;
					for (const k in emSchema) {
						if (k === "properties" || k === "items") continue;
						const kwdSch = emSchema[k];
						if (typeof kwdSch == "object") {
							propErrors || (propErrors = {});
							const errMap = propErrors[k] = {};
							for (const p in kwdSch) errMap[p] = [];
						} else {
							errors || (errors = {});
							errors[k] = [];
						}
					}
					return [propErrors, errors];
				}
				function processKeywordErrors(kwdErrors) {
					const kwdErrs = gen.const("emErrors", ajv_1$1.stringify(kwdErrors));
					const templates = gen.const("templates", getTemplatesCode(kwdErrors, schema));
					gen.forOf("err", names_1.default.vErrors, (err) => gen.if(matchKeywordError(err, kwdErrs), () => gen.code(ajv_1$1._`${kwdErrs}[${err}.keyword].push(${err})`).assign(ajv_1$1._`${err}.${used}`, true)));
					const { singleError } = options;
					if (singleError) {
						const message = gen.let("message", ajv_1$1._`""`);
						const paramsErrors = gen.let("paramsErrors", ajv_1$1._`[]`);
						loopErrors((key) => {
							gen.if(message, () => gen.code(ajv_1$1._`${message} += ${typeof singleError == "string" ? singleError : ";"}`));
							gen.code(ajv_1$1._`${message} += ${errMessage(key)}`);
							gen.assign(paramsErrors, ajv_1$1._`${paramsErrors}.concat(${kwdErrs}[${key}])`);
						});
						errors_1.reportError(cxt, {
							message,
							params: ajv_1$1._`{errors: ${paramsErrors}}`
						});
					} else loopErrors((key) => errors_1.reportError(cxt, {
						message: errMessage(key),
						params: ajv_1$1._`{errors: ${kwdErrs}[${key}]}`
					}));
					function loopErrors(body) {
						gen.forIn("key", kwdErrs, (key) => gen.if(ajv_1$1._`${kwdErrs}[${key}].length`, () => body(key)));
					}
					function errMessage(key) {
						return ajv_1$1._`${key} in ${templates} ? ${templates}[${key}]() : ${schemaValue}[${key}]`;
					}
				}
				function processKeywordPropErrors(kwdPropErrors) {
					const kwdErrs = gen.const("emErrors", ajv_1$1.stringify(kwdPropErrors));
					const templatesCode = [];
					for (const k in kwdPropErrors) templatesCode.push([k, getTemplatesCode(kwdPropErrors[k], schema[k])]);
					const templates = gen.const("templates", gen.object(...templatesCode));
					const kwdPropParams = gen.scopeValue("obj", {
						ref: KEYWORD_PROPERTY_PARAMS,
						code: ajv_1$1.stringify(KEYWORD_PROPERTY_PARAMS)
					});
					const propParam = gen.let("emPropParams");
					const paramsErrors = gen.let("emParamsErrors");
					gen.forOf("err", names_1.default.vErrors, (err) => gen.if(matchKeywordError(err, kwdErrs), () => {
						gen.assign(propParam, ajv_1$1._`${kwdPropParams}[${err}.keyword]`);
						gen.assign(paramsErrors, ajv_1$1._`${kwdErrs}[${err}.keyword][${err}.params[${propParam}]]`);
						gen.if(paramsErrors, () => gen.code(ajv_1$1._`${paramsErrors}.push(${err})`).assign(ajv_1$1._`${err}.${used}`, true));
					}));
					gen.forIn("key", kwdErrs, (key) => gen.forIn("keyProp", ajv_1$1._`${kwdErrs}[${key}]`, (keyProp) => {
						gen.assign(paramsErrors, ajv_1$1._`${kwdErrs}[${key}][${keyProp}]`);
						gen.if(ajv_1$1._`${paramsErrors}.length`, () => {
							const tmpl = gen.const("tmpl", ajv_1$1._`${templates}[${key}] && ${templates}[${key}][${keyProp}]`);
							errors_1.reportError(cxt, {
								message: ajv_1$1._`${tmpl} ? ${tmpl}() : ${schemaValue}[${key}][${keyProp}]`,
								params: ajv_1$1._`{errors: ${paramsErrors}}`
							});
						});
					}));
				}
				function processChildErrors(childErrors) {
					const { props, items } = childErrors;
					if (!props && !items) return;
					const isObj = ajv_1$1._`typeof ${data} == "object"`;
					const isArr = ajv_1$1._`Array.isArray(${data})`;
					const childErrs = gen.let("emErrors");
					let childKwd;
					let childProp;
					const templates = gen.let("templates");
					if (props && items) {
						childKwd = gen.let("emChildKwd");
						gen.if(isObj);
						gen.if(isArr, () => {
							init(items, schema.items);
							gen.assign(childKwd, ajv_1$1.str`items`);
						}, () => {
							init(props, schema.properties);
							gen.assign(childKwd, ajv_1$1.str`properties`);
						});
						childProp = ajv_1$1._`[${childKwd}]`;
					} else if (items) {
						gen.if(isArr);
						init(items, schema.items);
						childProp = ajv_1$1._`.items`;
					} else if (props) {
						gen.if(codegen_1.and(isObj, codegen_1.not(isArr)));
						init(props, schema.properties);
						childProp = ajv_1$1._`.properties`;
					}
					gen.forOf("err", names_1.default.vErrors, (err) => ifMatchesChildError(err, childErrs, (child) => gen.code(ajv_1$1._`${childErrs}[${child}].push(${err})`).assign(ajv_1$1._`${err}.${used}`, true)));
					gen.forIn("key", childErrs, (key) => gen.if(ajv_1$1._`${childErrs}[${key}].length`, () => {
						errors_1.reportError(cxt, {
							message: ajv_1$1._`${key} in ${templates} ? ${templates}[${key}]() : ${schemaValue}${childProp}[${key}]`,
							params: ajv_1$1._`{errors: ${childErrs}[${key}]}`
						});
						gen.assign(ajv_1$1._`${names_1.default.vErrors}[${names_1.default.errors}-1].instancePath`, ajv_1$1._`${instancePath} + "/" + ${key}.replace(/~/g, "~0").replace(/\\//g, "~1")`);
					}));
					gen.endIf();
					function init(children, msgs) {
						gen.assign(childErrs, ajv_1$1.stringify(children));
						gen.assign(templates, getTemplatesCode(children, msgs));
					}
				}
				function processAllErrors(schMessage) {
					const errs = gen.const("emErrs", ajv_1$1._`[]`);
					gen.forOf("err", names_1.default.vErrors, (err) => gen.if(matchAnyError(err), () => gen.code(ajv_1$1._`${errs}.push(${err})`).assign(ajv_1$1._`${err}.${used}`, true)));
					gen.if(ajv_1$1._`${errs}.length`, () => errors_1.reportError(cxt, {
						message: templateExpr(schMessage),
						params: ajv_1$1._`{errors: ${errs}}`
					}));
				}
				function removeUsedErrors() {
					const errs = gen.const("emErrs", ajv_1$1._`[]`);
					gen.forOf("err", names_1.default.vErrors, (err) => gen.if(ajv_1$1._`!${err}.${used}`, () => gen.code(ajv_1$1._`${errs}.push(${err})`)));
					gen.assign(names_1.default.vErrors, errs).assign(names_1.default.errors, ajv_1$1._`${errs}.length`);
				}
				function matchKeywordError(err, kwdErrs) {
					return codegen_1.and(ajv_1$1._`${err}.keyword !== ${keyword}`, ajv_1$1._`!${err}.${used}`, ajv_1$1._`${err}.instancePath === ${instancePath}`, ajv_1$1._`${err}.keyword in ${kwdErrs}`, ajv_1$1._`${err}.schemaPath.indexOf(${it.errSchemaPath}) === 0`, ajv_1$1._`/^\\/[^\\/]*$/.test(${err}.schemaPath.slice(${it.errSchemaPath.length}))`);
				}
				function ifMatchesChildError(err, childErrs, thenBody) {
					gen.if(codegen_1.and(ajv_1$1._`${err}.keyword !== ${keyword}`, ajv_1$1._`!${err}.${used}`, ajv_1$1._`${err}.instancePath.indexOf(${instancePath}) === 0`), () => {
						const childRegex = gen.scopeValue("pattern", {
							ref: /^\/([^/]*)(?:\/|$)/,
							code: ajv_1$1._`new RegExp("^\\\/([^/]*)(?:\\\/|$)")`
						});
						const matches = gen.const("emMatches", ajv_1$1._`${childRegex}.exec(${err}.instancePath.slice(${instancePath}.length))`);
						const child = gen.const("emChild", ajv_1$1._`${matches} && ${matches}[1].replace(/~1/g, "/").replace(/~0/g, "~")`);
						gen.if(ajv_1$1._`${child} !== undefined && ${child} in ${childErrs}`, () => thenBody(child));
					});
				}
				function matchAnyError(err) {
					return codegen_1.and(ajv_1$1._`${err}.keyword !== ${keyword}`, ajv_1$1._`!${err}.${used}`, codegen_1.or(ajv_1$1._`${err}.instancePath === ${instancePath}`, codegen_1.and(ajv_1$1._`${err}.instancePath.indexOf(${instancePath}) === 0`, ajv_1$1._`${err}.instancePath[${instancePath}.length] === "/"`)), ajv_1$1._`${err}.schemaPath.indexOf(${it.errSchemaPath}) === 0`, ajv_1$1._`${err}.schemaPath[${it.errSchemaPath}.length] === "/"`);
				}
				function getTemplatesCode(keys, msgs) {
					const templatesCode = [];
					for (const k in keys) {
						const msg = msgs[k];
						if (INTERPOLATION.test(msg)) templatesCode.push([k, templateFunc(msg)]);
					}
					return gen.object(...templatesCode);
				}
				function templateExpr(msg) {
					if (!INTERPOLATION.test(msg)) return ajv_1$1.stringify(msg);
					return new code_1._Code(code_1.safeStringify(msg).replace(INTERPOLATION_REPLACE, (_s, ptr) => `" + JSON.stringify(${validate_1.getData(ptr, it)}) + "`).replace(EMPTY_STR, ""));
				}
				function templateFunc(msg) {
					return ajv_1$1._`function(){return ${templateExpr(msg)}}`;
				}
			},
			metaSchema: {
				anyOf: [{ type: "string" }, {
					type: "object",
					properties: {
						properties: { $ref: "#/$defs/stringMap" },
						items: { $ref: "#/$defs/stringList" },
						required: { $ref: "#/$defs/stringOrMap" },
						dependencies: { $ref: "#/$defs/stringOrMap" }
					},
					additionalProperties: { type: "string" }
				}],
				$defs: {
					stringMap: {
						type: "object",
						additionalProperties: { type: "string" }
					},
					stringOrMap: { anyOf: [{ type: "string" }, { $ref: "#/$defs/stringMap" }] },
					stringList: {
						type: "array",
						items: { type: "string" }
					}
				}
			}
		};
	}
	const ajvErrors = (ajv, options = {}) => {
		if (!ajv.opts.allErrors) throw new Error("ajv-errors: Ajv option allErrors must be true");
		if (ajv.opts.jsPropertySyntax) throw new Error("ajv-errors: ajv option jsPropertySyntax is not supported");
		return ajv.addKeyword(errorMessage(options));
	};
	exports.default = ajvErrors;
	module.exports = ajvErrors;
	module.exports.default = ajvErrors;
}));

//#endregion
//#region node_modules/vovk-ajv/index.js
var require_vovk_ajv = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.validateOnClient = void 0;
	const ajv_1 = __require("ajv");
	const _2020_1 = __importDefault(__require("ajv/dist/2020"));
	const ajv_formats_1 = __importDefault(require_dist$1());
	const ajv_i18n_1 = __importDefault(require_localize());
	const ajv_errors_1 = __importDefault(require_dist());
	const vovk_1 = __require("vovk");
	const createAjv = (options, target) => {
		const ajv = new (target === "draft-2020-12" ? _2020_1.default : ajv_1.Ajv)({
			allErrors: true,
			...options
		});
		(0, ajv_formats_1.default)(ajv);
		(0, ajv_errors_1.default)(ajv);
		ajv.addKeyword("x-isForm");
		ajv.addKeyword("x-tsType");
		return ajv;
	};
	const validate = ({ input, schema, localize = "en", type, endpoint, options, target }) => {
		if (input && schema) {
			const schemaTarget = schema.$schema?.includes("://json-schema.org/draft-07/schema") ? "draft-07" : "draft-2020-12";
			const ajv = createAjv(options ?? {}, target ?? schemaTarget);
			const isFormData = input instanceof FormData;
			if (input instanceof FormData) {
				const formDataEntries = Array.from(input.entries());
				const result = {};
				formDataEntries.forEach(([key, value]) => {
					let processedValue;
					if (value instanceof Blob) processedValue = "<binary>";
					else if (Array.isArray(value)) processedValue = value.map((item) => item instanceof Blob ? "<binary>" : item);
					else processedValue = value;
					if (key in result) if (Array.isArray(result[key])) result[key].push(processedValue);
					else result[key] = [result[key], processedValue];
					else result[key] = processedValue;
				});
				input = result;
			}
			if (!ajv.validate(schema, input)) {
				ajv_i18n_1.default[localize](ajv.errors);
				throw new vovk_1.HttpException(vovk_1.HttpStatus.NULL, `Client-side validation failed. Invalid ${isFormData ? "form" : type} on client: ${ajv.errorsText()}`, {
					input,
					errors: ajv.errors,
					endpoint
				});
			}
		}
	};
	const getConfig = (schema) => {
		const config = schema.meta?.config?.libs?.ajv;
		return {
			options: config?.options ?? {},
			localize: config?.localize ?? "en",
			target: config?.target
		};
	};
	const validateOnClientAjv = (0, vovk_1.createValidateOnClient)({ validate: (input, schema, { endpoint, type, fullSchema }) => {
		const { options, localize, target } = getConfig(fullSchema);
		validate({
			input,
			schema,
			target,
			localize,
			endpoint,
			options,
			type
		});
	} });
	const configure = ({ options: givenOptions, localize: givenLocalize, target: givenTarget }) => (0, vovk_1.createValidateOnClient)({ validate: (input, schema, { endpoint, type, fullSchema }) => {
		const { options, localize, target } = getConfig(fullSchema);
		validate({
			input,
			schema,
			target: givenTarget ?? target,
			localize: givenLocalize ?? localize,
			endpoint,
			options: givenOptions ?? options,
			type
		});
	} });
	exports.validateOnClient = Object.assign(validateOnClientAjv, { configure });
}));

//#endregion
export default require_vovk_ajv();

export {  };