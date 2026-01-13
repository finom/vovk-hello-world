import { NextResponse } from "next/server.js";
import { pick } from "lodash";

//#region node_modules/vovk/node_modules/type-fest/source/primitive.d.ts

/**
Matches any [primitive value](https://developer.mozilla.org/en-US/docs/Glossary/Primitive).

@category Type
*/
type Primitive$1 = null | undefined | string | number | boolean | symbol | bigint;
//#endregion
//#region node_modules/vovk/node_modules/type-fest/source/json-value.d.ts
/**
Matches a JSON object.

This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

@category JSON
*/
type JsonObject = { [Key in string]: JsonValue };
/**
Matches a JSON array.

@category JSON
*/
type JsonArray = JsonValue[] | readonly JsonValue[];
/**
Matches any valid JSON primitive value.

@category JSON
*/
type JsonPrimitive = string | number | boolean | null;
/**
Matches any valid JSON value.

@see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

@category JSON
*/
type JsonValue = JsonPrimitive | JsonObject | JsonArray;
//#endregion
//#region node_modules/vovk/node_modules/type-fest/source/literal-union.d.ts
/**
Allows creating a union type by combining primitive types and literal types without sacrificing auto-completion in IDEs for the literal type part of the union.

Currently, when a union type of a primitive type is combined with literal types, TypeScript loses all information about the combined literals. Thus, when such type is used in an IDE with autocompletion, no suggestions are made for the declared literals.

This type is a workaround for [Microsoft/TypeScript#29729](https://github.com/Microsoft/TypeScript/issues/29729). It will be removed as soon as it's not needed anymore.

@example
```
import type {LiteralUnion} from 'type-fest';

// Before

type Pet = 'dog' | 'cat' | string;

const petWithoutAutocomplete: Pet = '';
// Start typing in your TypeScript-enabled IDE.
// You **will not** get auto-completion for `dog` and `cat` literals.

// After

type Pet2 = LiteralUnion<'dog' | 'cat', string>;

const petWithAutoComplete: Pet2 = '';
// You **will** get auto-completion for `dog` and `cat` literals.
```

@category Type
*/
type LiteralUnion<LiteralType, BaseType extends Primitive$1> = LiteralType | (BaseType & Record<never, never>);
//#endregion
//#region node_modules/vovk/node_modules/type-fest/source/package-json.d.ts
declare namespace PackageJson {
  /**
  A person who has been involved in creating or maintaining the package.
  */
  type Person = string | {
    name: string;
    url?: string;
    email?: string;
  };
  type BugsLocation = string | {
    /**
    The URL to the package's issue tracker.
    */
    url?: string;

    /**
    The email address to which issues should be reported.
    */
    email?: string;
  };
  type DirectoryLocations = {
    [directoryType: string]: JsonValue | undefined;

    /**
    Location for executable scripts. Sugar to generate entries in the `bin` property by walking the folder.
    */
    bin?: string;

    /**
    Location for Markdown files.
    */
    doc?: string;

    /**
    Location for example scripts.
    */
    example?: string;

    /**
    Location for the bulk of the library.
    */
    lib?: string;

    /**
    Location for man pages. Sugar to generate a `man` array by walking the folder.
    */
    man?: string;

    /**
    Location for test files.
    */
    test?: string;
  };
  type Scripts = {
    /**
    Run **before** the package is published (Also run on local `npm install` without any arguments).
    */
    prepublish?: string;

    /**
    Run both **before** the package is packed and published, and on local `npm install` without any arguments. This is run **after** `prepublish`, but **before** `prepublishOnly`.
    */
    prepare?: string;

    /**
    Run **before** the package is prepared and packed, **only** on `npm publish`.
    */
    prepublishOnly?: string;

    /**
    Run **before** a tarball is packed (on `npm pack`, `npm publish`, and when installing git dependencies).
    */
    prepack?: string;

    /**
    Run **after** the tarball has been generated and moved to its final destination.
    */
    postpack?: string;

    /**
    Run **after** the package is published.
    */
    publish?: string;

    /**
    Run **after** the package is published.
    */
    postpublish?: string;

    /**
    Run **before** the package is installed.
    */
    preinstall?: string;

    /**
    Run **after** the package is installed.
    */
    install?: string;

    /**
    Run **after** the package is installed and after `install`.
    */
    postinstall?: string;

    /**
    Run **before** the package is uninstalled and before `uninstall`.
    */
    preuninstall?: string;

    /**
    Run **before** the package is uninstalled.
    */
    uninstall?: string;

    /**
    Run **after** the package is uninstalled.
    */
    postuninstall?: string;

    /**
    Run **before** bump the package version and before `version`.
    */
    preversion?: string;

    /**
    Run **before** bump the package version.
    */
    version?: string;

    /**
    Run **after** bump the package version.
    */
    postversion?: string;

    /**
    Run with the `npm test` command, before `test`.
    */
    pretest?: string;

    /**
    Run with the `npm test` command.
    */
    test?: string;

    /**
    Run with the `npm test` command, after `test`.
    */
    posttest?: string;

    /**
    Run with the `npm stop` command, before `stop`.
    */
    prestop?: string;

    /**
    Run with the `npm stop` command.
    */
    stop?: string;

    /**
    Run with the `npm stop` command, after `stop`.
    */
    poststop?: string;

    /**
    Run with the `npm start` command, before `start`.
    */
    prestart?: string;

    /**
    Run with the `npm start` command.
    */
    start?: string;

    /**
    Run with the `npm start` command, after `start`.
    */
    poststart?: string;

    /**
    Run with the `npm restart` command, before `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
    */
    prerestart?: string;

    /**
    Run with the `npm restart` command. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
    */
    restart?: string;

    /**
    Run with the `npm restart` command, after `restart`. Note: `npm restart` will run the `stop` and `start` scripts if no `restart` script is provided.
    */
    postrestart?: string;
  } & Partial<Record<string, string>>;

  /**
  Dependencies of the package. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or Git URL.
  */
  type Dependency = Partial<Record<string, string>>;

  /**
  Recursive map describing selective dependency version overrides supported by npm.
  */
  type DependencyOverrides = { [packageName in string]: string | undefined | DependencyOverrides };

  /**
  Specifies requirements for development environment components such as operating systems, runtimes, or package managers. Used to ensure consistent development environments across the team.
  */
  type DevEngineDependency = {
    name: string;
    version?: string;
    onFail?: 'ignore' | 'warn' | 'error' | 'download';
  };

  /**
  A mapping of conditions and the paths to which they resolve.
  */
  type ExportConditions = {
    [condition: string]: Exports;
  };

  /**
  Entry points of a module, optionally with conditions and subpath exports.
  */
  type Exports = null | string | Array<string | ExportConditions> | ExportConditions;

  /**
  Import map entries of a module, optionally with conditions and subpath imports.
  */
  type Imports = {
    [key: `#${string}`]: Exports;
  };

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface NonStandardEntryPoints {
    /**
    An ECMAScript module ID that is the primary entry point to the program.
    */
    module?: string;

    /**
    A module ID with untranspiled code that is the primary entry point to the program.
    */
    esnext?: string | {
      [moduleName: string]: string | undefined;
      main?: string;
      browser?: string;
    };

    /**
    A hint to JavaScript bundlers or component tools when packaging modules for client side use.
    */
    browser?: string | Partial<Record<string, string | false>>;

    /**
    Denote which files in your project are "pure" and therefore safe for Webpack to prune if unused.
    	[Read more.](https://webpack.js.org/guides/tree-shaking/)
    */
    sideEffects?: boolean | string[];
  }
  type TypeScriptConfiguration = {
    /**
    Location of the bundled TypeScript declaration file.
    */
    types?: string;

    /**
    Version selection map of TypeScript.
    */
    typesVersions?: Partial<Record<string, Partial<Record<string, string[]>>>>;

    /**
    Location of the bundled TypeScript declaration file. Alias of `types`.
    */
    typings?: string;
  };

  /**
  An alternative configuration for workspaces.
  */
  type WorkspaceConfig = {
    /**
    An array of workspace pattern strings which contain the workspace packages.
    */
    packages?: WorkspacePattern[];

    /**
    Designed to solve the problem of packages which break when their `node_modules` are moved to the root workspace directory - a process known as hoisting. For these packages, both within your workspace, and also some that have been installed via `node_modules`, it is important to have a mechanism for preventing the default Yarn workspace behavior. By adding workspace pattern strings here, Yarn will resume non-workspace behavior for any package which matches the defined patterns.
    	[Supported](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/) by Yarn.
    [Not supported](https://github.com/npm/rfcs/issues/287) by npm.
    */
    nohoist?: WorkspacePattern[];
  };

  /**
  A workspace pattern points to a directory or group of directories which contain packages that should be included in the workspace installation process.
  	The patterns are handled with [minimatch](https://github.com/isaacs/minimatch).
  	@example
  `docs` → Include the docs directory and install its dependencies.
  `packages/*` → Include all nested directories within the packages directory, like `packages/cli` and `packages/core`.
  */
  type WorkspacePattern = string;
  type YarnConfiguration = {
    /**
    If your package only allows one version of a given dependency, and you’d like to enforce the same behavior as `yarn install --flat` on the command-line, set this to `true`.
    	Note that if your `package.json` contains `"flat": true` and other packages depend on yours (e.g. you are building a library rather than an app), those other packages will also need `"flat": true` in their `package.json` or be installed with `yarn install --flat` on the command-line.
    */
    flat?: boolean;

    /**
    Selective version resolutions. Allows the definition of custom package versions inside dependencies without manual edits in the `yarn.lock` file.
    */
    resolutions?: Dependency;
  };
  type JSPMConfiguration = {
    /**
    JSPM configuration.
    */
    jspm?: PackageJson;
  };

  /**
  Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Containing standard npm properties.
  */
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface PackageJsonStandard {
    /**
    The name of the package.
    */
    name?: string;

    /**
    Package version, parseable by [`node-semver`](https://github.com/npm/node-semver).
    */
    version?: string;

    /**
    Package description, listed in `npm search`.
    */
    description?: string;

    /**
    Keywords associated with package, listed in `npm search`.
    */
    keywords?: string[];

    /**
    The URL to the package's homepage.
    */
    homepage?: LiteralUnion<'.', string>;

    /**
    The URL to the package's issue tracker and/or the email address to which issues should be reported.
    */
    bugs?: BugsLocation;

    /**
    The license for the package.
    */
    license?: string;

    /**
    The licenses for the package.
    */
    licenses?: Array<{
      type?: string;
      url?: string;
    }>;
    author?: Person;

    /**
    A list of people who contributed to the package.
    */
    contributors?: Person[];

    /**
    A list of people who maintain the package.
    */
    maintainers?: Person[];

    /**
    The files included in the package.
    */
    files?: string[];

    /**
    Resolution algorithm for importing ".js" files from the package's scope.
    	[Read more.](https://nodejs.org/api/esm.html#esm_package_json_type_field)
    */
    type?: 'module' | 'commonjs';

    /**
    The module ID that is the primary entry point to the program.
    */
    main?: string;

    /**
    Subpath exports to define entry points of the package.
    	[Read more.](https://nodejs.org/api/packages.html#subpath-exports)
    */
    exports?: Exports;

    /**
    Subpath imports to define internal package import maps that only apply to import specifiers from within the package itself.
    	[Read more.](https://nodejs.org/api/packages.html#subpath-imports)
    */
    imports?: Imports;

    /**
    The executable files that should be installed into the `PATH`.
    */
    bin?: string | Partial<Record<string, string>>;

    /**
    Filenames to put in place for the `man` program to find.
    */
    man?: string | string[];

    /**
    Indicates the structure of the package.
    */
    directories?: DirectoryLocations;

    /**
    Location for the code repository.
    */
    repository?: string | {
      type: string;
      url: string;

      /**
      Relative path to package.json if it is placed in non-root directory (for example if it is part of a monorepo).
      [Read more.](https://github.com/npm/rfcs/blob/latest/implemented/0010-monorepo-subdirectory-declaration.md)
      */
      directory?: string;
    };

    /**
    Script commands that are run at various times in the lifecycle of the package. The key is the lifecycle event, and the value is the command to run at that point.
    */
    scripts?: Scripts;

    /**
    Is used to set configuration parameters used in package scripts that persist across upgrades.
    */
    config?: JsonObject;

    /**
    The dependencies of the package.
    */
    dependencies?: Dependency;

    /**
    Additional tooling dependencies that are not required for the package to work. Usually test, build, or documentation tooling.
    */
    devDependencies?: Dependency;

    /**
    Dependencies that are skipped if they fail to install.
    */
    optionalDependencies?: Dependency;

    /**
    Dependencies that will usually be required by the package user directly or via another dependency.
    */
    peerDependencies?: Dependency;

    /**
    Indicate peer dependencies that are optional.
    */
    peerDependenciesMeta?: Partial<Record<string, {
      optional: true;
    }>>;

    /**
    Package names that are bundled when the package is published.
    */
    bundledDependencies?: string[];

    /**
    Alias of `bundledDependencies`.
    */
    bundleDependencies?: string[];

    /**
    Overrides is used to support selective version overrides using npm, which lets you define custom package versions or ranges inside your dependencies.
    */
    overrides?: DependencyOverrides;

    /**
    Engines that this package runs on.
    */
    engines?: { [EngineName in 'npm' | 'node' | string]?: string };

    /**
    @deprecated
    */
    engineStrict?: boolean;

    /**
    Operating systems the module runs on.
    */
    os?: Array<LiteralUnion<'aix' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32' | '!aix' | '!darwin' | '!freebsd' | '!linux' | '!openbsd' | '!sunos' | '!win32', string>>;

    /**
    CPU architectures the module runs on.
    */
    cpu?: Array<LiteralUnion<'arm' | 'arm64' | 'ia32' | 'mips' | 'mipsel' | 'ppc' | 'ppc64' | 's390' | 's390x' | 'x32' | 'x64' | '!arm' | '!arm64' | '!ia32' | '!mips' | '!mipsel' | '!ppc' | '!ppc64' | '!s390' | '!s390x' | '!x32' | '!x64', string>>;

    /**
    Define the runtime and package manager for developing the current project.
    */
    devEngines?: {
      os?: DevEngineDependency | DevEngineDependency[];
      cpu?: DevEngineDependency | DevEngineDependency[];
      libc?: DevEngineDependency | DevEngineDependency[];
      runtime?: DevEngineDependency | DevEngineDependency[];
      packageManager?: DevEngineDependency | DevEngineDependency[];
    };

    /**
    If set to `true`, a warning will be shown if package is installed locally. Useful if the package is primarily a command-line application that should be installed globally.
    	@deprecated
    */
    preferGlobal?: boolean;

    /**
    If set to `true`, then npm will refuse to publish it.
    */
    private?: boolean;

    /**
    A set of config values that will be used at publish-time. It's especially handy to set the tag, registry or access, to ensure that a given package is not tagged with 'latest', published to the global public registry or that a scoped module is private by default.
    */
    publishConfig?: PublishConfig;

    /**
    Describes and notifies consumers of a package's monetary support information.
    	[Read more.](https://github.com/npm/rfcs/blob/main/implemented/0017-add-funding-support.md)
    */
    funding?: string | {
      /**
      The type of funding.
      */
      type?: LiteralUnion<'github' | 'opencollective' | 'patreon' | 'individual' | 'foundation' | 'corporation', string>;

      /**
      The URL to the funding page.
      */
      url: string;
    };

    /**
    Used to configure [npm workspaces](https://docs.npmjs.com/cli/using-npm/workspaces) / [Yarn workspaces](https://classic.yarnpkg.com/docs/workspaces/).
    	Workspaces allow you to manage multiple packages within the same repository in such a way that you only need to run your install command once in order to install all of them in a single pass.
    	Please note that the top-level `private` property of `package.json` **must** be set to `true` in order to use workspaces.
    */
    workspaces?: WorkspacePattern[] | WorkspaceConfig;
  }

