import { prefix, get } from "vovk";
import { openapi, fromSchema } from "vovk-openapi";
import { schema } from "vovk-client";

@prefix("openapi")
export default class OpenApiController {
  @openapi({
    summary: "OpenAPI spec",
    description: 'Get the OpenAPI spec for the "Hello World" app API',
  })
  @get("spec.json")
  static getSpec = async () => {
    return fromSchema({
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
          version: "1.0.0",
        },
      },
      package: {
        name: "vovk-showcase",
      },
    });
  };
}
