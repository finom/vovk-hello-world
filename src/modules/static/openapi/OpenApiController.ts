import { get, operation } from "vovk";
import { openapi } from "vovk-client/openapi";

export default class OpenApiController {
  @operation({
    summary: "OpenAPI spec",
    description: 'Get the OpenAPI spec for the "Hello World" app API',
  })
  @get("openapi.json", { cors: true })
  static getSpec = () => openapi;
}
