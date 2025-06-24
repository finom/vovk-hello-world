import { initVovk, generateStaticAPI } from "vovk";
import OpenApiController from "../../../../modules/static/openapi/OpenApiController";

const controllers = {
  OpenApiRPC: OpenApiController,
};

export type Controllers = typeof controllers;
export function generateStaticParams() {
  return generateStaticAPI(controllers);
}
export const { GET } = initVovk({
  segmentName: "static",
  emitSchema: true,
  controllers,
});
