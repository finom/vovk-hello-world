import { prefix, get, openapi, vovkSchemaToOpenAPI } from "vovk";
import { schema } from "vovk-client";
import packageJson from "../../../../package.json" with { type: "json" };

@prefix("openapi")
export default class OpenApiController {
  @openapi({
    summary: "OpenAPI spec",
    description: 'Get the OpenAPI spec for the "Hello World" app API',
  })
  @get("spec.json", { cors: true })
  static getSpec = async () => {
    return vovkSchemaToOpenAPI({
      rootEntry: "api",
      schema,
      openAPIObject: {
        info: {
          title: '"Hello World" app API',
          description:
            'API for "Hello World" app hosted at https://vovk-hello-world.vercel.app/. Source code is available on Github https://github.com/finom/vovk-hello-world.',
          license: {
            name: "MIT",
            url: "https://opensource.org/licenses/MIT",
          },
          version: packageJson.version,
        },
      },
      package: packageJson,
    });
  };
}
