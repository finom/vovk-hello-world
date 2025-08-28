import { prefix, get, operation } from "vovk";
import { openapi } from "vovk-client/openapi";

@prefix("openapi")
export default class OpenApiController {
  @operation({
    summary: "OpenAPI spec",
    description: 'Get the OpenAPI spec for the "Hello World" app API',
  })
  @get("spec.json", { cors: true })
  static getSpec = () => openapi;
}
