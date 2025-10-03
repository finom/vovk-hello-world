import { prefix, get, operation } from "vovk";
import { withZod } from "vovk-zod";
import { z } from "zod";
import StreamService from "./StreamService";

@prefix("streams")
export default class StreamController {
  @operation({
    summary: "Stream tokens",
    description: "Stream tokens to the client",
  })
  @get("tokens")
  static streamTokens = withZod({
    iteration: z
      .object({
        message: z.string().meta({ description: "Message from the token" }),
      })
      .meta({
        description: "Streamed token object",
      }),
    async *handle() {
      yield* StreamService.streamTokens();
    },
  });
}
