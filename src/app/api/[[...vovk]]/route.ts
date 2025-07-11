import { initSegment } from "vovk";
import UserController from "../../../modules/user/UserController";
import StreamController from "../../../modules/stream/StreamController";

export const runtime = "edge";

const controllers = {
  UserRPC: UserController,
  StreamRPC: StreamController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initSegment({
  emitSchema: true,
  controllers,
  onError: console.error,
});