  /**
  Type for [`package.json` file used by the Node.js runtime](https://nodejs.org/api/packages.html#nodejs-packagejson-field-definitions).
  */
  type NodeJsStandard = {
    /**
    Defines which package manager is expected to be used when working on the current project. It can set to any of the [supported package managers](https://nodejs.org/api/corepack.html#supported-package-managers), and will ensure that your teams use the exact same package manager versions without having to install anything else than Node.js.
    	__This field is currently experimental and needs to be opted-in; check the [Corepack](https://nodejs.org/api/corepack.html) page for details about the procedure.__
    	@example
    ```json
    {
    	"packageManager": "<package manager name>@<version>"
    }
    ```
    */
    packageManager?: string;
  };
  type PublishConfig = {
    /**
    Additional, less common properties from the [npm docs on `publishConfig`](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#publishconfig).
    */
    [additionalProperties: string]: JsonValue | undefined;

    /**
    When publishing scoped packages, the access level defaults to restricted. If you want your scoped package to be publicly viewable (and installable) set `--access=public`. The only valid values for access are public and restricted. Unscoped packages always have an access level of public.
    */
    access?: 'public' | 'restricted';

    /**
    The base URL of the npm registry.
    	Default: `'https://registry.npmjs.org/'`
    */
    registry?: string;

    /**
    The tag to publish the package under.
    	Default: `'latest'`
    */
    tag?: string;
  };
}
/**
Type for [npm's `package.json` file](https://docs.npmjs.com/creating-a-package-json-file). Also includes types for fields used by other popular projects, like TypeScript and Yarn.

@category File
*/
type PackageJson = JsonObject & PackageJson.NodeJsStandard & PackageJson.PackageJsonStandard & PackageJson.NonStandardEntryPoints & PackageJson.TypeScriptConfiguration & PackageJson.YarnConfiguration & PackageJson.JSPMConfiguration;
//#endregion
//#region node_modules/openapi3-ts/dist/model/specification-extension.d.ts
type IExtensionName = `x-${string}`;
type IExtensionType = any;
type ISpecificationExtension = {
  [extensionName: IExtensionName]: IExtensionType;
};
//#endregion
//#region node_modules/openapi3-ts/dist/model/oas-common.d.ts
interface ServerObject extends ISpecificationExtension {
  url: string;
  description?: string;
  variables?: {
    [v: string]: ServerVariableObject;
  };
}
interface ServerVariableObject extends ISpecificationExtension {
  enum?: string[] | boolean[] | number[];
  default: string | boolean | number;
  description?: string;
}
//#endregion
//#region node_modules/openapi3-ts/dist/model/openapi31.d.ts
interface OpenAPIObject extends ISpecificationExtension {
  openapi: string;
  info: InfoObject;
  servers?: ServerObject[];
  paths?: PathsObject;
  components?: ComponentsObject;
  security?: SecurityRequirementObject[];
  tags?: TagObject[];
  externalDocs?: ExternalDocumentationObject;
  webhooks?: PathsObject;
}
interface InfoObject extends ISpecificationExtension {
  title: string;
  description?: string;
  termsOfService?: string;
  contact?: ContactObject;
  license?: LicenseObject;
  version: string;
}
interface ContactObject extends ISpecificationExtension {
  name?: string;
  url?: string;
  email?: string;
}
interface LicenseObject extends ISpecificationExtension {
  name: string;
  identifier?: string;
  url?: string;
}
interface ComponentsObject extends ISpecificationExtension {
  schemas?: {
    [schema: string]: SchemaObject | ReferenceObject;
  };
  responses?: {
    [response: string]: ResponseObject | ReferenceObject;
  };
  parameters?: {
    [parameter: string]: ParameterObject | ReferenceObject;
  };
  examples?: {
    [example: string]: ExampleObject | ReferenceObject;
  };
  requestBodies?: {
    [request: string]: RequestBodyObject | ReferenceObject;
  };
  headers?: {
    [header: string]: HeaderObject | ReferenceObject;
  };
  securitySchemes?: {
    [securityScheme: string]: SecuritySchemeObject | ReferenceObject;
  };
  links?: {
    [link: string]: LinkObject | ReferenceObject;
  };
  callbacks?: {
    [callback: string]: CallbackObject | ReferenceObject;
  };
  pathItems?: {
    [pathItem: string]: PathItemObject | ReferenceObject;
  };
}
interface PathsObject extends ISpecificationExtension {
  [path: string]: PathItemObject;
}
interface PathItemObject extends ISpecificationExtension {
  $ref?: string;
  summary?: string;
  description?: string;
  get?: OperationObject;
  put?: OperationObject;
  post?: OperationObject;
  delete?: OperationObject;
  options?: OperationObject;
  head?: OperationObject;
  patch?: OperationObject;
  trace?: OperationObject;
  servers?: ServerObject[];
  parameters?: (ParameterObject | ReferenceObject)[];
}
interface OperationObject extends ISpecificationExtension {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  operationId?: string;
  parameters?: (ParameterObject | ReferenceObject)[];
  requestBody?: RequestBodyObject | ReferenceObject;
  responses?: ResponsesObject;
  callbacks?: CallbacksObject;
  deprecated?: boolean;
  security?: SecurityRequirementObject[];
  servers?: ServerObject[];
}
interface ExternalDocumentationObject extends ISpecificationExtension {
  description?: string;
  url: string;
}
type ParameterLocation = 'query' | 'header' | 'path' | 'cookie';
type ParameterStyle = 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
interface BaseParameterObject extends ISpecificationExtension {
  description?: string;
  required?: boolean;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: ParameterStyle;
  explode?: boolean;
  allowReserved?: boolean;
  schema?: SchemaObject | ReferenceObject;
  examples?: {
    [param: string]: ExampleObject | ReferenceObject;
  };
  example?: any;
  content?: ContentObject;
}
interface ParameterObject extends BaseParameterObject {
  name: string;
  in: ParameterLocation;
}
interface RequestBodyObject extends ISpecificationExtension {
  description?: string;
  content: ContentObject;
  required?: boolean;
}
interface ContentObject {
  [mediatype: string]: MediaTypeObject;
}
interface MediaTypeObject extends ISpecificationExtension {
  schema?: SchemaObject | ReferenceObject;
  examples?: ExamplesObject;
  example?: any;
  encoding?: EncodingObject;
}
interface EncodingObject extends ISpecificationExtension {
  [property: string]: EncodingPropertyObject | any;
}
interface EncodingPropertyObject {
  contentType?: string;
  headers?: {
    [key: string]: HeaderObject | ReferenceObject;
  };
  style?: string;
  explode?: boolean;
  allowReserved?: boolean;
  [key: string]: any;
}
interface ResponsesObject extends ISpecificationExtension {
  default?: ResponseObject | ReferenceObject;
  [statuscode: string]: ResponseObject | ReferenceObject | any;
}
interface ResponseObject extends ISpecificationExtension {
  description: string;
  headers?: HeadersObject;
  content?: ContentObject;
  links?: LinksObject;
}
interface CallbacksObject extends ISpecificationExtension {
  [name: string]: CallbackObject | ReferenceObject | any;
}
interface CallbackObject extends ISpecificationExtension {
  [name: string]: PathItemObject | any;
}
interface HeadersObject {
  [name: string]: HeaderObject | ReferenceObject;
}
interface ExampleObject {
  summary?: string;
  description?: string;
  value?: any;
  externalValue?: string;
  [property: string]: any;
}
interface LinksObject {
  [name: string]: LinkObject | ReferenceObject;
}
interface LinkObject extends ISpecificationExtension {
  operationRef?: string;
  operationId?: string;
  parameters?: LinkParametersObject;
  requestBody?: any | string;
  description?: string;
  server?: ServerObject;
  [property: string]: any;
}
interface LinkParametersObject {
  [name: string]: any | string;
}
interface HeaderObject extends BaseParameterObject {
  $ref?: string;
}
interface TagObject extends ISpecificationExtension {
  name: string;
  description?: string;
  externalDocs?: ExternalDocumentationObject;
  [extension: string]: any;
}
interface ExamplesObject {
  [name: string]: ExampleObject | ReferenceObject;
}
interface ReferenceObject {
  $ref: string;
  summary?: string;
  description?: string;
}
type SchemaObjectType = 'integer' | 'number' | 'string' | 'boolean' | 'object' | 'null' | 'array';
interface SchemaObject extends ISpecificationExtension {
  $ref?: string;
  discriminator?: DiscriminatorObject;
  readOnly?: boolean;
  writeOnly?: boolean;
  xml?: XmlObject;
  externalDocs?: ExternalDocumentationObject;
  example?: any;
  examples?: any[];
  deprecated?: boolean;
  type?: SchemaObjectType | SchemaObjectType[];
  format?: 'int32' | 'int64' | 'float' | 'double' | 'byte' | 'binary' | 'date' | 'date-time' | 'password' | string;
  allOf?: (SchemaObject | ReferenceObject)[];
  oneOf?: (SchemaObject | ReferenceObject)[];
  anyOf?: (SchemaObject | ReferenceObject)[];
  not?: SchemaObject | ReferenceObject;
  items?: SchemaObject | ReferenceObject;
  properties?: {
    [propertyName: string]: SchemaObject | ReferenceObject;
  };
  additionalProperties?: SchemaObject | ReferenceObject | boolean;
  propertyNames?: SchemaObject | ReferenceObject;
  description?: string;
  default?: any;
  title?: string;
  multipleOf?: number;
  maximum?: number;
  const?: any;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  enum?: any[];
  prefixItems?: (SchemaObject | ReferenceObject)[];
  contentMediaType?: string;
  contentEncoding?: string;
}
interface DiscriminatorObject {
  propertyName: string;
  mapping?: {
    [key: string]: string;
  };
}
interface XmlObject extends ISpecificationExtension {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}
type SecuritySchemeType = 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';
interface SecuritySchemeObject extends ISpecificationExtension {
  type: SecuritySchemeType;
  description?: string;
  name?: string;
  in?: string;
  scheme?: string;
  bearerFormat?: string;
  flows?: OAuthFlowsObject;
  openIdConnectUrl?: string;
}
interface OAuthFlowsObject extends ISpecificationExtension {
  implicit?: OAuthFlowObject;
  password?: OAuthFlowObject;
  clientCredentials?: OAuthFlowObject;
  authorizationCode?: OAuthFlowObject;
}
interface OAuthFlowObject extends ISpecificationExtension {
  authorizationUrl?: string;
  tokenUrl?: string;
  refreshUrl?: string;
  scopes: ScopesObject;
}
interface ScopesObject extends ISpecificationExtension {
  [scope: string]: any;
}
interface SecurityRequirementObject {
  [name: string]: string[];
}
//#endregion
//#region node_modules/vovk/dist/core/JSONLinesResponder.d.ts
declare abstract class Responder {
  response: Response;
}
/**
 * A Responder subclass for streaming JSON Lines (JSONL) data.
 * @see https://vovk.dev/jsonlines
 * @param request The incoming Request object.
 * @param getResponse Optional function to create a custom Response object.
 * @example
 * ```ts
 * import { JSONLinesResponder } from 'vovk';
 *
 * const responder = new JSONLinesResponder<MyItemType>(request, (responder) => {
 *   return new Response(responder.readableStream, { headers: responder.headers });
 * });
 *
 * // Send items
 * responder.send({ ... });
 * // Close the stream when done
 * responder.close();
 * // Or throw an error
 * responder.throw(new Error('Something went wrong'));
 * // get the Response object, headers, etc.
 * const { response, headers } = responder;
 * ```
 */
declare class JSONLinesResponder<T$1> extends Responder {
  private isClosed;
  private i;
  private controller?;
  private readonly encoder;
  readonly readableStream: ReadableStream | null;
  readonly headers: Record<string, string>;
  onBeforeSend: (item: T$1, i: number) => T$1 | Promise<T$1>;
  constructor(request?: Request | null, getResponse?: (responder: JSONLinesResponder<T$1>) => Response);
  readonly send: (item: T$1) => Promise<void>;
  sendLineOrError: (data: T$1 | StreamAbortMessage) => void;
  readonly close: () => void;
  readonly throw: (e: unknown) => void;
}
//#endregion
//#region node_modules/vovk/dist/client/defaultStreamHandler.d.ts
declare const defaultStreamHandler: ({
  response,
  abortController
}: {
  response: Response;
  abortController: AbortController;
}) => VovkStreamAsyncIterable<unknown>;
//#endregion
//#region node_modules/vovk/dist/client/defaultHandler.d.ts
declare const defaultHandler: ({
  response,
  schema
}: {
  response: Response;
  schema: VovkHandlerSchema;
}) => Promise<unknown>;
//#endregion
//#region node_modules/vovk/dist/client/types.d.ts
type KnownAny$1 = any;
type OmitNullable<T$1> = { [K in keyof T$1 as T$1[K] extends null | undefined ? never : K]: T$1[K] };
type Empty = {};
type StaticMethodInput<T$1 extends ((req: VovkRequest<KnownAny$1, KnownAny$1, KnownAny$1>, params: KnownAny$1) => KnownAny$1) & {
  __types?: {
    isForm: boolean;
  };
}> = OmitNullable<(Parameters<T$1>[0] extends VovkRequest<infer TBody, infer TQuery, infer TParams> ? (TBody extends Record<KnownAny$1, KnownAny$1> ? {
  body: T$1['__types'] extends {
    isForm: true;
  } ? FormData : TBody;
} : Empty) & (TQuery extends Record<KnownAny$1, KnownAny$1> ? {
  query: TQuery;
} : Empty) & (TParams extends Record<KnownAny$1, KnownAny$1> ? {
  params: TParams;
} : Empty) & {
  meta?: {
    [key: string]: KnownAny$1;
  };
} : Empty) & (Parameters<T$1>[1] extends Record<KnownAny$1, KnownAny$1> ? {
  params: Parameters<T$1>[1];
} : Empty)>;
type ToPromise<T$1> = T$1 extends PromiseLike<unknown> ? T$1 : Promise<T$1>;
type VovkStreamAsyncIterable<T$1> = {
  status: number;
  asPromise: () => Promise<T$1[]>;
  [Symbol.dispose](): Promise<void> | void;
  [Symbol.asyncDispose](): Promise<void> | void;
  [Symbol.asyncIterator](): AsyncIterator<T$1>;
  abortWithoutError: () => void;
  onIterate: (cb: (data: T$1, i: number) => void) => () => void;
  abortController: AbortController;
};
type IsNextJs = NextResponse extends Response ? true : false;
type StaticMethodReturn<T$1 extends ControllerStaticMethod> = IsNextJs extends true ? ReturnType<T$1> extends NextResponse<infer U> | Promise<NextResponse<infer U>> ? U : ReturnType<T$1> extends Response | Promise<Response> ? Awaited<ReturnType<T$1>> : ReturnType<T$1> : ReturnType<T$1> extends Response | Promise<Response> ? Awaited<ReturnType<T$1>> : ReturnType<T$1>;
type StaticMethodReturnPromise<T$1 extends ControllerStaticMethod> = ToPromise<StaticMethodReturn<T$1>>;
type StaticMethodOptions<T$1 extends (req: VovkRequest<KnownAny$1, KnownAny$1, KnownAny$1>, params: KnownAny$1) => void | object | JSONLinesResponder<TStreamIteration> | Promise<JSONLinesResponder<TStreamIteration>>, TFetcherOptions extends Record<string, KnownAny$1>, TStreamIteration, R$1, F$1 extends VovkFetcherOptions<KnownAny$1>> = Partial<TFetcherOptions & {
  transform: (staticMethodReturn: Awaited<StaticMethodReturn<T$1>> extends JSONLinesResponder<infer U> ? VovkStreamAsyncIterable<U> : Awaited<StaticMethodReturn<T$1>>, resp: Response) => R$1;
  fetcher: VovkFetcher<F$1>;
}>;
type ClientMethodReturn<T$1 extends (req: VovkRequest<KnownAny$1, KnownAny$1, KnownAny$1>, params: KnownAny$1) => void | object | JSONLinesResponder<TStreamIteration> | Promise<JSONLinesResponder<TStreamIteration>>, TStreamIteration, R$1> = R$1 extends object ? Promise<Awaited<R$1>> : ReturnType<T$1> extends Promise<JSONLinesResponder<infer U>> | JSONLinesResponder<infer U> | Iterator<infer U> | AsyncIterator<infer U> ? Promise<VovkStreamAsyncIterable<U>> : StaticMethodReturnPromise<T$1>;
type ClientMethod<T$1 extends ((req: VovkRequest<KnownAny$1, KnownAny$1, KnownAny$1>, params: KnownAny$1) => void | object | JSONLinesResponder<TStreamIteration> | Promise<JSONLinesResponder<TStreamIteration>>) & {
  __types?: {
    body: KnownAny$1;
    query: KnownAny$1;
    params: KnownAny$1;
    output: KnownAny$1;
    iteration: KnownAny$1;
    isForm: boolean;
  };
}, TFetcherOptions extends Record<string, KnownAny$1>, TStreamIteration extends KnownAny$1 = unknown> = (IsEmptyObject<StaticMethodInput<T$1>> extends true ? <R$1, F$1 extends VovkFetcherOptions<KnownAny$1> = VovkFetcherOptions<TFetcherOptions>>(options?: Prettify$1<StaticMethodOptions<T$1, TFetcherOptions, TStreamIteration, R$1, F$1>>) => ClientMethodReturn<T$1, TStreamIteration, R$1> : <R$1, F$1 extends VovkFetcherOptions<KnownAny$1> = VovkFetcherOptions<TFetcherOptions>>(options: Prettify$1<StaticMethodInput<T$1> & StaticMethodOptions<T$1, TFetcherOptions, TStreamIteration, R$1, F$1>>) => ClientMethodReturn<T$1, TStreamIteration, R$1>) & {
  isRPC: true;
  schema: VovkHandlerSchema;
  controllerSchema: VovkControllerSchema;
  segmentSchema: VovkSegmentSchema;
  fullSchema: VovkSchema;
  getURL: IsEmptyObject<Pick<Prettify$1<StaticMethodInput<T$1>>, Extract<'params' | 'query', keyof Prettify$1<StaticMethodInput<T$1>>>>> extends true ? (urlInput?: {
    apiRoot?: string;
  }) => string : (urlInput: Pick<Prettify$1<StaticMethodInput<T$1>>, Extract<'params' | 'query', keyof Prettify$1<StaticMethodInput<T$1>>>> & {
    apiRoot?: string;
  }) => string;
  apiRoot: string;
  queryKey: (key?: unknown[]) => unknown[];
  __types: T$1['__types'];
};
type OmitNever<T$1> = { [K in keyof T$1 as T$1[K] extends never ? never : K]: T$1[K] };
type VovkClientWithNever<T$1, TFetcherOptions extends {
  [key: string]: KnownAny$1;
}> = { [K in keyof T$1]: T$1[K] extends ((...args: KnownAny$1) => KnownAny$1) ? ClientMethod<T$1[K], TFetcherOptions> : never };
type VovkRPCModule<T$1, TFetcherOptions extends {
  [key: string]: KnownAny$1;
}> = OmitNever<VovkClientWithNever<T$1, TFetcherOptions>> & {
  withDefaults: (newOptions?: VovkFetcherOptions<TFetcherOptions>) => VovkRPCModule<T$1, TFetcherOptions>;
};
/**
 * Fetcher function type for client requests.
 * @see https://vovk.dev/imports
 */
type VovkFetcher<TFetcherOptions> = (options: {
  name: string;
  httpMethod: HttpMethod;
  getURL: (data: {
    apiRoot: string | undefined;
    params: unknown;
    query: unknown;
  }) => string;
  validate: (inputOptions: {
    body?: unknown;
    query?: unknown;
    params?: unknown;
    meta?: unknown;
  } & TFetcherOptions, meta: {
    endpoint: string;
  }) => KnownAny$1 | Promise<KnownAny$1>;
  defaultStreamHandler: typeof defaultStreamHandler;
  defaultHandler: typeof defaultHandler;
  schema: VovkHandlerSchema;
}, input: {
  body?: unknown;
  query?: unknown;
  params?: unknown;
  meta?: unknown;
} & TFetcherOptions) => Promise<[KnownAny$1, Response]>;
type VovkFetcherOptions<T$1> = T$1 & {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: VovkValidateOnClient<T$1> | Promise<{
    validateOnClient: VovkValidateOnClient<T$1>;
  }>;
  interpretAs?: string;
  init?: RequestInit;
};
/**
 * Client-side validation function type.
 * @see https://vovk.dev/imports
 */
