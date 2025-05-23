import { initVovk } from "vovk";
import UserController from "../../../modules/user/UserController";

export const runtime = "edge";

const controllers = {
  UserRPC: UserController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initVovk({
  emitSchema: true,
  controllers,
  onError: console.error,
});