type VovkValidateOnClient<TFetcherOptions> = (input: {
  body?: unknown;
  query?: unknown;
  params?: unknown;
  meta?: unknown;
} & TFetcherOptions, validation: Omit<Exclude<VovkHandlerSchema['validation'], undefined>, 'output' | 'iteration'>, meta: {
  fullSchema: VovkSchema;
  endpoint: string;
}) => KnownAny$1 | Promise<KnownAny$1>;
//#endregion
//#region node_modules/@standard-schema/spec/dist/index.d.ts
/** The Standard Typed interface. This is a base type extended by other specs. */
interface StandardTypedV1$1<Input = unknown, Output = Input> {
  /** The Standard properties. */
  readonly "~standard": StandardTypedV1$1.Props<Input, Output>;
}
declare namespace StandardTypedV1$1 {
  /** The Standard Typed properties interface. */
  interface Props<Input = unknown, Output = Input> {
    /** The version number of the standard. */
    readonly version: 1;
    /** The vendor name of the schema library. */
    readonly vendor: string;
    /** Inferred types associated with the schema. */
    readonly types?: Types<Input, Output> | undefined;
  }
  /** The Standard Typed types interface. */
  interface Types<Input = unknown, Output = Input> {
    /** The input type of the schema. */
    readonly input: Input;
    /** The output type of the schema. */
    readonly output: Output;
  }
  /** Infers the input type of a Standard Typed. */
  type InferInput<Schema extends StandardTypedV1$1> = NonNullable<Schema["~standard"]["types"]>["input"];
  /** Infers the output type of a Standard Typed. */
  type InferOutput<Schema extends StandardTypedV1$1> = NonNullable<Schema["~standard"]["types"]>["output"];
}
/** The Standard Schema interface. */
interface StandardSchemaV1$1<Input = unknown, Output = Input> {
  /** The Standard Schema properties. */
  readonly "~standard": StandardSchemaV1$1.Props<Input, Output>;
}
declare namespace StandardSchemaV1$1 {
  /** The Standard Schema properties interface. */
  interface Props<Input = unknown, Output = Input> extends StandardTypedV1$1.Props<Input, Output> {
    /** Validates unknown input values. */
    readonly validate: (value: unknown, options?: StandardSchemaV1$1.Options | undefined) => Result<Output> | Promise<Result<Output>>;
  }
  /** The result interface of the validate function. */
  type Result<Output> = SuccessResult<Output> | FailureResult;
  /** The result interface if validation succeeds. */
  interface SuccessResult<Output> {
    /** The typed output value. */
    readonly value: Output;
    /** A falsy value for `issues` indicates success. */
    readonly issues?: undefined;
  }
  interface Options {
    /** Explicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }
  /** The result interface if validation fails. */
  interface FailureResult {
    /** The issues of failed validation. */
    readonly issues: ReadonlyArray<Issue>;
  }
  /** The issue interface of the failure output. */
  interface Issue {
    /** The error message of the issue. */
    readonly message: string;
    /** The path of the issue, if any. */
    readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
  }
  /** The path segment interface of the issue. */
  interface PathSegment {
    /** The key representing a path segment. */
    readonly key: PropertyKey;
  }
  /** The Standard types interface. */
  interface Types<Input = unknown, Output = Input> extends StandardTypedV1$1.Types<Input, Output> {}
  /** Infers the input type of a Standard. */
  type InferInput<Schema extends StandardTypedV1$1> = StandardTypedV1$1.InferInput<Schema>;
  /** Infers the output type of a Standard. */
  type InferOutput<Schema extends StandardTypedV1$1> = StandardTypedV1$1.InferOutput<Schema>;
}
/** The Standard JSON Schema interface. */
interface StandardJSONSchemaV1$1<Input = unknown, Output = Input> {
  /** The Standard JSON Schema properties. */
  readonly "~standard": StandardJSONSchemaV1$1.Props<Input, Output>;
}
declare namespace StandardJSONSchemaV1$1 {
  /** The Standard JSON Schema properties interface. */
  interface Props<Input = unknown, Output = Input> extends StandardTypedV1$1.Props<Input, Output> {
    /** Methods for generating the input/output JSON Schema. */
    readonly jsonSchema: StandardJSONSchemaV1$1.Converter;
  }
  /** The Standard JSON Schema converter interface. */
  interface Converter {
    /** Converts the input type to JSON Schema. May throw if conversion is not supported. */
    readonly input: (options: StandardJSONSchemaV1$1.Options) => Record<string, unknown>;
    /** Converts the output type to JSON Schema. May throw if conversion is not supported. */
    readonly output: (options: StandardJSONSchemaV1$1.Options) => Record<string, unknown>;
  }
  /**
   * The target version of the generated JSON Schema.
   *
   * It is *strongly recommended* that implementers support `"draft-2020-12"` and `"draft-07"`, as they are both in wide use. All other targets can be implemented on a best-effort basis. Libraries should throw if they don't support a specified target.
   *
   * The `"openapi-3.0"` target is intended as a standardized specifier for OpenAPI 3.0 which is a superset of JSON Schema `"draft-04"`.
   */
  type Target = "draft-2020-12" | "draft-07" | "openapi-3.0" | ({} & string);
  /** The options for the input/output methods. */
  interface Options {
    /** Specifies the target version of the generated JSON Schema. Support for all versions is on a best-effort basis. If a given version is not supported, the library should throw. */
    readonly target: Target;
    /** Explicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }
  /** The Standard types interface. */
  interface Types<Input = unknown, Output = Input> extends StandardTypedV1$1.Types<Input, Output> {}
  /** Infers the input type of a Standard. */
  type InferInput<Schema extends StandardTypedV1$1> = StandardTypedV1$1.InferInput<Schema>;
  /** Infers the output type of a Standard. */
  type InferOutput<Schema extends StandardTypedV1$1> = StandardTypedV1$1.InferOutput<Schema>;
}
//#endregion
//#region node_modules/vovk/dist/validation/types.d.ts
interface CombinedProps<Input = unknown, Output = Input> extends StandardSchemaV1$1.Props<Input, Output>, StandardJSONSchemaV1$1.Props<Input, Output> {}
/**
 * An interface that combines StandardJSONSchema and StandardSchema.
 * */
interface CombinedSpec<Input = unknown, Output = Input> {
  '~standard': CombinedProps<Input, Output>;
}
declare namespace CombinedSpec {
  type Target = StandardJSONSchemaV1$1.Target;
  type InferInput<T$1 extends StandardSchemaV1$1> = StandardSchemaV1$1.InferInput<T$1>;
  type InferOutput<T$1 extends StandardSchemaV1$1> = StandardSchemaV1$1.InferOutput<T$1>;
  type SuccessResult<T$1> = StandardSchemaV1$1.SuccessResult<T$1>;
}
//#endregion
//#region node_modules/vovk/dist/tools/types.d.ts
type VovkToolOptions = {
  hidden?: boolean;
  name?: string;
  title?: string;
  description?: string;
};
//#endregion
//#region node_modules/vovk/dist/types.d.ts
type KnownAny = any;
type StaticClass = Function;
type VovkPackageJson = PackageJson & {
  rs_name?: string;
  py_name?: string;
};
/**
 * Schema for an individual handler, available as MyRPC.myHandler.schema and MyController.myHandler.schema
 */
type VovkHandlerSchema = {
  path: string;
  httpMethod: string;
  validation?: {
    query?: VovkJSONSchemaBase;
    body?: VovkJSONSchemaBase;
    params?: VovkJSONSchemaBase;
    output?: VovkJSONSchemaBase;
    iteration?: VovkJSONSchemaBase;
  };
  operationObject?: VovkOperationObject;
  misc?: Record<string, unknown>;
};
/**
 * Represents the schema of a controller
 */
type VovkControllerSchema = {
  rpcModuleName: string;
  originalControllerName?: string;
  prefix?: string;
  forceApiJ?: string;
  handlers: {
    [key: string]: VovkHandlerSchema;
  };
};
/**
 * Represents the schema of a segment
 */
type VovkSegmentSchema = {
  $schema: typeof VovkSchemaIdEnum.SEGMENT | (string & {});
  emitSchema: boolean;
  segmentName: string;
  segmentType: 'segment' | 'mixin' | (string & {});
  forceApiRoot?: string;
  controllers: {
    [key: string]: VovkControllerSchema;
  };
  meta?: {
    openAPIObject?: Partial<Omit<OpenAPIObject, 'paths'>>;
    package?: VovkPackageJson;
  };
};
/**
 * Represents the meta schema
 */
type VovkMetaSchema = {
  $schema: typeof VovkSchemaIdEnum.META | (string & {});
  config: RequireFields<Partial<VovkStrictConfig>, '$schema'>;
  openAPIObject?: Partial<OpenAPIObject>;
};
/**
 * Represents the full schema of composed client or a segment in segmented client.
 * @see https://vovk.dev/schema
 */
type VovkSchema = {
  $schema: typeof VovkSchemaIdEnum.SCHEMA | (string & {});
  segments: {
    [key: string]: VovkSegmentSchema;
  };
  meta?: VovkMetaSchema;
};
type VovkControllerInternal = {
  _segmentName: string;
  _rpcModuleName?: VovkControllerSchema['rpcModuleName'];
  _prefix?: VovkControllerSchema['prefix'];
  _handlers: VovkControllerSchema['handlers'];
  _handlersMetadata?: Record<string, {
    staticParams?: Record<string, string>[];
  }>;
  _onError?: (err: Error, req: VovkRequest) => void | Promise<void>;
  _onSuccess?: (resp: unknown, req: VovkRequest) => void | Promise<void>;
  _onBefore?: (req: VovkRequest) => void | Promise<void>;
};
type VovkController = StaticClass & VovkControllerInternal & {
  [key: string]: unknown;
};
/**
 * The Vovk.ts request object, extending Next.js's NextRequest
 * Accepts three generic parameters:
 * - TBody: the expected shape of the request body (default: unknown)
 * - TQuery: the expected shape of the query parameters (default: unknown)
 * - TParams: the expected shape of the route parameters (default: unknown)
 * @see https://vovk.dev/procedure
 */
interface VovkRequest<TBody = unknown, TQuery$1 = unknown, TParams$1 = unknown> extends Request {
  json: () => Promise<TBody>;
  nextUrl: {
    search: string;
    searchParams: {
      get: <KEY extends keyof TQuery$1>(key: KEY) => TQuery$1[KEY] extends readonly (infer ITEM)[] ? ITEM : TQuery$1[KEY];
      getAll: <KEY extends keyof TQuery$1>(key: KEY) => TQuery$1[KEY] extends unknown[] ? TQuery$1[KEY] : TQuery$1[KEY][];
      entries: () => IterableIterator<[keyof TQuery$1, TQuery$1[keyof TQuery$1]]>;
      forEach: (callbackfn: (value: TQuery$1[keyof TQuery$1], key: keyof TQuery$1) => void) => void;
      keys: () => IterableIterator<keyof TQuery$1>;
      values: () => IterableIterator<TQuery$1[keyof TQuery$1]>;
    };
  };
  vovk: {
    body: () => Promise<TBody>;
    query: () => TQuery$1;
    meta: <T$1 = Record<KnownAny, KnownAny>>(meta?: T$1 | null) => T$1;
    form: <T$1 = TBody>() => Promise<T$1>;
    params: () => TParams$1;
  };
}
type ControllerStaticMethod<REQ extends VovkRequest = VovkRequest, TParams$1 extends {
  [key: string]: string;
} = KnownAny> = ((req: REQ, params: TParams$1) => unknown) & {
  _controller?: VovkController;
};
type VovkTypedMethod<T$1 extends (...args: KnownAny[]) => unknown, B = unknown, Q = unknown, P$1 = unknown, O = unknown, I = unknown, TIsForm extends boolean = false> = T$1 & {
  __types: {
    body: B;
    query: Q;
    params: P$1;
    output: O;
    iteration: I;
    isForm: TIsForm;
  };
  isRPC?: boolean;
};
type StreamAbortMessage = {
  isError: true;
  reason: KnownAny;
};
type VovkValidationType = 'body' | 'query' | 'params' | 'output' | 'iteration' | 'tool-input';
/**
 * HTTP methods
 */
declare enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
}
/**
 * Base JSON Schema type used in Vovk.ts for validation and code generation.
 * @see https://vovk.dev/schema
 */
type VovkJSONSchemaBase = {
  $schema?: 'https://json-schema.org/draft/2020-12/schema' | 'http://json-schema.org/draft-07/schema#';
  type?: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null' | 'integer';
  format?: string;
  pattern?: string;
  $ref?: string;
  items?: VovkJSONSchemaBase;
  enum?: KnownAny[];
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  minItems?: number;
  maxItems?: number;
  title?: string;
  description?: string;
  properties?: {
    [key: string]: VovkJSONSchemaBase;
  };
  required?: string[];
  examples?: KnownAny[];
  $defs?: {
    [key: string]: VovkJSONSchemaBase;
  };
  definitions?: {
    [key: string]: VovkJSONSchemaBase;
  };
  additionalProperties?: boolean;
  anyOf?: VovkJSONSchemaBase[];
  oneOf?: VovkJSONSchemaBase[];
  allOf?: VovkJSONSchemaBase[];
  const?: KnownAny;
  example?: KnownAny;
  contentEncoding?: string;
  contentMediaType?: string;
  minLength?: number;
  maxLength?: number;
  [key: `x-${string}`]: KnownAny;
};
type VovkOperationObject = OperationObject & {
  'x-tool'?: VovkToolOptions;
};
/**
 * IDs of the JSON Schema files that can be generated by Vovk.ts
 */
declare enum VovkSchemaIdEnum {
  META = "https://vovk.dev/api/schema/v3/meta.json",
  CONFIG = "https://vovk.dev/api/schema/v3/config.json",
  SEGMENT = "https://vovk.dev/api/schema/v3/segment.json",
  SCHEMA = "https://vovk.dev/api/schema/v3/schema.json",
}
type VovkReadmeConfig = {
  banner?: string;
  installCommand?: string;
  description?: string;
};
type VovkSamplesConfig = {
  apiRoot?: string;
  headers?: Record<string, string>;
};
type IncludeExcludeSegments = {
  excludeSegments?: never;
  includeSegments?: string[];
} | {
  excludeSegments?: string[];
  includeSegments?: never;
};
type ClientConfigCommon = {
  enabled?: boolean;
  outDir?: string;
  fromTemplates?: string[];
  prettifyClient?: boolean;
  outputConfig?: VovkOutputConfig<GeneratorConfigImports>;
} & IncludeExcludeSegments;
type ClientConfigComposed = ClientConfigCommon;
type ClientConfigSegmented = ClientConfigCommon;
type VovkBundleConfig = {
  requires?: Record<string, string>;
  prebundleOutDir?: string;
  keepPrebundleDir?: boolean;
  outDir?: string;
  build: (options: {
    outDir: string;
    prebundleDir: string;
    entry: string;
  }) => Promise<void>;
  outputConfig?: VovkOutputConfig<GeneratorConfigImports>;
} & IncludeExcludeSegments;
type GeneratorConfigImports = {
  fetcher?: string;
  validateOnClient?: string | null;
  createRPC?: string;
};
type SegmentConfigImports = {
  fetcher?: string;
  validateOnClient?: string | null;
};
interface VovkOutputConfig<TImports extends GeneratorConfigImports = GeneratorConfigImports> {
  origin?: string | null;
  package?: VovkPackageJson;
  readme?: VovkReadmeConfig;
  samples?: VovkSamplesConfig;
  openAPIObject?: Partial<OpenAPIObject>;
  reExports?: Record<string, string>;
  imports?: TImports;
}
type ClientTemplateDef = {
  extends?: string;
  templatePath?: string | null;
  composedClient?: Omit<ClientConfigComposed, 'fromTemplates' | 'enabled'>;
  segmentedClient?: Omit<ClientConfigSegmented, 'fromTemplates' | 'enabled'>;
  requires?: Record<string, string>;
  outputConfig?: VovkOutputConfig<GeneratorConfigImports>;
};
type GetOpenAPINameFn = (config: {
  operationObject: VovkOperationObject;
  method: HttpMethod;
  path: string;
  openAPIObject: OpenAPIObject;
}) => string;
interface VovkOpenAPIMixin {
  source: {
    file: string;
  } | {
    url: string;
    fallback?: string;
  } | {
    object: OpenAPIObject;
  };
  apiRoot?: string;
  getModuleName?: 'nestjs-operation-id' | (string & {}) | 'api' | GetOpenAPINameFn;
  getMethodName?: 'nestjs-operation-id' | 'camel-case-operation-id' | 'auto' | GetOpenAPINameFn;
  errorMessageKey?: string;
  mixinName?: string;
}
interface VovkOpenAPIMixinNormalized extends Omit<VovkOpenAPIMixin, 'source' | 'getMethodName' | 'getModuleName'> {
  source: Exclude<NonNullable<VovkOpenAPIMixin['source']>, {
    file: string;
  } | {
    url: string;
  }>;
  getMethodName: GetOpenAPINameFn;
  getModuleName: GetOpenAPINameFn;
}
interface VovkSegmentConfig extends VovkOutputConfig<SegmentConfigImports> {
  rootEntry?: string;
  segmentNameOverride?: string;
  openAPIMixin?: VovkOpenAPIMixin;
}
type VovkUserConfig = {
  $schema?: typeof VovkSchemaIdEnum.CONFIG | (string & {});
  exposeConfigKeys?: boolean | (keyof VovkStrictConfig | (string & {}))[];
  schemaOutDir?: string;
  modulesDir?: string;
  rootEntry?: string;
  logLevel?: 'error' | 'trace' | 'debug' | 'info' | 'warn';
  libs?: {
    ajv?: KnownAny;
    [key: string]: KnownAny;
  };
  devHttps?: boolean;
  composedClient?: ClientConfigComposed;
  segmentedClient?: ClientConfigSegmented;
  bundle?: VovkBundleConfig;
  clientTemplateDefs?: Record<string, ClientTemplateDef>;
  rootSegmentModulesDirName?: string;
  moduleTemplates?: {
    service?: string;
    controller?: string;
    [key: string]: string | undefined;
  };
  outputConfig?: VovkOutputConfig<GeneratorConfigImports> & {
    segments?: Record<string, VovkSegmentConfig>;
  };
};
/**
 * The user configuration for Vovk.ts
 * @see https://vovk.dev/config
 */

type VovkStrictConfig = Required<Omit<VovkUserConfig, 'exposeConfigKeys' | 'libs' | 'composedClient' | 'segmentedClient' | 'bundle'>> & {
  exposeConfigKeys: (keyof VovkStrictConfig | string)[];
  bundle: Required<Omit<NonNullable<VovkUserConfig['bundle']>, 'includeSegments' | 'excludeSegments'>> & IncludeExcludeSegments;
  libs: Record<string, KnownAny>;
  composedClient: RequireFields<ClientConfigComposed, 'enabled' | 'fromTemplates' | 'outDir' | 'prettifyClient'>;
  segmentedClient: RequireFields<ClientConfigSegmented, 'enabled' | 'fromTemplates' | 'outDir' | 'prettifyClient'>;
  outputConfig: VovkOutputConfig<GeneratorConfigImports> & {
    segments?: Record<string, Omit<VovkSegmentConfig, 'openAPIMixin'> & {
      openAPIMixin?: VovkOpenAPIMixinNormalized;
    }>;
  };
};
type RequireFields<T$1, K$1 extends keyof T$1> = T$1 & Required<Pick<T$1, K$1>>;
type IsEmptyObject<T$1> = T$1 extends object ? keyof T$1 extends never ? true : T$1 extends Partial<T$1> ? Partial<T$1> extends T$1 ? true : false : false : false;
type Prettify$1<T$1> = { [K in keyof T$1]: T$1[K] } & {};
//#endregion
//#region node_modules/zod/v4/core/json-schema.d.cts
type _JSONSchema = boolean | JSONSchema;
type JSONSchema = {
  [k: string]: unknown;
  $schema?: "https://json-schema.org/draft/2020-12/schema" | "http://json-schema.org/draft-07/schema#" | "http://json-schema.org/draft-04/schema#";
  $id?: string;
  $anchor?: string;
  $ref?: string;
  $dynamicRef?: string;
  $dynamicAnchor?: string;
  $vocabulary?: Record<string, boolean>;
  $comment?: string;
  $defs?: Record<string, JSONSchema>;
  type?: "object" | "array" | "string" | "number" | "boolean" | "null" | "integer";
  additionalItems?: _JSONSchema;
  unevaluatedItems?: _JSONSchema;
  prefixItems?: _JSONSchema[];
  items?: _JSONSchema | _JSONSchema[];
  contains?: _JSONSchema;
  additionalProperties?: _JSONSchema;
  unevaluatedProperties?: _JSONSchema;
  properties?: Record<string, _JSONSchema>;
  patternProperties?: Record<string, _JSONSchema>;
  dependentSchemas?: Record<string, _JSONSchema>;
  propertyNames?: _JSONSchema;
  if?: _JSONSchema;
  then?: _JSONSchema;
  else?: _JSONSchema;
  allOf?: JSONSchema[];
  anyOf?: JSONSchema[];
  oneOf?: JSONSchema[];
  not?: _JSONSchema;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number | boolean;
  minimum?: number;
  exclusiveMinimum?: number | boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxContains?: number;
  minContains?: number;
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  dependentRequired?: Record<string, string[]>;
  enum?: Array<string | number | boolean | null>;
  const?: string | number | boolean | null;
  id?: string;
  title?: string;
  description?: string;
  default?: unknown;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  nullable?: boolean;
  examples?: unknown[];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  contentSchema?: JSONSchema;
  _prefault?: unknown;
};
type BaseSchema = JSONSchema;
//#endregion
//#region node_modules/zod/v4/core/standard-schema.d.cts
/** The Standard interface. */
interface StandardTypedV1<Input = unknown, Output = Input> {
  /** The Standard properties. */
  readonly "~standard": StandardTypedV1.Props<Input, Output>;
}
declare namespace StandardTypedV1 {
  /** The Standard properties interface. */
  interface Props<Input = unknown, Output = Input> {
    /** The version number of the standard. */
    readonly version: 1;
    /** The vendor name of the schema library. */
    readonly vendor: string;
    /** Inferred types associated with the schema. */
    readonly types?: Types<Input, Output> | undefined;
  }
  /** The Standard types interface. */
  interface Types<Input = unknown, Output = Input> {
    /** The input type of the schema. */
    readonly input: Input;
    /** The output type of the schema. */
    readonly output: Output;
  }
  /** Infers the input type of a Standard. */
  type InferInput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["input"];
  /** Infers the output type of a Standard. */
  type InferOutput<Schema extends StandardTypedV1> = NonNullable<Schema["~standard"]["types"]>["output"];
}
/** The Standard Schema interface. */
interface StandardSchemaV1<Input = unknown, Output = Input> {
  /** The Standard Schema properties. */
  readonly "~standard": StandardSchemaV1.Props<Input, Output>;
}
declare namespace StandardSchemaV1 {
  /** The Standard Schema properties interface. */
  interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
    /** Validates unknown input values. */
    readonly validate: (value: unknown, options?: StandardSchemaV1.Options | undefined) => Result<Output> | Promise<Result<Output>>;
  }
  /** The result interface of the validate function. */
  type Result<Output> = SuccessResult<Output> | FailureResult;
  /** The result interface if validation succeeds. */
  interface SuccessResult<Output> {
    /** The typed output value. */
    readonly value: Output;
    /** The absence of issues indicates success. */
    readonly issues?: undefined;
  }
  interface Options {
    /** Implicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }
  /** The result interface if validation fails. */
  interface FailureResult {
    /** The issues of failed validation. */
    readonly issues: ReadonlyArray<Issue>;
  }
  /** The issue interface of the failure output. */
  interface Issue {
    /** The error message of the issue. */
    readonly message: string;
    /** The path of the issue, if any. */
    readonly path?: ReadonlyArray<PropertyKey | PathSegment> | undefined;
  }
  /** The path segment interface of the issue. */
  interface PathSegment {
    /** The key representing a path segment. */
    readonly key: PropertyKey;
  }
  /** The Standard types interface. */
  interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {}
  /** Infers the input type of a Standard. */
  type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
  /** Infers the output type of a Standard. */
  type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
/** The Standard JSON Schema interface. */
interface StandardJSONSchemaV1<Input = unknown, Output = Input> {
  /** The Standard JSON Schema properties. */
  readonly "~standard": StandardJSONSchemaV1.Props<Input, Output>;
}
declare namespace StandardJSONSchemaV1 {
  /** The Standard JSON Schema properties interface. */
  interface Props<Input = unknown, Output = Input> extends StandardTypedV1.Props<Input, Output> {
    /** Methods for generating the input/output JSON Schema. */
    readonly jsonSchema: Converter;
  }
  /** The Standard JSON Schema converter interface. */
  interface Converter {
    /** Converts the input type to JSON Schema. May throw if conversion is not supported. */
    readonly input: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
    /** Converts the output type to JSON Schema. May throw if conversion is not supported. */
    readonly output: (options: StandardJSONSchemaV1.Options) => Record<string, unknown>;
  }
  /** The target version of the generated JSON Schema.
   *
   * It is *strongly recommended* that implementers support `"draft-2020-12"` and `"draft-07"`, as they are both in wide use.
   *
   * The `"openapi-3.0"` target is intended as a standardized specifier for OpenAPI 3.0 which is a superset of JSON Schema `"draft-04"`.
   *
   * All other targets can be implemented on a best-effort basis. Libraries should throw if they don't support a specified target.
   */
  type Target = "draft-2020-12" | "draft-07" | "openapi-3.0" | ({} & string);
  /** The options for the input/output methods. */
  interface Options {
    /** Specifies the target version of the generated JSON Schema. Support for all versions is on a best-effort basis. If a given version is not supported, the library should throw. */
    readonly target: Target;
    /** Implicit support for additional vendor-specific parameters, if needed. */
    readonly libraryOptions?: Record<string, unknown> | undefined;
  }
  /** The Standard types interface. */
  interface Types<Input = unknown, Output = Input> extends StandardTypedV1.Types<Input, Output> {}
  /** Infers the input type of a Standard. */
  type InferInput<Schema extends StandardTypedV1> = StandardTypedV1.InferInput<Schema>;
  /** Infers the output type of a Standard. */
  type InferOutput<Schema extends StandardTypedV1> = StandardTypedV1.InferOutput<Schema>;
}
interface StandardSchemaWithJSONProps<Input = unknown, Output = Input> extends StandardSchemaV1.Props<Input, Output>, StandardJSONSchemaV1.Props<Input, Output> {}
//#endregion
//#region node_modules/zod/v4/core/registries.d.cts
declare const $output: unique symbol;
type $output = typeof $output;
declare const $input: unique symbol;
type $input = typeof $input;
type $replace<Meta, S extends $ZodType> = Meta extends $output ? output<S> : Meta extends $input ? input<S> : Meta extends (infer M)[] ? $replace<M, S>[] : Meta extends ((...args: infer P) => infer R) ? (...args: { [K in keyof P]: $replace<P[K], S> }) => $replace<R, S> : Meta extends object ? { [K in keyof Meta]: $replace<Meta[K], S> } : Meta;
type MetadataType = object | undefined;
declare class $ZodRegistry<Meta extends MetadataType = MetadataType, Schema extends $ZodType = $ZodType> {
  _meta: Meta;
  _schema: Schema;
  _map: WeakMap<Schema, $replace<Meta, Schema>>;
  _idmap: Map<string, Schema>;
  add<S extends Schema>(schema: S, ..._meta: undefined extends Meta ? [$replace<Meta, S>?] : [$replace<Meta, S>]): this;
  clear(): this;
  remove(schema: Schema): this;
  get<S extends Schema>(schema: S): $replace<Meta, S> | undefined;
  has(schema: Schema): boolean;
}
interface JSONSchemaMeta {
  id?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
  deprecated?: boolean | undefined;
  [k: string]: unknown;
}
interface GlobalMeta extends JSONSchemaMeta {}
//#endregion
//#region node_modules/zod/v4/core/to-json-schema.d.cts
type Processor<T$1 extends $ZodType = $ZodType> = (schema: T$1, ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void;
interface JSONSchemaGeneratorParams {
  processors: Record<string, Processor>;
  /** A registry used to look up metadata for each schema. Any schema with an `id` property will be extracted as a $def.
   *  @default globalRegistry */
  metadata?: $ZodRegistry<Record<string, any>>;
  /** The JSON Schema version to target.
   * - `"draft-2020-12"` — Default. JSON Schema Draft 2020-12
   * - `"draft-07"` — JSON Schema Draft 7
   * - `"draft-04"` — JSON Schema Draft 4
   * - `"openapi-3.0"` — OpenAPI 3.0 Schema Object */
  target?: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string) | undefined;
  /** How to handle unrepresentable types.
   * - `"throw"` — Default. Unrepresentable types throw an error
   * - `"any"` — Unrepresentable types become `{}` */
  unrepresentable?: "throw" | "any";
  /** Arbitrary custom logic that can be used to modify the generated JSON Schema. */
  override?: (ctx: {
    zodSchema: $ZodTypes;
    jsonSchema: BaseSchema;
    path: (string | number)[];
  }) => void;
  /** Whether to extract the `"input"` or `"output"` type. Relevant to transforms, defaults, coerced primitives, etc.
   * - `"output"` — Default. Convert the output schema.
   * - `"input"` — Convert the input schema. */
  io?: "input" | "output";
  cycles?: "ref" | "throw";
  reused?: "ref" | "inline";
  external?: {
    registry: $ZodRegistry<{
      id?: string | undefined;
    }>;
    uri?: ((id: string) => string) | undefined;
    defs: Record<string, BaseSchema>;
  } | undefined;
}
/**
 * Parameters for the toJSONSchema function.
 */
type ToJSONSchemaParams = Omit<JSONSchemaGeneratorParams, "processors" | "external">;
interface ProcessParams {
  schemaPath: $ZodType[];
  path: (string | number)[];
}
interface Seen {
  /** JSON Schema result for this Zod schema */
  schema: BaseSchema;
  /** A cached version of the schema that doesn't get overwritten during ref resolution */
  def?: BaseSchema;
  defId?: string | undefined;
  /** Number of times this schema was encountered during traversal */
  count: number;
  /** Cycle path */
  cycle?: (string | number)[] | undefined;
  isParent?: boolean | undefined;
  /** Schema to inherit JSON Schema properties from (set by processor for wrappers) */
  ref?: $ZodType | null;
  /** JSON Schema property path for this schema */
  path?: (string | number)[] | undefined;
}
interface ToJSONSchemaContext {
  processors: Record<string, Processor>;
  metadataRegistry: $ZodRegistry<Record<string, any>>;
  target: "draft-04" | "draft-07" | "draft-2020-12" | "openapi-3.0" | ({} & string);
  unrepresentable: "throw" | "any";
  override: (ctx: {
    zodSchema: $ZodType;
    jsonSchema: BaseSchema;
    path: (string | number)[];
  }) => void;
  io: "input" | "output";
  counter: number;
  seen: Map<$ZodType, Seen>;
  cycles: "ref" | "throw";
  reused: "ref" | "inline";
  external?: {
    registry: $ZodRegistry<{
      id?: string | undefined;
    }>;
    uri?: ((id: string) => string) | undefined;
    defs: Record<string, BaseSchema>;
  } | undefined;
}
type ZodStandardSchemaWithJSON$1<T$1> = StandardSchemaWithJSONProps<input<T$1>, output<T$1>>;
interface ZodStandardJSONSchemaPayload<T$1> extends BaseSchema {
  "~standard": ZodStandardSchemaWithJSON$1<T$1>;
}
//#endregion
//#region node_modules/zod/v4/core/util.d.cts
type JWTAlgorithm = "HS256" | "HS384" | "HS512" | "RS256" | "RS384" | "RS512" | "ES256" | "ES384" | "ES512" | "PS256" | "PS384" | "PS512" | "EdDSA" | (string & {});
type MimeTypes = "application/json" | "application/xml" | "application/x-www-form-urlencoded" | "application/javascript" | "application/pdf" | "application/zip" | "application/vnd.ms-excel" | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" | "application/msword" | "application/vnd.openxmlformats-officedocument.wordprocessingml.document" | "application/vnd.ms-powerpoint" | "application/vnd.openxmlformats-officedocument.presentationml.presentation" | "application/octet-stream" | "application/graphql" | "text/html" | "text/plain" | "text/css" | "text/javascript" | "text/csv" | "image/png" | "image/jpeg" | "image/gif" | "image/svg+xml" | "image/webp" | "audio/mpeg" | "audio/ogg" | "audio/wav" | "audio/webm" | "video/mp4" | "video/webm" | "video/ogg" | "font/woff" | "font/woff2" | "font/ttf" | "font/otf" | "multipart/form-data" | (string & {});
type IsAny<T$1> = 0 extends 1 & T$1 ? true : false;
type Omit$1<T$1, K$1 extends keyof T$1> = Pick<T$1, Exclude<keyof T$1, K$1>>;
type MakePartial<T$1, K$1 extends keyof T$1> = Omit$1<T$1, K$1> & InexactPartial<Pick<T$1, K$1>>;
type NoUndefined<T$1> = T$1 extends undefined ? never : T$1;
type LoosePartial<T$1 extends object> = InexactPartial<T$1> & {
  [k: string]: unknown;
};
type Mask<Keys extends PropertyKey> = { [K in Keys]?: true };
type InexactPartial<T$1> = { [P in keyof T$1]?: T$1[P] | undefined };
type BuiltIn = (((...args: any[]) => any) | (new (...args: any[]) => any)) | {
  readonly [Symbol.toStringTag]: string;
} | Date | Error | Generator | Promise<unknown> | RegExp;
type MakeReadonly<T$1> = T$1 extends Map<infer K, infer V> ? ReadonlyMap<K, V> : T$1 extends Set<infer V> ? ReadonlySet<V> : T$1 extends [infer Head, ...infer Tail] ? readonly [Head, ...Tail] : T$1 extends Array<infer V> ? ReadonlyArray<V> : T$1 extends BuiltIn ? T$1 : Readonly<T$1>;
type SomeObject = Record<PropertyKey, any>;
type Identity<T$1> = T$1;
type Flatten<T$1> = Identity<{ [k in keyof T$1]: T$1[k] }>;
type Prettify<T$1> = { [K in keyof T$1]: T$1[K] } & {};
type Extend<A extends SomeObject, B extends SomeObject> = Flatten<keyof A & keyof B extends never ? A & B : { [K in keyof A as K extends keyof B ? never : K]: A[K] } & { [K in keyof B]: B[K] }>;
type TupleItems = ReadonlyArray<SomeType>;
type AnyFunc = (...args: any[]) => any;
type MaybeAsync<T$1> = T$1 | Promise<T$1>;
type EnumValue = string | number;
type EnumLike = Readonly<Record<string, EnumValue>>;
type ToEnum<T$1 extends EnumValue> = Flatten<{ [k in T$1]: k }>;
type Literal = string | number | bigint | boolean | null | undefined;
type Primitive = string | number | symbol | bigint | boolean | null | undefined;
type HasLength = {
  length: number;
};
type Numeric = number | bigint | Date;
type PropValues = Record<string, Set<Primitive>>;
type PrimitiveSet = Set<Primitive>;
type EmptyToNever<T$1> = keyof T$1 extends never ? never : T$1;
declare abstract class Class {
  constructor(..._args: any[]);
}
//#endregion
//#region node_modules/zod/v4/core/versions.d.cts
declare const version: {
  readonly major: 4;
  readonly minor: 3;
  readonly patch: number;
};
//#endregion
//#region node_modules/zod/v4/core/schemas.d.cts
interface ParseContext<T$1 extends $ZodIssueBase = never> {
  /** Customize error messages. */
  readonly error?: $ZodErrorMap<T$1>;
  /** Include the `input` field in issue objects. Default `false`. */
  readonly reportInput?: boolean;
  /** Skip eval-based fast path. Default `false`. */
  readonly jitless?: boolean;
}
/** @internal */
interface ParseContextInternal<T$1 extends $ZodIssueBase = never> extends ParseContext<T$1> {
  readonly async?: boolean | undefined;
  readonly direction?: "forward" | "backward";
  readonly skipChecks?: boolean;
}
interface ParsePayload<T$1 = unknown> {
  value: T$1;
  issues: $ZodRawIssue[];
  /** A may to mark a whole payload as aborted. Used in codecs/pipes. */
  aborted?: boolean;
}
type CheckFn<T$1> = (input: ParsePayload<T$1>) => MaybeAsync<void>;
interface $ZodTypeDef {
  type: "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "null" | "undefined" | "void" | "never" | "any" | "unknown" | "date" | "object" | "record" | "file" | "array" | "tuple" | "union" | "intersection" | "map" | "set" | "enum" | "literal" | "nullable" | "optional" | "nonoptional" | "success" | "transform" | "default" | "prefault" | "catch" | "nan" | "pipe" | "readonly" | "template_literal" | "promise" | "lazy" | "function" | "custom";
  error?: $ZodErrorMap<never> | undefined;
  checks?: $ZodCheck<never>[];
}
interface _$ZodTypeInternals {
  /** The `@zod/core` version of this schema */
  version: typeof version;
  /** Schema definition. */
  def: $ZodTypeDef;
  /** @internal Randomly generated ID for this schema. */
  /** @internal List of deferred initializers. */
  deferred: AnyFunc[] | undefined;
  /** @internal Parses input and runs all checks (refinements). */
  run(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
  /** @internal Parses input, doesn't run checks. */
  parse(payload: ParsePayload<any>, ctx: ParseContextInternal): MaybeAsync<ParsePayload>;
  /** @internal  Stores identifiers for the set of traits implemented by this schema. */
  traits: Set<string>;
  /** @internal Indicates that a schema output type should be considered optional inside objects.
   * @default Required
   */
  /** @internal */
  optin?: "optional" | undefined;
  /** @internal */
  optout?: "optional" | undefined;
  /** @internal The set of literal values that will pass validation. Must be an exhaustive set. Used to determine optionality in z.record().
   *
   * Defined on: enum, const, literal, null, undefined
   * Passthrough: optional, nullable, branded, default, catch, pipe
   * Todo: unions?
   */
  values?: PrimitiveSet | undefined;
  /** Default value bubbled up from  */
  /** @internal A set of literal discriminators used for the fast path in discriminated unions. */
  propValues?: PropValues | undefined;
  /** @internal This flag indicates that a schema validation can be represented with a regular expression. Used to determine allowable schemas in z.templateLiteral(). */
  pattern: RegExp | undefined;
  /** @internal The constructor function of this schema. */
  constr: new (def: any) => $ZodType;
  /** @internal A catchall object for bag metadata related to this schema. Commonly modified by checks using `onattach`. */
  bag: Record<string, unknown>;
  /** @internal The set of issues this schema might throw during type checking. */
  isst: $ZodIssueBase;
  /** @internal Subject to change, not a public API. */
  processJSONSchema?: ((ctx: ToJSONSchemaContext, json: BaseSchema, params: ProcessParams) => void) | undefined;
  /** An optional method used to override `toJSONSchema` logic. */
  toJSONSchema?: () => unknown;
  /** @internal The parent of this schema. Only set during certain clone operations. */
  parent?: $ZodType | undefined;
}
/** @internal */
interface $ZodTypeInternals<out O = unknown, out I = unknown> extends _$ZodTypeInternals {
  /** @internal The inferred output type */
  output: O;
  /** @internal The inferred input type */
  input: I;
}
type $ZodStandardSchema<T$1> = StandardSchemaV1.Props<input<T$1>, output<T$1>>;
type SomeType = {
  _zod: _$ZodTypeInternals;
};
interface $ZodType<O = unknown, I = unknown, Internals extends $ZodTypeInternals<O, I> = $ZodTypeInternals<O, I>> {
  _zod: Internals;
  "~standard": $ZodStandardSchema<this>;
}
interface _$ZodType<T$1 extends $ZodTypeInternals = $ZodTypeInternals> extends $ZodType<T$1["output"], T$1["input"], T$1> {}
declare const $ZodType: $constructor<$ZodType>;
interface $ZodStringDef extends $ZodTypeDef {
  type: "string";
  coerce?: boolean;
  checks?: $ZodCheck<string>[];
}
interface $ZodStringInternals<Input> extends $ZodTypeInternals<string, Input> {
  def: $ZodStringDef;
  /** @deprecated Internal API, use with caution (not deprecated) */
  pattern: RegExp;
  /** @deprecated Internal API, use with caution (not deprecated) */
  isst: $ZodIssueInvalidType;
  bag: LoosePartial<{
    minimum: number;
    maximum: number;
    patterns: Set<RegExp>;
    format: string;
    contentEncoding: string;
  }>;
}
interface $ZodString<Input = unknown> extends _$ZodType<$ZodStringInternals<Input>> {}
declare const $ZodString: $constructor<$ZodString>;
interface $ZodStringFormatDef<Format extends string = string> extends $ZodStringDef, $ZodCheckStringFormatDef<Format> {}
interface $ZodStringFormatInternals<Format extends string = string> extends $ZodStringInternals<string>, $ZodCheckStringFormatInternals {
  def: $ZodStringFormatDef<Format>;
}
interface $ZodStringFormat<Format extends string = string> extends $ZodType {
  _zod: $ZodStringFormatInternals<Format>;
}
declare const $ZodStringFormat: $constructor<$ZodStringFormat>;
interface $ZodGUIDInternals extends $ZodStringFormatInternals<"guid"> {}
interface $ZodGUID extends $ZodType {
  _zod: $ZodGUIDInternals;
}
declare const $ZodGUID: $constructor<$ZodGUID>;
interface $ZodUUIDDef extends $ZodStringFormatDef<"uuid"> {
  version?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8";
}
interface $ZodUUIDInternals extends $ZodStringFormatInternals<"uuid"> {
  def: $ZodUUIDDef;
}
interface $ZodUUID extends $ZodType {
  _zod: $ZodUUIDInternals;
}
declare const $ZodUUID: $constructor<$ZodUUID>;
interface $ZodEmailInternals extends $ZodStringFormatInternals<"email"> {}
interface $ZodEmail extends $ZodType {
  _zod: $ZodEmailInternals;
}
declare const $ZodEmail: $constructor<$ZodEmail>;
interface $ZodURLDef extends $ZodStringFormatDef<"url"> {
  hostname?: RegExp | undefined;
  protocol?: RegExp | undefined;
  normalize?: boolean | undefined;
}
interface $ZodURLInternals extends $ZodStringFormatInternals<"url"> {
  def: $ZodURLDef;
}
interface $ZodURL extends $ZodType {
  _zod: $ZodURLInternals;
}
declare const $ZodURL: $constructor<$ZodURL>;
interface $ZodEmojiInternals extends $ZodStringFormatInternals<"emoji"> {}
interface $ZodEmoji extends $ZodType {
  _zod: $ZodEmojiInternals;
}
declare const $ZodEmoji: $constructor<$ZodEmoji>;
interface $ZodNanoIDInternals extends $ZodStringFormatInternals<"nanoid"> {}
interface $ZodNanoID extends $ZodType {
  _zod: $ZodNanoIDInternals;
}
declare const $ZodNanoID: $constructor<$ZodNanoID>;
interface $ZodCUIDInternals extends $ZodStringFormatInternals<"cuid"> {}
interface $ZodCUID extends $ZodType {
  _zod: $ZodCUIDInternals;
}
declare const $ZodCUID: $constructor<$ZodCUID>;
interface $ZodCUID2Internals extends $ZodStringFormatInternals<"cuid2"> {}
interface $ZodCUID2 extends $ZodType {
  _zod: $ZodCUID2Internals;
}
declare const $ZodCUID2: $constructor<$ZodCUID2>;
interface $ZodULIDInternals extends $ZodStringFormatInternals<"ulid"> {}
interface $ZodULID extends $ZodType {
  _zod: $ZodULIDInternals;
}
declare const $ZodULID: $constructor<$ZodULID>;
interface $ZodXIDInternals extends $ZodStringFormatInternals<"xid"> {}
interface $ZodXID extends $ZodType {
  _zod: $ZodXIDInternals;
}
declare const $ZodXID: $constructor<$ZodXID>;
interface $ZodKSUIDInternals extends $ZodStringFormatInternals<"ksuid"> {}
interface $ZodKSUID extends $ZodType {
  _zod: $ZodKSUIDInternals;
}
declare const $ZodKSUID: $constructor<$ZodKSUID>;
interface $ZodISODateTimeDef extends $ZodStringFormatDef<"datetime"> {
  precision: number | null;
  offset: boolean;
  local: boolean;
}
interface $ZodISODateTimeInternals extends $ZodStringFormatInternals {
  def: $ZodISODateTimeDef;
}
interface $ZodISODateTime extends $ZodType {
  _zod: $ZodISODateTimeInternals;
}
declare const $ZodISODateTime: $constructor<$ZodISODateTime>;
interface $ZodISODateInternals extends $ZodStringFormatInternals<"date"> {}
interface $ZodISODate extends $ZodType {
  _zod: $ZodISODateInternals;
}
declare const $ZodISODate: $constructor<$ZodISODate>;
interface $ZodISOTimeDef extends $ZodStringFormatDef<"time"> {
  precision?: number | null;
}
interface $ZodISOTimeInternals extends $ZodStringFormatInternals<"time"> {
  def: $ZodISOTimeDef;
}
interface $ZodISOTime extends $ZodType {
  _zod: $ZodISOTimeInternals;
}
declare const $ZodISOTime: $constructor<$ZodISOTime>;
interface $ZodISODurationInternals extends $ZodStringFormatInternals<"duration"> {}
interface $ZodISODuration extends $ZodType {
  _zod: $ZodISODurationInternals;
}
declare const $ZodISODuration: $constructor<$ZodISODuration>;
interface $ZodIPv4Def extends $ZodStringFormatDef<"ipv4"> {
  version?: "v4";
}
interface $ZodIPv4Internals extends $ZodStringFormatInternals<"ipv4"> {
  def: $ZodIPv4Def;
}
interface $ZodIPv4 extends $ZodType {
  _zod: $ZodIPv4Internals;
}
declare const $ZodIPv4: $constructor<$ZodIPv4>;
interface $ZodIPv6Def extends $ZodStringFormatDef<"ipv6"> {
  version?: "v6";
}
interface $ZodIPv6Internals extends $ZodStringFormatInternals<"ipv6"> {
  def: $ZodIPv6Def;
}
interface $ZodIPv6 extends $ZodType {
  _zod: $ZodIPv6Internals;
}
declare const $ZodIPv6: $constructor<$ZodIPv6>;
interface $ZodCIDRv4Def extends $ZodStringFormatDef<"cidrv4"> {
  version?: "v4";
}
interface $ZodCIDRv4Internals extends $ZodStringFormatInternals<"cidrv4"> {
  def: $ZodCIDRv4Def;
}
interface $ZodCIDRv4 extends $ZodType {
  _zod: $ZodCIDRv4Internals;
}
declare const $ZodCIDRv4: $constructor<$ZodCIDRv4>;
interface $ZodCIDRv6Def extends $ZodStringFormatDef<"cidrv6"> {
  version?: "v6";
}
interface $ZodCIDRv6Internals extends $ZodStringFormatInternals<"cidrv6"> {
  def: $ZodCIDRv6Def;
}
interface $ZodCIDRv6 extends $ZodType {
  _zod: $ZodCIDRv6Internals;
}
declare const $ZodCIDRv6: $constructor<$ZodCIDRv6>;
interface $ZodBase64Internals extends $ZodStringFormatInternals<"base64"> {}
interface $ZodBase64 extends $ZodType {
  _zod: $ZodBase64Internals;
}
declare const $ZodBase64: $constructor<$ZodBase64>;
interface $ZodBase64URLInternals extends $ZodStringFormatInternals<"base64url"> {}
interface $ZodBase64URL extends $ZodType {
  _zod: $ZodBase64URLInternals;
}
declare const $ZodBase64URL: $constructor<$ZodBase64URL>;
interface $ZodE164Internals extends $ZodStringFormatInternals<"e164"> {}
interface $ZodE164 extends $ZodType {
  _zod: $ZodE164Internals;
}
declare const $ZodE164: $constructor<$ZodE164>;
interface $ZodJWTDef extends $ZodStringFormatDef<"jwt"> {
  alg?: JWTAlgorithm | undefined;
}
interface $ZodJWTInternals extends $ZodStringFormatInternals<"jwt"> {
  def: $ZodJWTDef;
}
interface $ZodJWT extends $ZodType {
  _zod: $ZodJWTInternals;
}
declare const $ZodJWT: $constructor<$ZodJWT>;
interface $ZodNumberDef extends $ZodTypeDef {
  type: "number";
  coerce?: boolean;
}
interface $ZodNumberInternals<Input = unknown> extends $ZodTypeInternals<number, Input> {
  def: $ZodNumberDef;
  /** @deprecated Internal API, use with caution (not deprecated) */
  pattern: RegExp;
  /** @deprecated Internal API, use with caution (not deprecated) */
  isst: $ZodIssueInvalidType;
  bag: LoosePartial<{
    minimum: number;
    maximum: number;
    exclusiveMinimum: number;
    exclusiveMaximum: number;
    format: string;
    pattern: RegExp;
  }>;
}
interface $ZodNumber<Input = unknown> extends $ZodType {
  _zod: $ZodNumberInternals<Input>;
}
declare const $ZodNumber: $constructor<$ZodNumber>;
interface $ZodNumberFormatDef extends $ZodNumberDef, $ZodCheckNumberFormatDef {}
interface $ZodNumberFormatInternals extends $ZodNumberInternals<number>, $ZodCheckNumberFormatInternals {
  def: $ZodNumberFormatDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodBooleanDef extends $ZodTypeDef {
  type: "boolean";
  coerce?: boolean;
  checks?: $ZodCheck<boolean>[];
}
interface $ZodBooleanInternals<T$1 = unknown> extends $ZodTypeInternals<boolean, T$1> {
  pattern: RegExp;
  def: $ZodBooleanDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodBoolean<T$1 = unknown> extends $ZodType {
  _zod: $ZodBooleanInternals<T$1>;
}
declare const $ZodBoolean: $constructor<$ZodBoolean>;
interface $ZodBigIntDef extends $ZodTypeDef {
  type: "bigint";
  coerce?: boolean;
}
interface $ZodBigIntInternals<T$1 = unknown> extends $ZodTypeInternals<bigint, T$1> {
  pattern: RegExp;
  /** @internal Internal API, use with caution */
  def: $ZodBigIntDef;
  isst: $ZodIssueInvalidType;
  bag: LoosePartial<{
    minimum: bigint;
    maximum: bigint;
    format: string;
  }>;
}
interface $ZodBigInt<T$1 = unknown> extends $ZodType {
  _zod: $ZodBigIntInternals<T$1>;
}
declare const $ZodBigInt: $constructor<$ZodBigInt>;
interface $ZodSymbolDef extends $ZodTypeDef {
  type: "symbol";
}
interface $ZodSymbolInternals extends $ZodTypeInternals<symbol, symbol> {
  def: $ZodSymbolDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodSymbol extends $ZodType {
  _zod: $ZodSymbolInternals;
}
declare const $ZodSymbol: $constructor<$ZodSymbol>;
interface $ZodUndefinedDef extends $ZodTypeDef {
  type: "undefined";
}
interface $ZodUndefinedInternals extends $ZodTypeInternals<undefined, undefined> {
  pattern: RegExp;
  def: $ZodUndefinedDef;
  values: PrimitiveSet;
  isst: $ZodIssueInvalidType;
}
interface $ZodUndefined extends $ZodType {
  _zod: $ZodUndefinedInternals;
}
declare const $ZodUndefined: $constructor<$ZodUndefined>;
interface $ZodNullDef extends $ZodTypeDef {
  type: "null";
}
interface $ZodNullInternals extends $ZodTypeInternals<null, null> {
  pattern: RegExp;
  def: $ZodNullDef;
  values: PrimitiveSet;
  isst: $ZodIssueInvalidType;
}
interface $ZodNull extends $ZodType {
  _zod: $ZodNullInternals;
}
declare const $ZodNull: $constructor<$ZodNull>;
interface $ZodAnyDef extends $ZodTypeDef {
  type: "any";
}
interface $ZodAnyInternals extends $ZodTypeInternals<any, any> {
  def: $ZodAnyDef;
  isst: never;
}
interface $ZodAny extends $ZodType {
  _zod: $ZodAnyInternals;
}
declare const $ZodAny: $constructor<$ZodAny>;
interface $ZodUnknownDef extends $ZodTypeDef {
  type: "unknown";
}
interface $ZodUnknownInternals extends $ZodTypeInternals<unknown, unknown> {
  def: $ZodUnknownDef;
  isst: never;
}
interface $ZodUnknown extends $ZodType {
  _zod: $ZodUnknownInternals;
}
declare const $ZodUnknown: $constructor<$ZodUnknown>;
interface $ZodNeverDef extends $ZodTypeDef {
  type: "never";
}
interface $ZodNeverInternals extends $ZodTypeInternals<never, never> {
  def: $ZodNeverDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodNever extends $ZodType {
  _zod: $ZodNeverInternals;
}
declare const $ZodNever: $constructor<$ZodNever>;
interface $ZodVoidDef extends $ZodTypeDef {
  type: "void";
}
interface $ZodVoidInternals extends $ZodTypeInternals<void, void> {
  def: $ZodVoidDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodVoid extends $ZodType {
  _zod: $ZodVoidInternals;
}
declare const $ZodVoid: $constructor<$ZodVoid>;
interface $ZodDateDef extends $ZodTypeDef {
  type: "date";
  coerce?: boolean;
}
interface $ZodDateInternals<T$1 = unknown> extends $ZodTypeInternals<Date, T$1> {
  def: $ZodDateDef;
  isst: $ZodIssueInvalidType;
  bag: LoosePartial<{
    minimum: Date;
    maximum: Date;
    format: string;
  }>;
}
interface $ZodDate<T$1 = unknown> extends $ZodType {
  _zod: $ZodDateInternals<T$1>;
}
declare const $ZodDate: $constructor<$ZodDate>;
interface $ZodArrayDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "array";
  element: T$1;
}
interface $ZodArrayInternals<T$1 extends SomeType = $ZodType> extends _$ZodTypeInternals {
  def: $ZodArrayDef<T$1>;
  isst: $ZodIssueInvalidType;
  output: output<T$1>[];
  input: input<T$1>[];
}
interface $ZodArray<T$1 extends SomeType = $ZodType> extends $ZodType<any, any, $ZodArrayInternals<T$1>> {}
declare const $ZodArray: $constructor<$ZodArray>;
type OptionalOutSchema = {
  _zod: {
    optout: "optional";
  };
};
type OptionalInSchema = {
  _zod: {
    optin: "optional";
  };
};
type $InferObjectOutput<T$1 extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T$1 ? IsAny<T$1[keyof T$1]> extends true ? Record<string, unknown> : Record<string, output<T$1[keyof T$1]>> : keyof (T$1 & Extra) extends never ? Record<string, never> : Prettify<{ -readonly [k in keyof T$1 as T$1[k] extends OptionalOutSchema ? never : k]: T$1[k]["_zod"]["output"] } & { -readonly [k in keyof T$1 as T$1[k] extends OptionalOutSchema ? k : never]?: T$1[k]["_zod"]["output"] } & Extra>;
type $InferObjectInput<T$1 extends $ZodLooseShape, Extra extends Record<string, unknown>> = string extends keyof T$1 ? IsAny<T$1[keyof T$1]> extends true ? Record<string, unknown> : Record<string, input<T$1[keyof T$1]>> : keyof (T$1 & Extra) extends never ? Record<string, never> : Prettify<{ -readonly [k in keyof T$1 as T$1[k] extends OptionalInSchema ? never : k]: T$1[k]["_zod"]["input"] } & { -readonly [k in keyof T$1 as T$1[k] extends OptionalInSchema ? k : never]?: T$1[k]["_zod"]["input"] } & Extra>;
type $ZodObjectConfig = {
  out: Record<string, unknown>;
  in: Record<string, unknown>;
};
type $loose = {
  out: Record<string, unknown>;
  in: Record<string, unknown>;
};
type $strict = {
  out: {};
  in: {};
};
type $strip = {
  out: {};
  in: {};
};
type $catchall<T$1 extends SomeType> = {
  out: {
    [k: string]: output<T$1>;
  };
  in: {
    [k: string]: input<T$1>;
  };
};
type $ZodShape = Readonly<{
  [k: string]: $ZodType;
}>;
interface $ZodObjectDef<Shape extends $ZodShape = $ZodShape> extends $ZodTypeDef {
  type: "object";
  shape: Shape;
  catchall?: $ZodType | undefined;
}
interface $ZodObjectInternals< /** @ts-ignore Cast variance */
out Shape extends $ZodShape = $ZodShape, out Config extends $ZodObjectConfig = $ZodObjectConfig> extends _$ZodTypeInternals {
  def: $ZodObjectDef<Shape>;
  config: Config;
  isst: $ZodIssueInvalidType | $ZodIssueUnrecognizedKeys;
  propValues: PropValues;
  output: $InferObjectOutput<Shape, Config["out"]>;
  input: $InferObjectInput<Shape, Config["in"]>;
  optin?: "optional" | undefined;
  optout?: "optional" | undefined;
}
type $ZodLooseShape = Record<string, any>;
interface $ZodObject< /** @ts-ignore Cast variance */
out Shape extends Readonly<$ZodShape> = Readonly<$ZodShape>, out Params$1 extends $ZodObjectConfig = $ZodObjectConfig> extends $ZodType<any, any, $ZodObjectInternals<Shape, Params$1>> {}
declare const $ZodObject: $constructor<$ZodObject>;
type $InferUnionOutput<T$1 extends SomeType> = T$1 extends any ? output<T$1> : never;
type $InferUnionInput<T$1 extends SomeType> = T$1 extends any ? input<T$1> : never;
interface $ZodUnionDef<Options extends readonly SomeType[] = readonly $ZodType[]> extends $ZodTypeDef {
  type: "union";
  options: Options;
  inclusive?: boolean;
}
type IsOptionalIn<T$1 extends SomeType> = T$1 extends OptionalInSchema ? true : false;
type IsOptionalOut<T$1 extends SomeType> = T$1 extends OptionalOutSchema ? true : false;
interface $ZodUnionInternals<T$1 extends readonly SomeType[] = readonly $ZodType[]> extends _$ZodTypeInternals {
  def: $ZodUnionDef<T$1>;
  isst: $ZodIssueInvalidUnion;
  pattern: T$1[number]["_zod"]["pattern"];
  values: T$1[number]["_zod"]["values"];
  output: $InferUnionOutput<T$1[number]>;
  input: $InferUnionInput<T$1[number]>;
  optin: IsOptionalIn<T$1[number]> extends false ? "optional" | undefined : "optional";
  optout: IsOptionalOut<T$1[number]> extends false ? "optional" | undefined : "optional";
}
interface $ZodUnion<T$1 extends readonly SomeType[] = readonly $ZodType[]> extends $ZodType<any, any, $ZodUnionInternals<T$1>> {
  _zod: $ZodUnionInternals<T$1>;
}
declare const $ZodUnion: $constructor<$ZodUnion>;
interface $ZodIntersectionDef<Left extends SomeType = $ZodType, Right extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "intersection";
  left: Left;
  right: Right;
}
interface $ZodIntersectionInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _$ZodTypeInternals {
  def: $ZodIntersectionDef<A, B>;
  isst: never;
  optin: A["_zod"]["optin"] | B["_zod"]["optin"];
  optout: A["_zod"]["optout"] | B["_zod"]["optout"];
  output: output<A> & output<B>;
  input: input<A> & input<B>;
}
interface $ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodIntersectionInternals<A, B>;
}
declare const $ZodIntersection: $constructor<$ZodIntersection>;
interface $ZodTupleDef<T$1 extends TupleItems = readonly $ZodType[], Rest$1 extends SomeType | null = $ZodType | null> extends $ZodTypeDef {
  type: "tuple";
  items: T$1;
  rest: Rest$1;
}
type $InferTupleInputType<T$1 extends TupleItems, Rest$1 extends SomeType | null> = [...TupleInputTypeWithOptionals<T$1>, ...(Rest$1 extends SomeType ? input<Rest$1>[] : [])];
type TupleInputTypeNoOptionals<T$1 extends TupleItems> = { [k in keyof T$1]: input<T$1[k]> };
type TupleInputTypeWithOptionals<T$1 extends TupleItems> = T$1 extends readonly [...infer Prefix extends SomeType[], infer Tail extends SomeType] ? Tail["_zod"]["optin"] extends "optional" ? [...TupleInputTypeWithOptionals<Prefix>, input<Tail>?] : TupleInputTypeNoOptionals<T$1> : [];
type $InferTupleOutputType<T$1 extends TupleItems, Rest$1 extends SomeType | null> = [...TupleOutputTypeWithOptionals<T$1>, ...(Rest$1 extends SomeType ? output<Rest$1>[] : [])];
type TupleOutputTypeNoOptionals<T$1 extends TupleItems> = { [k in keyof T$1]: output<T$1[k]> };
type TupleOutputTypeWithOptionals<T$1 extends TupleItems> = T$1 extends readonly [...infer Prefix extends SomeType[], infer Tail extends SomeType] ? Tail["_zod"]["optout"] extends "optional" ? [...TupleOutputTypeWithOptionals<Prefix>, output<Tail>?] : TupleOutputTypeNoOptionals<T$1> : [];
interface $ZodTupleInternals<T$1 extends TupleItems = readonly $ZodType[], Rest$1 extends SomeType | null = $ZodType | null> extends _$ZodTypeInternals {
  def: $ZodTupleDef<T$1, Rest$1>;
  isst: $ZodIssueInvalidType | $ZodIssueTooBig<unknown[]> | $ZodIssueTooSmall<unknown[]>;
  output: $InferTupleOutputType<T$1, Rest$1>;
  input: $InferTupleInputType<T$1, Rest$1>;
}
interface $ZodTuple<T$1 extends TupleItems = readonly $ZodType[], Rest$1 extends SomeType | null = $ZodType | null> extends $ZodType {
  _zod: $ZodTupleInternals<T$1, Rest$1>;
}
declare const $ZodTuple: $constructor<$ZodTuple>;
type $ZodRecordKey = $ZodType<string | number | symbol, unknown>;
interface $ZodRecordDef<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "record";
  keyType: Key;
  valueType: Value;
  /** @default "strict" - errors on keys not matching keyType. "loose" passes through non-matching keys unchanged. */
  mode?: "strict" | "loose";
}
type $InferZodRecordOutput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<output<Key>, output<Value>>> : Record<output<Key>, output<Value>>;
type $InferZodRecordInput<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> = Key extends $partial ? Partial<Record<input<Key> & PropertyKey, input<Value>>> : Record<input<Key> & PropertyKey, input<Value>>;
interface $ZodRecordInternals<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodTypeInternals<$InferZodRecordOutput<Key, Value>, $InferZodRecordInput<Key, Value>> {
  def: $ZodRecordDef<Key, Value>;
  isst: $ZodIssueInvalidType | $ZodIssueInvalidKey<Record<PropertyKey, unknown>>;
  optin?: "optional" | undefined;
  optout?: "optional" | undefined;
}
type $partial = {
  "~~partial": true;
};
interface $ZodRecord<Key extends $ZodRecordKey = $ZodRecordKey, Value extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodRecordInternals<Key, Value>;
}
declare const $ZodRecord: $constructor<$ZodRecord>;
interface $ZodMapDef<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "map";
  keyType: Key;
  valueType: Value;
}
interface $ZodMapInternals<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodTypeInternals<Map<output<Key>, output<Value>>, Map<input<Key>, input<Value>>> {
  def: $ZodMapDef<Key, Value>;
  isst: $ZodIssueInvalidType | $ZodIssueInvalidKey | $ZodIssueInvalidElement<unknown>;
  optin?: "optional" | undefined;
  optout?: "optional" | undefined;
}
interface $ZodMap<Key extends SomeType = $ZodType, Value extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodMapInternals<Key, Value>;
}
declare const $ZodMap: $constructor<$ZodMap>;
interface $ZodSetDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "set";
  valueType: T$1;
}
interface $ZodSetInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<Set<output<T$1>>, Set<input<T$1>>> {
  def: $ZodSetDef<T$1>;
  isst: $ZodIssueInvalidType;
  optin?: "optional" | undefined;
  optout?: "optional" | undefined;
}
interface $ZodSet<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodSetInternals<T$1>;
}
declare const $ZodSet: $constructor<$ZodSet>;
type $InferEnumOutput<T$1 extends EnumLike> = T$1[keyof T$1] & {};
type $InferEnumInput<T$1 extends EnumLike> = T$1[keyof T$1] & {};
interface $ZodEnumDef<T$1 extends EnumLike = EnumLike> extends $ZodTypeDef {
  type: "enum";
  entries: T$1;
}
interface $ZodEnumInternals< /** @ts-ignore Cast variance */
out T$1 extends EnumLike = EnumLike> extends $ZodTypeInternals<$InferEnumOutput<T$1>, $InferEnumInput<T$1>> {
  def: $ZodEnumDef<T$1>;
  /** @deprecated Internal API, use with caution (not deprecated) */
  values: PrimitiveSet;
  /** @deprecated Internal API, use with caution (not deprecated) */
  pattern: RegExp;
  isst: $ZodIssueInvalidValue;
}
interface $ZodEnum<T$1 extends EnumLike = EnumLike> extends $ZodType {
  _zod: $ZodEnumInternals<T$1>;
}
declare const $ZodEnum: $constructor<$ZodEnum>;
interface $ZodLiteralDef<T$1 extends Literal> extends $ZodTypeDef {
  type: "literal";
  values: T$1[];
}
interface $ZodLiteralInternals<T$1 extends Literal = Literal> extends $ZodTypeInternals<T$1, T$1> {
  def: $ZodLiteralDef<T$1>;
  values: Set<T$1>;
  pattern: RegExp;
  isst: $ZodIssueInvalidValue;
}
interface $ZodLiteral<T$1 extends Literal = Literal> extends $ZodType {
  _zod: $ZodLiteralInternals<T$1>;
}
declare const $ZodLiteral: $constructor<$ZodLiteral>;
type _File = typeof globalThis extends {
  File: infer F extends new (...args: any[]) => any;
} ? InstanceType<F> : {};
/** Do not reference this directly. */
interface File extends _File {
  readonly type: string;
  readonly size: number;
}
interface $ZodFileDef extends $ZodTypeDef {
  type: "file";
}
interface $ZodFileInternals extends $ZodTypeInternals<File, File> {
  def: $ZodFileDef;
  isst: $ZodIssueInvalidType;
  bag: LoosePartial<{
    minimum: number;
    maximum: number;
    mime: MimeTypes[];
  }>;
}
interface $ZodFile extends $ZodType {
  _zod: $ZodFileInternals;
}
declare const $ZodFile: $constructor<$ZodFile>;
interface $ZodTransformDef extends $ZodTypeDef {
  type: "transform";
  transform: (input: unknown, payload: ParsePayload<unknown>) => MaybeAsync<unknown>;
}
interface $ZodTransformInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I> {
  def: $ZodTransformDef;
  isst: never;
}
interface $ZodTransform<O = unknown, I = unknown> extends $ZodType {
  _zod: $ZodTransformInternals<O, I>;
}
declare const $ZodTransform: $constructor<$ZodTransform>;
interface $ZodOptionalDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "optional";
  innerType: T$1;
}
interface $ZodOptionalInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<output<T$1> | undefined, input<T$1> | undefined> {
  def: $ZodOptionalDef<T$1>;
  optin: "optional";
  optout: "optional";
  isst: never;
  values: T$1["_zod"]["values"];
  pattern: T$1["_zod"]["pattern"];
}
interface $ZodOptional<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodOptionalInternals<T$1>;
}
declare const $ZodOptional: $constructor<$ZodOptional>;
interface $ZodExactOptionalDef<T$1 extends SomeType = $ZodType> extends $ZodOptionalDef<T$1> {}
interface $ZodExactOptionalInternals<T$1 extends SomeType = $ZodType> extends $ZodOptionalInternals<T$1> {
  def: $ZodExactOptionalDef<T$1>;
  output: output<T$1>;
  input: input<T$1>;
}
interface $ZodExactOptional<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodExactOptionalInternals<T$1>;
}
declare const $ZodExactOptional: $constructor<$ZodExactOptional>;
interface $ZodNullableDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "nullable";
  innerType: T$1;
}
interface $ZodNullableInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<output<T$1> | null, input<T$1> | null> {
  def: $ZodNullableDef<T$1>;
  optin: T$1["_zod"]["optin"];
  optout: T$1["_zod"]["optout"];
  isst: never;
  values: T$1["_zod"]["values"];
  pattern: T$1["_zod"]["pattern"];
}
interface $ZodNullable<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodNullableInternals<T$1>;
}
declare const $ZodNullable: $constructor<$ZodNullable>;
interface $ZodDefaultDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "default";
  innerType: T$1;
  /** The default value. May be a getter. */
  defaultValue: NoUndefined<output<T$1>>;
}
interface $ZodDefaultInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T$1>>, input<T$1> | undefined> {
  def: $ZodDefaultDef<T$1>;
  optin: "optional";
  optout?: "optional" | undefined;
  isst: never;
  values: T$1["_zod"]["values"];
}
interface $ZodDefault<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodDefaultInternals<T$1>;
}
declare const $ZodDefault: $constructor<$ZodDefault>;
interface $ZodPrefaultDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "prefault";
  innerType: T$1;
  /** The default value. May be a getter. */
  defaultValue: input<T$1>;
}
interface $ZodPrefaultInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T$1>>, input<T$1> | undefined> {
  def: $ZodPrefaultDef<T$1>;
  optin: "optional";
  optout?: "optional" | undefined;
  isst: never;
  values: T$1["_zod"]["values"];
}
interface $ZodPrefault<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodPrefaultInternals<T$1>;
}
declare const $ZodPrefault: $constructor<$ZodPrefault>;
interface $ZodNonOptionalDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "nonoptional";
  innerType: T$1;
}
interface $ZodNonOptionalInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<NoUndefined<output<T$1>>, NoUndefined<input<T$1>>> {
  def: $ZodNonOptionalDef<T$1>;
  isst: $ZodIssueInvalidType;
  values: T$1["_zod"]["values"];
  optin: "optional" | undefined;
  optout: "optional" | undefined;
}
interface $ZodNonOptional<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodNonOptionalInternals<T$1>;
}
declare const $ZodNonOptional: $constructor<$ZodNonOptional>;
interface $ZodSuccessDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "success";
  innerType: T$1;
}
interface $ZodSuccessInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<boolean, input<T$1>> {
  def: $ZodSuccessDef<T$1>;
  isst: never;
  optin: T$1["_zod"]["optin"];
  optout: "optional" | undefined;
}
interface $ZodSuccess<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodSuccessInternals<T$1>;
}
declare const $ZodSuccess: $constructor<$ZodSuccess>;
interface $ZodCatchCtx extends ParsePayload {
  /** @deprecated Use `ctx.issues` */
  error: {
    issues: $ZodIssue[];
  };
  /** @deprecated Use `ctx.value` */
  input: unknown;
}
interface $ZodCatchDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "catch";
  innerType: T$1;
  catchValue: (ctx: $ZodCatchCtx) => unknown;
}
interface $ZodCatchInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<output<T$1>, input<T$1>> {
  def: $ZodCatchDef<T$1>;
  optin: T$1["_zod"]["optin"];
  optout: T$1["_zod"]["optout"];
  isst: never;
  values: T$1["_zod"]["values"];
}
interface $ZodCatch<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodCatchInternals<T$1>;
}
declare const $ZodCatch: $constructor<$ZodCatch>;
interface $ZodNaNDef extends $ZodTypeDef {
  type: "nan";
}
interface $ZodNaNInternals extends $ZodTypeInternals<number, number> {
  def: $ZodNaNDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodNaN extends $ZodType {
  _zod: $ZodNaNInternals;
}
declare const $ZodNaN: $constructor<$ZodNaN>;
interface $ZodPipeDef<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "pipe";
  in: A;
  out: B;
  /** Only defined inside $ZodCodec instances. */
  transform?: (value: output<A>, payload: ParsePayload<output<A>>) => MaybeAsync<input<B>>;
  /** Only defined inside $ZodCodec instances. */
  reverseTransform?: (value: input<B>, payload: ParsePayload<input<B>>) => MaybeAsync<output<A>>;
}
interface $ZodPipeInternals<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodTypeInternals<output<B>, input<A>> {
  def: $ZodPipeDef<A, B>;
  isst: never;
  values: A["_zod"]["values"];
  optin: A["_zod"]["optin"];
  optout: B["_zod"]["optout"];
  propValues: A["_zod"]["propValues"];
}
interface $ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodPipeInternals<A, B>;
}
declare const $ZodPipe: $constructor<$ZodPipe>;
interface $ZodReadonlyDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "readonly";
  innerType: T$1;
}
interface $ZodReadonlyInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<MakeReadonly<output<T$1>>, MakeReadonly<input<T$1>>> {
  def: $ZodReadonlyDef<T$1>;
  optin: T$1["_zod"]["optin"];
  optout: T$1["_zod"]["optout"];
  isst: never;
  propValues: T$1["_zod"]["propValues"];
  values: T$1["_zod"]["values"];
}
interface $ZodReadonly<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodReadonlyInternals<T$1>;
}
declare const $ZodReadonly: $constructor<$ZodReadonly>;
interface $ZodTemplateLiteralDef extends $ZodTypeDef {
  type: "template_literal";
  parts: $ZodTemplateLiteralPart[];
  format?: string | undefined;
}
interface $ZodTemplateLiteralInternals<Template extends string = string> extends $ZodTypeInternals<Template, Template> {
  pattern: RegExp;
  def: $ZodTemplateLiteralDef;
  isst: $ZodIssueInvalidType;
}
interface $ZodTemplateLiteral<Template extends string = string> extends $ZodType {
  _zod: $ZodTemplateLiteralInternals<Template>;
}
type LiteralPart = Exclude<Literal, symbol>;
interface SchemaPartInternals extends $ZodTypeInternals<LiteralPart, LiteralPart> {
  pattern: RegExp;
}
interface SchemaPart extends $ZodType {
  _zod: SchemaPartInternals;
}
type $ZodTemplateLiteralPart = LiteralPart | SchemaPart;
declare const $ZodTemplateLiteral: $constructor<$ZodTemplateLiteral>;
type $ZodFunctionArgs = $ZodType<unknown[], unknown[]>;
type $ZodFunctionIn = $ZodFunctionArgs;
type $ZodFunctionOut = $ZodType;
type $InferInnerFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => input<Returns>;
type $InferInnerFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : output<Args>) => MaybeAsync<input<Returns>>;
type $InferOuterFunctionType<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => output<Returns>;
type $InferOuterFunctionTypeAsync<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> = (...args: $ZodFunctionIn extends Args ? never[] : input<Args>) => Promise<output<Returns>>;
interface $ZodFunctionDef<In extends $ZodFunctionIn = $ZodFunctionIn, Out extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodTypeDef {
  type: "function";
  input: In;
  output: Out;
}
interface $ZodFunctionInternals<Args extends $ZodFunctionIn, Returns extends $ZodFunctionOut> extends $ZodTypeInternals<$InferOuterFunctionType<Args, Returns>, $InferInnerFunctionType<Args, Returns>> {
  def: $ZodFunctionDef<Args, Returns>;
  isst: $ZodIssueInvalidType;
}
interface $ZodFunction<Args extends $ZodFunctionIn = $ZodFunctionIn, Returns extends $ZodFunctionOut = $ZodFunctionOut> extends $ZodType<any, any, $ZodFunctionInternals<Args, Returns>> {
  /** @deprecated */
  _def: $ZodFunctionDef<Args, Returns>;
  _input: $InferInnerFunctionType<Args, Returns>;
  _output: $InferOuterFunctionType<Args, Returns>;
  implement<F$1 extends $InferInnerFunctionType<Args, Returns>>(func: F$1): (...args: Parameters<this["_output"]>) => ReturnType<F$1> extends ReturnType<this["_output"]> ? ReturnType<F$1> : ReturnType<this["_output"]>;
  implementAsync<F$1 extends $InferInnerFunctionTypeAsync<Args, Returns>>(func: F$1): F$1 extends $InferOuterFunctionTypeAsync<Args, Returns> ? F$1 : $InferOuterFunctionTypeAsync<Args, Returns>;
  input<const Items extends TupleItems, const Rest$1 extends $ZodFunctionOut = $ZodFunctionOut>(args: Items, rest?: Rest$1): $ZodFunction<$ZodTuple<Items, Rest$1>, Returns>;
  input<NewArgs extends $ZodFunctionIn>(args: NewArgs): $ZodFunction<NewArgs, Returns>;
  input(...args: any[]): $ZodFunction<any, Returns>;
  output<NewReturns extends $ZodType>(output: NewReturns): $ZodFunction<Args, NewReturns>;
}
declare const $ZodFunction: $constructor<$ZodFunction>;
interface $ZodPromiseDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "promise";
  innerType: T$1;
}
interface $ZodPromiseInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<Promise<output<T$1>>, MaybeAsync<input<T$1>>> {
  def: $ZodPromiseDef<T$1>;
  isst: never;
}
interface $ZodPromise<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodPromiseInternals<T$1>;
}
declare const $ZodPromise: $constructor<$ZodPromise>;
interface $ZodLazyDef<T$1 extends SomeType = $ZodType> extends $ZodTypeDef {
  type: "lazy";
  getter: () => T$1;
}
interface $ZodLazyInternals<T$1 extends SomeType = $ZodType> extends $ZodTypeInternals<output<T$1>, input<T$1>> {
  def: $ZodLazyDef<T$1>;
  isst: never;
  /** Auto-cached way to retrieve the inner schema */
  innerType: T$1;
  pattern: T$1["_zod"]["pattern"];
  propValues: T$1["_zod"]["propValues"];
  optin: T$1["_zod"]["optin"];
  optout: T$1["_zod"]["optout"];
}
interface $ZodLazy<T$1 extends SomeType = $ZodType> extends $ZodType {
  _zod: $ZodLazyInternals<T$1>;
}
declare const $ZodLazy: $constructor<$ZodLazy>;
interface $ZodCustomDef<O = unknown> extends $ZodTypeDef, $ZodCheckDef {
  type: "custom";
  check: "custom";
  path?: PropertyKey[] | undefined;
  error?: $ZodErrorMap | undefined;
  params?: Record<string, any> | undefined;
  fn: (arg: O) => unknown;
}
interface $ZodCustomInternals<O = unknown, I = unknown> extends $ZodTypeInternals<O, I>, $ZodCheckInternals<O> {
  def: $ZodCustomDef;
  issc: $ZodIssue;
  isst: never;
  bag: LoosePartial<{
    Class: typeof Class;
  }>;
}
interface $ZodCustom<O = unknown, I = unknown> extends $ZodType {
  _zod: $ZodCustomInternals<O, I>;
}
declare const $ZodCustom: $constructor<$ZodCustom>;
type $ZodTypes = $ZodString | $ZodNumber | $ZodBigInt | $ZodBoolean | $ZodDate | $ZodSymbol | $ZodUndefined | $ZodNullable | $ZodNull | $ZodAny | $ZodUnknown | $ZodNever | $ZodVoid | $ZodArray | $ZodObject | $ZodUnion | $ZodIntersection | $ZodTuple | $ZodRecord | $ZodMap | $ZodSet | $ZodLiteral | $ZodEnum | $ZodFunction | $ZodPromise | $ZodLazy | $ZodOptional | $ZodDefault | $ZodPrefault | $ZodTemplateLiteral | $ZodCustom | $ZodTransform | $ZodNonOptional | $ZodReadonly | $ZodNaN | $ZodPipe | $ZodSuccess | $ZodCatch | $ZodFile;
//#endregion
//#region node_modules/zod/v4/core/checks.d.cts
interface $ZodCheckDef {
  check: string;
  error?: $ZodErrorMap<never> | undefined;
  /** If true, no later checks will be executed if this check fails. Default `false`. */
  abort?: boolean | undefined;
  /** If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`. */
  when?: ((payload: ParsePayload) => boolean) | undefined;
}
interface $ZodCheckInternals<T$1> {
  def: $ZodCheckDef;
  /** The set of issues this check might throw. */
  issc?: $ZodIssueBase;
  check(payload: ParsePayload<T$1>): MaybeAsync<void>;
  onattach: ((schema: $ZodType) => void)[];
}
interface $ZodCheck<in T$1 = never> {
  _zod: $ZodCheckInternals<T$1>;
}
declare const $ZodCheck: $constructor<$ZodCheck<any>>;
interface $ZodCheckLessThanDef extends $ZodCheckDef {
  check: "less_than";
  value: Numeric;
  inclusive: boolean;
}
interface $ZodCheckLessThanInternals<T$1 extends Numeric = Numeric> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckLessThanDef;
  issc: $ZodIssueTooBig<T$1>;
}
interface $ZodCheckLessThan<T$1 extends Numeric = Numeric> extends $ZodCheck<T$1> {
  _zod: $ZodCheckLessThanInternals<T$1>;
}
declare const $ZodCheckLessThan: $constructor<$ZodCheckLessThan>;
interface $ZodCheckGreaterThanDef extends $ZodCheckDef {
  check: "greater_than";
  value: Numeric;
  inclusive: boolean;
}
interface $ZodCheckGreaterThanInternals<T$1 extends Numeric = Numeric> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckGreaterThanDef;
  issc: $ZodIssueTooSmall<T$1>;
}
interface $ZodCheckGreaterThan<T$1 extends Numeric = Numeric> extends $ZodCheck<T$1> {
  _zod: $ZodCheckGreaterThanInternals<T$1>;
}
declare const $ZodCheckGreaterThan: $constructor<$ZodCheckGreaterThan>;
interface $ZodCheckMultipleOfDef<T$1 extends number | bigint = number | bigint> extends $ZodCheckDef {
  check: "multiple_of";
  value: T$1;
}
interface $ZodCheckMultipleOfInternals<T$1 extends number | bigint = number | bigint> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckMultipleOfDef<T$1>;
  issc: $ZodIssueNotMultipleOf;
}
interface $ZodCheckMultipleOf<T$1 extends number | bigint = number | bigint> extends $ZodCheck<T$1> {
  _zod: $ZodCheckMultipleOfInternals<T$1>;
}
declare const $ZodCheckMultipleOf: $constructor<$ZodCheckMultipleOf<number | bigint>>;
type $ZodNumberFormats = "int32" | "uint32" | "float32" | "float64" | "safeint";
interface $ZodCheckNumberFormatDef extends $ZodCheckDef {
  check: "number_format";
  format: $ZodNumberFormats;
}
interface $ZodCheckNumberFormatInternals extends $ZodCheckInternals<number> {
  def: $ZodCheckNumberFormatDef;
  issc: $ZodIssueInvalidType | $ZodIssueTooBig<"number"> | $ZodIssueTooSmall<"number">;
}
interface $ZodCheckNumberFormat extends $ZodCheck<number> {
  _zod: $ZodCheckNumberFormatInternals;
}
declare const $ZodCheckNumberFormat: $constructor<$ZodCheckNumberFormat>;
interface $ZodCheckMaxLengthDef extends $ZodCheckDef {
  check: "max_length";
  maximum: number;
}
interface $ZodCheckMaxLengthInternals<T$1 extends HasLength = HasLength> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckMaxLengthDef;
  issc: $ZodIssueTooBig<T$1>;
}
interface $ZodCheckMaxLength<T$1 extends HasLength = HasLength> extends $ZodCheck<T$1> {
  _zod: $ZodCheckMaxLengthInternals<T$1>;
}
declare const $ZodCheckMaxLength: $constructor<$ZodCheckMaxLength>;
interface $ZodCheckMinLengthDef extends $ZodCheckDef {
  check: "min_length";
  minimum: number;
}
interface $ZodCheckMinLengthInternals<T$1 extends HasLength = HasLength> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckMinLengthDef;
  issc: $ZodIssueTooSmall<T$1>;
}
interface $ZodCheckMinLength<T$1 extends HasLength = HasLength> extends $ZodCheck<T$1> {
  _zod: $ZodCheckMinLengthInternals<T$1>;
}
declare const $ZodCheckMinLength: $constructor<$ZodCheckMinLength>;
interface $ZodCheckLengthEqualsDef extends $ZodCheckDef {
  check: "length_equals";
  length: number;
}
interface $ZodCheckLengthEqualsInternals<T$1 extends HasLength = HasLength> extends $ZodCheckInternals<T$1> {
  def: $ZodCheckLengthEqualsDef;
  issc: $ZodIssueTooBig<T$1> | $ZodIssueTooSmall<T$1>;
}
interface $ZodCheckLengthEquals<T$1 extends HasLength = HasLength> extends $ZodCheck<T$1> {
  _zod: $ZodCheckLengthEqualsInternals<T$1>;
}
declare const $ZodCheckLengthEquals: $constructor<$ZodCheckLengthEquals>;
type $ZodStringFormats = "email" | "url" | "emoji" | "uuid" | "guid" | "nanoid" | "cuid" | "cuid2" | "ulid" | "xid" | "ksuid" | "datetime" | "date" | "time" | "duration" | "ipv4" | "ipv6" | "cidrv4" | "cidrv6" | "base64" | "base64url" | "json_string" | "e164" | "lowercase" | "uppercase" | "regex" | "jwt" | "starts_with" | "ends_with" | "includes";
interface $ZodCheckStringFormatDef<Format extends string = string> extends $ZodCheckDef {
  check: "string_format";
  format: Format;
  pattern?: RegExp | undefined;
}
interface $ZodCheckStringFormatInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckStringFormatDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckRegexDef extends $ZodCheckStringFormatDef {
  format: "regex";
  pattern: RegExp;
}
interface $ZodCheckRegexInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckRegexDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckRegex extends $ZodCheck<string> {
  _zod: $ZodCheckRegexInternals;
}
declare const $ZodCheckRegex: $constructor<$ZodCheckRegex>;
interface $ZodCheckLowerCaseDef extends $ZodCheckStringFormatDef<"lowercase"> {}
interface $ZodCheckLowerCaseInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckLowerCaseDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckLowerCase extends $ZodCheck<string> {
  _zod: $ZodCheckLowerCaseInternals;
}
declare const $ZodCheckLowerCase: $constructor<$ZodCheckLowerCase>;
interface $ZodCheckUpperCaseDef extends $ZodCheckStringFormatDef<"uppercase"> {}
interface $ZodCheckUpperCaseInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckUpperCaseDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckUpperCase extends $ZodCheck<string> {
  _zod: $ZodCheckUpperCaseInternals;
}
declare const $ZodCheckUpperCase: $constructor<$ZodCheckUpperCase>;
interface $ZodCheckIncludesDef extends $ZodCheckStringFormatDef<"includes"> {
  includes: string;
  position?: number | undefined;
}
interface $ZodCheckIncludesInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckIncludesDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckIncludes extends $ZodCheck<string> {
  _zod: $ZodCheckIncludesInternals;
}
declare const $ZodCheckIncludes: $constructor<$ZodCheckIncludes>;
interface $ZodCheckStartsWithDef extends $ZodCheckStringFormatDef<"starts_with"> {
  prefix: string;
}
interface $ZodCheckStartsWithInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckStartsWithDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckStartsWith extends $ZodCheck<string> {
  _zod: $ZodCheckStartsWithInternals;
}
declare const $ZodCheckStartsWith: $constructor<$ZodCheckStartsWith>;
interface $ZodCheckEndsWithDef extends $ZodCheckStringFormatDef<"ends_with"> {
  suffix: string;
}
interface $ZodCheckEndsWithInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckEndsWithDef;
  issc: $ZodIssueInvalidStringFormat;
}
interface $ZodCheckEndsWith extends $ZodCheckInternals<string> {
  _zod: $ZodCheckEndsWithInternals;
}
declare const $ZodCheckEndsWith: $constructor<$ZodCheckEndsWith>;
//#endregion
//#region node_modules/zod/v4/core/errors.d.cts
interface $ZodIssueBase {
  readonly code?: string;
  readonly input?: unknown;
  readonly path: PropertyKey[];
  readonly message: string;
}
type $ZodInvalidTypeExpected = "string" | "number" | "int" | "boolean" | "bigint" | "symbol" | "undefined" | "null" | "never" | "void" | "date" | "array" | "object" | "tuple" | "record" | "map" | "set" | "file" | "nonoptional" | "nan" | "function" | (string & {});
interface $ZodIssueInvalidType<Input = unknown> extends $ZodIssueBase {
  readonly code: "invalid_type";
  readonly expected: $ZodInvalidTypeExpected;
  readonly input?: Input;
}
interface $ZodIssueTooBig<Input = unknown> extends $ZodIssueBase {
  readonly code: "too_big";
  readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
  readonly maximum: number | bigint;
  readonly inclusive?: boolean;
  readonly exact?: boolean;
  readonly input?: Input;
}
interface $ZodIssueTooSmall<Input = unknown> extends $ZodIssueBase {
  readonly code: "too_small";
  readonly origin: "number" | "int" | "bigint" | "date" | "string" | "array" | "set" | "file" | (string & {});
  readonly minimum: number | bigint;
  /** True if the allowable range includes the minimum */
  readonly inclusive?: boolean;
  /** True if the allowed value is fixed (e.g.` z.length(5)`), not a range (`z.minLength(5)`) */
  readonly exact?: boolean;
  readonly input?: Input;
}
interface $ZodIssueInvalidStringFormat extends $ZodIssueBase {
  readonly code: "invalid_format";
  readonly format: $ZodStringFormats | (string & {});
  readonly pattern?: string;
  readonly input?: string;
}
interface $ZodIssueNotMultipleOf<Input extends number | bigint = number | bigint> extends $ZodIssueBase {
  readonly code: "not_multiple_of";
  readonly divisor: number;
  readonly input?: Input;
}
interface $ZodIssueUnrecognizedKeys extends $ZodIssueBase {
  readonly code: "unrecognized_keys";
  readonly keys: string[];
  readonly input?: Record<string, unknown>;
}
interface $ZodIssueInvalidUnionNoMatch extends $ZodIssueBase {
  readonly code: "invalid_union";
  readonly errors: $ZodIssue[][];
  readonly input?: unknown;
  readonly discriminator?: string | undefined;
  readonly inclusive?: true;
}
interface $ZodIssueInvalidUnionMultipleMatch extends $ZodIssueBase {
  readonly code: "invalid_union";
  readonly errors: [];
  readonly input?: unknown;
  readonly discriminator?: string | undefined;
  readonly inclusive: false;
}
type $ZodIssueInvalidUnion = $ZodIssueInvalidUnionNoMatch | $ZodIssueInvalidUnionMultipleMatch;
interface $ZodIssueInvalidKey<Input = unknown> extends $ZodIssueBase {
  readonly code: "invalid_key";
  readonly origin: "map" | "record";
  readonly issues: $ZodIssue[];
  readonly input?: Input;
}
interface $ZodIssueInvalidElement<Input = unknown> extends $ZodIssueBase {
  readonly code: "invalid_element";
  readonly origin: "map" | "set";
  readonly key: unknown;
  readonly issues: $ZodIssue[];
  readonly input?: Input;
}
interface $ZodIssueInvalidValue<Input = unknown> extends $ZodIssueBase {
  readonly code: "invalid_value";
  readonly values: Primitive[];
  readonly input?: Input;
}
interface $ZodIssueCustom extends $ZodIssueBase {
  readonly code: "custom";
  readonly params?: Record<string, any> | undefined;
  readonly input?: unknown;
}
type $ZodIssue = $ZodIssueInvalidType | $ZodIssueTooBig | $ZodIssueTooSmall | $ZodIssueInvalidStringFormat | $ZodIssueNotMultipleOf | $ZodIssueUnrecognizedKeys | $ZodIssueInvalidUnion | $ZodIssueInvalidKey | $ZodIssueInvalidElement | $ZodIssueInvalidValue | $ZodIssueCustom;
type $ZodInternalIssue<T$1 extends $ZodIssueBase = $ZodIssue> = T$1 extends any ? RawIssue$1<T$1> : never;
type RawIssue$1<T$1 extends $ZodIssueBase> = T$1 extends any ? Flatten<MakePartial<T$1, "message" | "path"> & {
  /** The input data */
  readonly input: unknown;
  /** The schema or check that originated this issue. */
  readonly inst?: $ZodType | $ZodCheck;
  /** If `true`, Zod will continue executing checks/refinements after this issue. */
  readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
type $ZodRawIssue<T$1 extends $ZodIssueBase = $ZodIssue> = $ZodInternalIssue<T$1>;
interface $ZodErrorMap<T$1 extends $ZodIssueBase = $ZodIssue> {
  (issue: $ZodRawIssue<T$1>): {
    message: string;
  } | string | undefined | null;
}
interface $ZodError<T$1 = unknown> extends Error {
  type: T$1;
  issues: $ZodIssue[];
  _zod: {
    output: T$1;
    def: $ZodIssue[];
  };
  stack?: string;
  name: string;
}
declare const $ZodError: $constructor<$ZodError>;
type $ZodFlattenedError<T$1, U$1 = string> = _FlattenedError<T$1, U$1>;
type _FlattenedError<T$1, U$1 = string> = {
  formErrors: U$1[];
  fieldErrors: { [P in keyof T$1]?: U$1[] };
};
type _ZodFormattedError<T$1, U$1 = string> = T$1 extends [any, ...any[]] ? { [K in keyof T$1]?: $ZodFormattedError<T$1[K], U$1> } : T$1 extends any[] ? {
  [k: number]: $ZodFormattedError<T$1[number], U$1>;
} : T$1 extends object ? Flatten<{ [K in keyof T$1]?: $ZodFormattedError<T$1[K], U$1> }> : any;
type $ZodFormattedError<T$1, U$1 = string> = {
  _errors: U$1[];
} & Flatten<_ZodFormattedError<T$1, U$1>>;
//#endregion
//#region node_modules/zod/v4/core/core.d.cts
type ZodTrait = {
  _zod: {
    def: any;
    [k: string]: any;
  };
};
interface $constructor<T$1 extends ZodTrait, D = T$1["_zod"]["def"]> {
  new (def: D): T$1;
  init(inst: T$1, def: D): asserts inst is T$1;
}
declare function $constructor<T$1 extends ZodTrait, D = T$1["_zod"]["def"]>(name: string, initializer: (inst: T$1, def: D) => void, params?: {
  Parent?: typeof Class;
}): $constructor<T$1, D>;
declare const $brand: unique symbol;
type $brand<T$1 extends string | number | symbol = string | number | symbol> = {
  [$brand]: { [k in T$1]: true };
};
type $ZodBranded<T$1 extends SomeType, Brand extends string | number | symbol, Dir extends "in" | "out" | "inout" = "out"> = T$1 & (Dir extends "inout" ? {
  _zod: {
    input: input<T$1> & $brand<Brand>;
    output: output<T$1> & $brand<Brand>;
  };
} : Dir extends "in" ? {
  _zod: {
    input: input<T$1> & $brand<Brand>;
  };
} : {
  _zod: {
    output: output<T$1> & $brand<Brand>;
  };
});
type input<T$1> = T$1 extends {
  _zod: {
    input: any;
  };
} ? T$1["_zod"]["input"] : unknown;
type output<T$1> = T$1 extends {
  _zod: {
    output: any;
  };
} ? T$1["_zod"]["output"] : unknown;
//#endregion
//#region node_modules/zod/v4/core/api.d.cts
type Params<T$1 extends $ZodType | $ZodCheck, IssueTypes extends $ZodIssueBase, OmitKeys extends keyof T$1["_zod"]["def"] = never> = Flatten<Partial<EmptyToNever<Omit<T$1["_zod"]["def"], OmitKeys> & ([IssueTypes] extends [never] ? {} : {
  error?: string | $ZodErrorMap<IssueTypes> | undefined;
  /** @deprecated This parameter is deprecated. Use `error` instead. */
  message?: string | undefined;
})>>>;
type TypeParams<T$1 extends $ZodType = $ZodType & {
  _isst: never;
}, AlsoOmit extends Exclude<keyof T$1["_zod"]["def"], "type" | "checks" | "error"> = never> = Params<T$1, NonNullable<T$1["_zod"]["isst"]>, "type" | "checks" | "error" | AlsoOmit>;
type CheckParams<T$1 extends $ZodCheck = $ZodCheck,
// & { _issc: never },
AlsoOmit extends Exclude<keyof T$1["_zod"]["def"], "check" | "error"> = never> = Params<T$1, NonNullable<T$1["_zod"]["issc"]>, "check" | "error" | AlsoOmit>;
type CheckStringFormatParams<T$1 extends $ZodStringFormat = $ZodStringFormat, AlsoOmit extends Exclude<keyof T$1["_zod"]["def"], "type" | "coerce" | "checks" | "error" | "check" | "format"> = never> = Params<T$1, NonNullable<T$1["_zod"]["issc"]>, "type" | "coerce" | "checks" | "error" | "check" | "format" | AlsoOmit>;
type CheckTypeParams<T$1 extends $ZodType & $ZodCheck = $ZodType & $ZodCheck, AlsoOmit extends Exclude<keyof T$1["_zod"]["def"], "type" | "checks" | "error" | "check"> = never> = Params<T$1, NonNullable<T$1["_zod"]["isst"] | T$1["_zod"]["issc"]>, "type" | "checks" | "error" | "check" | AlsoOmit>;
type $ZodCheckEmailParams = CheckStringFormatParams<$ZodEmail, "when">;
type $ZodCheckGUIDParams = CheckStringFormatParams<$ZodGUID, "pattern" | "when">;
type $ZodCheckUUIDParams = CheckStringFormatParams<$ZodUUID, "pattern" | "when">;
type $ZodCheckURLParams = CheckStringFormatParams<$ZodURL, "when">;
type $ZodCheckEmojiParams = CheckStringFormatParams<$ZodEmoji, "when">;
type $ZodCheckNanoIDParams = CheckStringFormatParams<$ZodNanoID, "when">;
type $ZodCheckCUIDParams = CheckStringFormatParams<$ZodCUID, "when">;
type $ZodCheckCUID2Params = CheckStringFormatParams<$ZodCUID2, "when">;
type $ZodCheckULIDParams = CheckStringFormatParams<$ZodULID, "when">;
type $ZodCheckXIDParams = CheckStringFormatParams<$ZodXID, "when">;
type $ZodCheckKSUIDParams = CheckStringFormatParams<$ZodKSUID, "when">;
type $ZodCheckIPv4Params = CheckStringFormatParams<$ZodIPv4, "pattern" | "when" | "version">;
type $ZodCheckIPv6Params = CheckStringFormatParams<$ZodIPv6, "pattern" | "when" | "version">;
type $ZodCheckCIDRv4Params = CheckStringFormatParams<$ZodCIDRv4, "pattern" | "when">;
type $ZodCheckCIDRv6Params = CheckStringFormatParams<$ZodCIDRv6, "pattern" | "when">;
type $ZodCheckBase64Params = CheckStringFormatParams<$ZodBase64, "pattern" | "when">;
type $ZodCheckBase64URLParams = CheckStringFormatParams<$ZodBase64URL, "pattern" | "when">;
type $ZodCheckE164Params = CheckStringFormatParams<$ZodE164, "when">;
type $ZodCheckJWTParams = CheckStringFormatParams<$ZodJWT, "pattern" | "when">;
type $ZodCheckISODateTimeParams = CheckStringFormatParams<$ZodISODateTime, "pattern" | "when">;
type $ZodCheckISODateParams = CheckStringFormatParams<$ZodISODate, "pattern" | "when">;
type $ZodCheckISOTimeParams = CheckStringFormatParams<$ZodISOTime, "pattern" | "when">;
type $ZodCheckISODurationParams = CheckStringFormatParams<$ZodISODuration, "when">;
type $ZodCheckNumberFormatParams = CheckParams<$ZodCheckNumberFormat, "format" | "when">;
type $ZodCheckLessThanParams = CheckParams<$ZodCheckLessThan, "inclusive" | "value" | "when">;
type $ZodCheckGreaterThanParams = CheckParams<$ZodCheckGreaterThan, "inclusive" | "value" | "when">;
type $ZodCheckMultipleOfParams = CheckParams<$ZodCheckMultipleOf, "value" | "when">;
type $ZodCheckMaxLengthParams = CheckParams<$ZodCheckMaxLength, "maximum" | "when">;
type $ZodCheckMinLengthParams = CheckParams<$ZodCheckMinLength, "minimum" | "when">;
type $ZodCheckLengthEqualsParams = CheckParams<$ZodCheckLengthEquals, "length" | "when">;
type $ZodCheckRegexParams = CheckParams<$ZodCheckRegex, "format" | "pattern" | "when">;
type $ZodCheckLowerCaseParams = CheckParams<$ZodCheckLowerCase, "format" | "when">;
type $ZodCheckUpperCaseParams = CheckParams<$ZodCheckUpperCase, "format" | "when">;
type $ZodCheckIncludesParams = CheckParams<$ZodCheckIncludes, "includes" | "format" | "when" | "pattern">;
type $ZodCheckStartsWithParams = CheckParams<$ZodCheckStartsWith, "prefix" | "format" | "when" | "pattern">;
type $ZodCheckEndsWithParams = CheckParams<$ZodCheckEndsWith, "suffix" | "format" | "pattern" | "when">;
type $ZodEnumParams = TypeParams<$ZodEnum, "entries">;
type $ZodNonOptionalParams = TypeParams<$ZodNonOptional, "innerType">;
type $ZodCustomParams = CheckTypeParams<$ZodCustom, "fn">;
type $ZodSuperRefineIssue<T$1 extends $ZodIssueBase = $ZodIssue> = T$1 extends any ? RawIssue<T$1> : never;
type RawIssue<T$1 extends $ZodIssueBase> = T$1 extends any ? Flatten<MakePartial<T$1, "message" | "path"> & {
  /** The schema or check that originated this issue. */
  readonly inst?: $ZodType | $ZodCheck;
  /** If `true`, Zod will execute subsequent checks/refinements instead of immediately aborting */
  readonly continue?: boolean | undefined;
} & Record<string, unknown>> : never;
interface $RefinementCtx<T$1 = unknown> extends ParsePayload<T$1> {
  addIssue(arg: string | $ZodSuperRefineIssue): void;
}
//#endregion
//#region node_modules/zod/v4/classic/errors.d.cts
/** An Error-like class used to store Zod validation issues.  */
interface ZodError<T$1 = unknown> extends $ZodError<T$1> {
  /** @deprecated Use the `z.treeifyError(err)` function instead. */
  format(): $ZodFormattedError<T$1>;
  format<U$1>(mapper: (issue: $ZodIssue) => U$1): $ZodFormattedError<T$1, U$1>;
  /** @deprecated Use the `z.treeifyError(err)` function instead. */
  flatten(): $ZodFlattenedError<T$1>;
  flatten<U$1>(mapper: (issue: $ZodIssue) => U$1): $ZodFlattenedError<T$1, U$1>;
  /** @deprecated Push directly to `.issues` instead. */
  addIssue(issue: $ZodIssue): void;
  /** @deprecated Push directly to `.issues` instead. */
  addIssues(issues: $ZodIssue[]): void;
  /** @deprecated Check `err.issues.length === 0` instead. */
  isEmpty: boolean;
}
declare const ZodError: $constructor<ZodError>;
//#endregion
//#region node_modules/zod/v4/classic/parse.d.cts
type ZodSafeParseResult<T$1> = ZodSafeParseSuccess<T$1> | ZodSafeParseError<T$1>;
type ZodSafeParseSuccess<T$1> = {
  success: true;
  data: T$1;
  error?: never;
};
type ZodSafeParseError<T$1> = {
  success: false;
  data?: never;
  error: ZodError<T$1>;
};
//#endregion
//#region node_modules/zod/v4/classic/schemas.d.cts
type ZodStandardSchemaWithJSON<T$1> = StandardSchemaWithJSONProps<input<T$1>, output<T$1>>;
interface ZodType<out Output = unknown, out Input = unknown, out Internals extends $ZodTypeInternals<Output, Input> = $ZodTypeInternals<Output, Input>> extends $ZodType<Output, Input, Internals> {
  def: Internals["def"];
  type: Internals["def"]["type"];
  /** @deprecated Use `.def` instead. */
  _def: Internals["def"];
  /** @deprecated Use `z.output<typeof schema>` instead. */
  _output: Internals["output"];
  /** @deprecated Use `z.input<typeof schema>` instead. */
  _input: Internals["input"];
  "~standard": ZodStandardSchemaWithJSON<this>;
  /** Converts this schema to a JSON Schema representation. */
  toJSONSchema(params?: ToJSONSchemaParams): ZodStandardJSONSchemaPayload<this>;
  check(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
  with(...checks: (CheckFn<output<this>> | $ZodCheck<output<this>>)[]): this;
  clone(def?: Internals["def"], params?: {
    parent: boolean;
  }): this;
  register<R$1 extends $ZodRegistry>(registry: R$1, ...meta: this extends R$1["_schema"] ? undefined extends R$1["_meta"] ? [$replace<R$1["_meta"], this>?] : [$replace<R$1["_meta"], this>] : ["Incompatible schema"]): this;
  brand<T$1 extends PropertyKey = PropertyKey, Dir extends "in" | "out" | "inout" = "out">(value?: T$1): PropertyKey extends T$1 ? this : $ZodBranded<this, T$1, Dir>;
  parse(data: unknown, params?: ParseContext<$ZodIssue>): output<this>;
  safeParse(data: unknown, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
  parseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
  safeParseAsync(data: unknown, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
  spa: (data: unknown, params?: ParseContext<$ZodIssue>) => Promise<ZodSafeParseResult<output<this>>>;
  encode(data: output<this>, params?: ParseContext<$ZodIssue>): input<this>;
  decode(data: input<this>, params?: ParseContext<$ZodIssue>): output<this>;
  encodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<input<this>>;
  decodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<output<this>>;
  safeEncode(data: output<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<input<this>>;
  safeDecode(data: input<this>, params?: ParseContext<$ZodIssue>): ZodSafeParseResult<output<this>>;
  safeEncodeAsync(data: output<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<input<this>>>;
  safeDecodeAsync(data: input<this>, params?: ParseContext<$ZodIssue>): Promise<ZodSafeParseResult<output<this>>>;
  refine<Ch extends (arg: output<this>) => unknown | Promise<unknown>>(check: Ch, params?: string | $ZodCustomParams): Ch extends ((arg: any) => arg is infer R) ? this & ZodType<R$1, input<this>> : this;
  superRefine(refinement: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => void | Promise<void>): this;
  overwrite(fn: (x: output<this>) => output<this>): this;
  optional(): ZodOptional<this>;
  exactOptional(): ZodExactOptional<this>;
  nonoptional(params?: string | $ZodNonOptionalParams): ZodNonOptional<this>;
  nullable(): ZodNullable<this>;
  nullish(): ZodOptional<ZodNullable<this>>;
  default(def: NoUndefined<output<this>>): ZodDefault<this>;
  default(def: () => NoUndefined<output<this>>): ZodDefault<this>;
  prefault(def: () => input<this>): ZodPrefault<this>;
  prefault(def: input<this>): ZodPrefault<this>;
  array(): ZodArray<this>;
  or<T$1 extends SomeType>(option: T$1): ZodUnion<[this, T$1]>;
  and<T$1 extends SomeType>(incoming: T$1): ZodIntersection<this, T$1>;
  transform<NewOut>(transform: (arg: output<this>, ctx: $RefinementCtx<output<this>>) => NewOut | Promise<NewOut>): ZodPipe<this, ZodTransform<Awaited<NewOut>, output<this>>>;
  catch(def: output<this>): ZodCatch<this>;
  catch(def: (ctx: $ZodCatchCtx) => output<this>): ZodCatch<this>;
  pipe<T$1 extends $ZodType<any, output<this>>>(target: T$1 | $ZodType<any, output<this>>): ZodPipe<this, T$1>;
  readonly(): ZodReadonly<this>;
  /** Returns a new instance that has been registered in `z.globalRegistry` with the specified description */
  describe(description: string): this;
  description?: string;
  /** Returns the metadata associated with this instance in `z.globalRegistry` */
  meta(): $replace<GlobalMeta, this> | undefined;
  /** Returns a new instance that has been registered in `z.globalRegistry` with the specified metadata */
  meta(data: $replace<GlobalMeta, this>): this;
  /** @deprecated Try safe-parsing `undefined` (this is what `isOptional` does internally):
   *
   * ```ts
   * const schema = z.string().optional();
   * const isOptional = schema.safeParse(undefined).success; // true
   * ```
   */
  isOptional(): boolean;
  /**
   * @deprecated Try safe-parsing `null` (this is what `isNullable` does internally):
   *
   * ```ts
   * const schema = z.string().nullable();
   * const isNullable = schema.safeParse(null).success; // true
   * ```
   */
  isNullable(): boolean;
  apply<T$1>(fn: (schema: this) => T$1): T$1;
}
interface _ZodType<out Internals extends $ZodTypeInternals = $ZodTypeInternals> extends ZodType<any, any, Internals> {}
declare const ZodType: $constructor<ZodType>;
interface _ZodString<T$1 extends $ZodStringInternals<unknown> = $ZodStringInternals<unknown>> extends _ZodType<T$1> {
  format: string | null;
  minLength: number | null;
  maxLength: number | null;
  regex(regex: RegExp, params?: string | $ZodCheckRegexParams): this;
  includes(value: string, params?: string | $ZodCheckIncludesParams): this;
  startsWith(value: string, params?: string | $ZodCheckStartsWithParams): this;
  endsWith(value: string, params?: string | $ZodCheckEndsWithParams): this;
  min(minLength: number, params?: string | $ZodCheckMinLengthParams): this;
  max(maxLength: number, params?: string | $ZodCheckMaxLengthParams): this;
  length(len: number, params?: string | $ZodCheckLengthEqualsParams): this;
  nonempty(params?: string | $ZodCheckMinLengthParams): this;
  lowercase(params?: string | $ZodCheckLowerCaseParams): this;
  uppercase(params?: string | $ZodCheckUpperCaseParams): this;
  trim(): this;
  normalize(form?: "NFC" | "NFD" | "NFKC" | "NFKD" | (string & {})): this;
  toLowerCase(): this;
  toUpperCase(): this;
  slugify(): this;
}
/** @internal */
declare const _ZodString: $constructor<_ZodString>;
interface ZodString extends _ZodString<$ZodStringInternals<string>> {
  /** @deprecated Use `z.email()` instead. */
  email(params?: string | $ZodCheckEmailParams): this;
  /** @deprecated Use `z.url()` instead. */
  url(params?: string | $ZodCheckURLParams): this;
  /** @deprecated Use `z.jwt()` instead. */
  jwt(params?: string | $ZodCheckJWTParams): this;
  /** @deprecated Use `z.emoji()` instead. */
  emoji(params?: string | $ZodCheckEmojiParams): this;
  /** @deprecated Use `z.guid()` instead. */
  guid(params?: string | $ZodCheckGUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuid(params?: string | $ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv4(params?: string | $ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv6(params?: string | $ZodCheckUUIDParams): this;
  /** @deprecated Use `z.uuid()` instead. */
  uuidv7(params?: string | $ZodCheckUUIDParams): this;
  /** @deprecated Use `z.nanoid()` instead. */
  nanoid(params?: string | $ZodCheckNanoIDParams): this;
  /** @deprecated Use `z.guid()` instead. */
  guid(params?: string | $ZodCheckGUIDParams): this;
  /** @deprecated Use `z.cuid()` instead. */
  cuid(params?: string | $ZodCheckCUIDParams): this;
  /** @deprecated Use `z.cuid2()` instead. */
  cuid2(params?: string | $ZodCheckCUID2Params): this;
  /** @deprecated Use `z.ulid()` instead. */
  ulid(params?: string | $ZodCheckULIDParams): this;
  /** @deprecated Use `z.base64()` instead. */
  base64(params?: string | $ZodCheckBase64Params): this;
  /** @deprecated Use `z.base64url()` instead. */
  base64url(params?: string | $ZodCheckBase64URLParams): this;
  /** @deprecated Use `z.xid()` instead. */
  xid(params?: string | $ZodCheckXIDParams): this;
  /** @deprecated Use `z.ksuid()` instead. */
  ksuid(params?: string | $ZodCheckKSUIDParams): this;
  /** @deprecated Use `z.ipv4()` instead. */
  ipv4(params?: string | $ZodCheckIPv4Params): this;
  /** @deprecated Use `z.ipv6()` instead. */
  ipv6(params?: string | $ZodCheckIPv6Params): this;
  /** @deprecated Use `z.cidrv4()` instead. */
  cidrv4(params?: string | $ZodCheckCIDRv4Params): this;
  /** @deprecated Use `z.cidrv6()` instead. */
  cidrv6(params?: string | $ZodCheckCIDRv6Params): this;
  /** @deprecated Use `z.e164()` instead. */
  e164(params?: string | $ZodCheckE164Params): this;
  /** @deprecated Use `z.iso.datetime()` instead. */
  datetime(params?: string | $ZodCheckISODateTimeParams): this;
  /** @deprecated Use `z.iso.date()` instead. */
  date(params?: string | $ZodCheckISODateParams): this;
  /** @deprecated Use `z.iso.time()` instead. */
  time(params?: string | $ZodCheckISOTimeParams): this;
  /** @deprecated Use `z.iso.duration()` instead. */
  duration(params?: string | $ZodCheckISODurationParams): this;
}
declare const ZodString: $constructor<ZodString>;
interface ZodStringFormat<Format extends string = string> extends _ZodString<$ZodStringFormatInternals<Format>> {}
declare const ZodStringFormat: $constructor<ZodStringFormat>;
interface ZodEmail extends ZodStringFormat<"email"> {
  _zod: $ZodEmailInternals;
}
declare const ZodEmail: $constructor<ZodEmail>;
interface ZodUUID extends ZodStringFormat<"uuid"> {
  _zod: $ZodUUIDInternals;
}
declare const ZodUUID: $constructor<ZodUUID>;
interface _ZodNumber<Internals extends $ZodNumberInternals = $ZodNumberInternals> extends _ZodType<Internals> {
  gt(value: number, params?: string | $ZodCheckGreaterThanParams): this;
  /** Identical to .min() */
  gte(value: number, params?: string | $ZodCheckGreaterThanParams): this;
  min(value: number, params?: string | $ZodCheckGreaterThanParams): this;
  lt(value: number, params?: string | $ZodCheckLessThanParams): this;
  /** Identical to .max() */
  lte(value: number, params?: string | $ZodCheckLessThanParams): this;
  max(value: number, params?: string | $ZodCheckLessThanParams): this;
  /** Consider `z.int()` instead. This API is considered *legacy*; it will never be removed but a better alternative exists. */
  int(params?: string | $ZodCheckNumberFormatParams): this;
  /** @deprecated This is now identical to `.int()`. Only numbers in the safe integer range are accepted. */
  safe(params?: string | $ZodCheckNumberFormatParams): this;
  positive(params?: string | $ZodCheckGreaterThanParams): this;
  nonnegative(params?: string | $ZodCheckGreaterThanParams): this;
  negative(params?: string | $ZodCheckLessThanParams): this;
  nonpositive(params?: string | $ZodCheckLessThanParams): this;
  multipleOf(value: number, params?: string | $ZodCheckMultipleOfParams): this;
  /** @deprecated Use `.multipleOf()` instead. */
  step(value: number, params?: string | $ZodCheckMultipleOfParams): this;
  /** @deprecated In v4 and later, z.number() does not allow infinite values by default. This is a no-op. */
  finite(params?: unknown): this;
  minValue: number | null;
  maxValue: number | null;
  /** @deprecated Check the `format` property instead.  */
  isInt: boolean;
  /** @deprecated Number schemas no longer accept infinite values, so this always returns `true`. */
  isFinite: boolean;
  format: string | null;
}
interface ZodNumber extends _ZodNumber<$ZodNumberInternals<number>> {}
declare const ZodNumber: $constructor<ZodNumber>;
interface ZodNumberFormat extends ZodNumber {
  _zod: $ZodNumberFormatInternals;
}
declare const ZodNumberFormat: $constructor<ZodNumberFormat>;
interface ZodInt extends ZodNumberFormat {}
interface _ZodBoolean<T$1 extends $ZodBooleanInternals = $ZodBooleanInternals> extends _ZodType<T$1> {}
interface ZodBoolean extends _ZodBoolean<$ZodBooleanInternals<boolean>> {}
declare const ZodBoolean: $constructor<ZodBoolean>;
interface ZodArray<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodArrayInternals<T$1>>, $ZodArray<T$1> {
  element: T$1;
  min(minLength: number, params?: string | $ZodCheckMinLengthParams): this;
  nonempty(params?: string | $ZodCheckMinLengthParams): this;
  max(maxLength: number, params?: string | $ZodCheckMaxLengthParams): this;
  length(len: number, params?: string | $ZodCheckLengthEqualsParams): this;
  unwrap(): T$1;
  "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodArray: $constructor<ZodArray>;
type SafeExtendShape<Base extends $ZodShape, Ext extends $ZodLooseShape> = { [K in keyof Ext]: K extends keyof Base ? output<Ext[K]> extends output<Base[K]> ? input<Ext[K]> extends input<Base[K]> ? Ext[K] : never : never : Ext[K] };
interface ZodObject< /** @ts-ignore Cast variance */
out Shape extends $ZodShape = $ZodLooseShape, out Config extends $ZodObjectConfig = $strip> extends _ZodType<$ZodObjectInternals<Shape, Config>>, $ZodObject<Shape, Config> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  shape: Shape;
  keyof(): ZodEnum<ToEnum<keyof Shape & string>>;
  /** Define a schema to validate all unrecognized keys. This overrides the existing strict/loose behavior. */
  catchall<T$1 extends SomeType>(schema: T$1): ZodObject<Shape, $catchall<T$1>>;
  /** @deprecated Use `z.looseObject()` or `.loose()` instead. */
  passthrough(): ZodObject<Shape, $loose>;
  /** Consider `z.looseObject(A.shape)` instead */
  loose(): ZodObject<Shape, $loose>;
  /** Consider `z.strictObject(A.shape)` instead */
  strict(): ZodObject<Shape, $strict>;
  /** This is the default behavior. This method call is likely unnecessary. */
  strip(): ZodObject<Shape, $strip>;
  extend<U$1 extends $ZodLooseShape>(shape: U$1): ZodObject<Extend<Shape, U$1>, Config>;
  safeExtend<U$1 extends $ZodLooseShape>(shape: SafeExtendShape<Shape, U$1> & Partial<Record<keyof Shape, SomeType>>): ZodObject<Extend<Shape, U$1>, Config>;
  /**
   * @deprecated Use [`A.extend(B.shape)`](https://zod.dev/api?id=extend) instead.
   */
  merge<U$1 extends ZodObject>(other: U$1): ZodObject<Extend<Shape, U$1["shape"]>, U$1["_zod"]["config"]>;
  pick<M$1 extends Mask<keyof Shape>>(mask: M$1 & Record<Exclude<keyof M$1, keyof Shape>, never>): ZodObject<Flatten<Pick<Shape, Extract<keyof Shape, keyof M$1>>>, Config>;
  omit<M$1 extends Mask<keyof Shape>>(mask: M$1 & Record<Exclude<keyof M$1, keyof Shape>, never>): ZodObject<Flatten<Omit<Shape, Extract<keyof Shape, keyof M$1>>>, Config>;
  partial(): ZodObject<{ [k in keyof Shape]: ZodOptional<Shape[k]> }, Config>;
  partial<M$1 extends Mask<keyof Shape>>(mask: M$1 & Record<Exclude<keyof M$1, keyof Shape>, never>): ZodObject<{ [k in keyof Shape]: k extends keyof M$1 ? ZodOptional<Shape[k]> : Shape[k] }, Config>;
  required(): ZodObject<{ [k in keyof Shape]: ZodNonOptional<Shape[k]> }, Config>;
  required<M$1 extends Mask<keyof Shape>>(mask: M$1 & Record<Exclude<keyof M$1, keyof Shape>, never>): ZodObject<{ [k in keyof Shape]: k extends keyof M$1 ? ZodNonOptional<Shape[k]> : Shape[k] }, Config>;
}
declare const ZodObject: $constructor<ZodObject>;
interface ZodUnion<T$1 extends readonly SomeType[] = readonly $ZodType[]> extends _ZodType<$ZodUnionInternals<T$1>>, $ZodUnion<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  options: T$1;
}
declare const ZodUnion: $constructor<ZodUnion>;
interface ZodIntersection<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodIntersectionInternals<A, B>>, $ZodIntersection<A, B> {
  "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodIntersection: $constructor<ZodIntersection>;
interface ZodEnum< /** @ts-ignore Cast variance */
out T$1 extends EnumLike = EnumLike> extends _ZodType<$ZodEnumInternals<T$1>>, $ZodEnum<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  enum: T$1;
  options: Array<T$1[keyof T$1]>;
  extract<const U$1 extends readonly (keyof T$1)[]>(values: U$1, params?: string | $ZodEnumParams): ZodEnum<Flatten<Pick<T$1, U$1[number]>>>;
  exclude<const U$1 extends readonly (keyof T$1)[]>(values: U$1, params?: string | $ZodEnumParams): ZodEnum<Flatten<Omit<T$1, U$1[number]>>>;
}
declare const ZodEnum: $constructor<ZodEnum>;
interface ZodTransform<O = unknown, I = unknown> extends _ZodType<$ZodTransformInternals<O, I>>, $ZodTransform<O, I> {
  "~standard": ZodStandardSchemaWithJSON<this>;
}
declare const ZodTransform: $constructor<ZodTransform>;
interface ZodOptional<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodOptionalInternals<T$1>>, $ZodOptional<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodOptional: $constructor<ZodOptional>;
interface ZodExactOptional<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodExactOptionalInternals<T$1>>, $ZodExactOptional<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodExactOptional: $constructor<ZodExactOptional>;
interface ZodNullable<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodNullableInternals<T$1>>, $ZodNullable<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodNullable: $constructor<ZodNullable>;
interface ZodDefault<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodDefaultInternals<T$1>>, $ZodDefault<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
  /** @deprecated Use `.unwrap()` instead. */
  removeDefault(): T$1;
}
declare const ZodDefault: $constructor<ZodDefault>;
interface ZodPrefault<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodPrefaultInternals<T$1>>, $ZodPrefault<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodPrefault: $constructor<ZodPrefault>;
interface ZodNonOptional<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodNonOptionalInternals<T$1>>, $ZodNonOptional<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodNonOptional: $constructor<ZodNonOptional>;
interface ZodCatch<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodCatchInternals<T$1>>, $ZodCatch<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
  /** @deprecated Use `.unwrap()` instead. */
  removeCatch(): T$1;
}
declare const ZodCatch: $constructor<ZodCatch>;
interface ZodPipe<A extends SomeType = $ZodType, B extends SomeType = $ZodType> extends _ZodType<$ZodPipeInternals<A, B>>, $ZodPipe<A, B> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  in: A;
  out: B;
}
declare const ZodPipe: $constructor<ZodPipe>;
interface ZodReadonly<T$1 extends SomeType = $ZodType> extends _ZodType<$ZodReadonlyInternals<T$1>>, $ZodReadonly<T$1> {
  "~standard": ZodStandardSchemaWithJSON<this>;
  unwrap(): T$1;
}
declare const ZodReadonly: $constructor<ZodReadonly>;
//#endregion
//#region src/modules/user/UserController.d.ts
declare class UserController {
  static updateUser: ((req: VovkRequest<{
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
    schema: Omit<VovkHandlerSchema, "httpMethod" | "path"> & Partial<VovkHandlerSchema>;
    wrapper?: ((req: VovkRequest<any, any, any>, params: {
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
        }, fakeReq: Pick<VovkRequest<any, any, any>, "vovk">) => TTransformed;
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
      disableServerSideValidation: boolean | VovkValidationType[] | undefined;
      skipSchemaEmission: boolean | VovkValidationType[] | undefined;
      validateEachIteration: boolean | undefined;
      body: ZodObject<{
        email: ZodEmail;
        profile: ZodObject<{
          name: ZodString;
          age: ZodInt;
        }, $strip>;
      }, $strip> | undefined;
      query: ZodObject<{
        notify: ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, $strip> | undefined;
      params: ZodObject<{
        id: ZodUUID;
      }, $strip> | undefined;
      output: ZodObject<{
        success: ZodBoolean;
        id: ZodUUID;
        notify: ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, $strip> | undefined;
      iteration: CombinedSpec<unknown, unknown> | undefined;
      handle: VovkTypedMethod<(req: VovkRequest<{
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
        validationType: VovkValidationType;
      }) => any) | undefined;
      validate: (data: unknown, model: NonNullable<ZodObject<{
        email: ZodEmail;
        profile: ZodObject<{
          name: ZodString;
          age: ZodInt;
        }, $strip>;
      }, $strip> | CombinedSpec<unknown, unknown> | ZodObject<{
        id: ZodUUID;
      }, $strip> | ZodObject<{
        notify: ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, $strip> | ZodObject<{
        success: ZodBoolean;
        id: ZodUUID;
        notify: ZodEnum<{
          email: "email";
          push: "push";
          none: "none";
        }>;
      }, $strip>>, meta: {
        validationType: VovkValidationType | "form";
        req: VovkRequest<any, any, any>;
        status?: number;
        i?: number;
      }) => unknown;
      preferTransformed: boolean;
      operationObject: VovkOperationObject | undefined;
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
    schema: Omit<VovkHandlerSchema, "httpMethod" | "path"> & Partial<VovkHandlerSchema>;
    wrapper?: ((req: VovkRequest<any, any, any>, params: undefined) => AsyncGenerator<{
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
        }, void, unknown>, fakeReq: Pick<VovkRequest<any, any, any>, "vovk">) => TTransformed;
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
      disableServerSideValidation: boolean | VovkValidationType[] | undefined;
      skipSchemaEmission: boolean | VovkValidationType[] | undefined;
      validateEachIteration: boolean | undefined;
      body: CombinedSpec<unknown, unknown> | undefined;
      query: CombinedSpec<unknown, unknown> | undefined;
      params: CombinedSpec<unknown, unknown> | undefined;
      output: CombinedSpec<unknown, unknown> | undefined;
      iteration: ZodObject<{
        message: ZodString;
      }, $strip> | undefined;
      handle: VovkTypedMethod<() => AsyncGenerator<{
        message: string;
      }, void, unknown>, unknown, unknown, unknown, unknown, {
        message: string;
      }, false>;
      toJSONSchema: ((model: any, meta: {
        validationType: VovkValidationType;
      }) => any) | undefined;
      validate: (data: unknown, model: NonNullable<CombinedSpec<unknown, unknown> | ZodObject<{
        message: ZodString;
      }, $strip>>, meta: {
        validationType: VovkValidationType | "form";
        req: VovkRequest<any, any, any>;
        status?: number;
        i?: number;
      }) => unknown;
      preferTransformed: boolean;
      operationObject: VovkOperationObject | undefined;
    };
  };
}
//#endregion
//#region src/modules/static/openapi/OpenApiController.d.ts
declare class OpenApiController {
  static getSpec: () => OpenAPIObject;
}
//#endregion
//#region tmp_prebundle/schema.d.ts
declare const schema$1: {
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
declare const UserRPC: VovkRPCModule<typeof UserController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const StreamRPC: VovkRPCModule<typeof StreamController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
declare const OpenApiRPC: VovkRPCModule<typeof OpenApiController, {
  apiRoot?: string;
  disableClientValidation?: boolean;
  validateOnClient?: VovkValidateOnClient<unknown> | Promise<{
    validateOnClient: VovkValidateOnClient<unknown>;
  }> | undefined;
  interpretAs?: string;
  init?: RequestInit;
}>;
//#endregion
export { OpenApiRPC, StreamRPC, UserRPC, pick, schema$1 as schema };