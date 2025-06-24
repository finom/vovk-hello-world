import { UserRPC, OpenApiRPC, StreamRPC } from "vovk-client"; // composed client
import { OpenApiRPC as OpenApiRPCFromBundle } from "../dist/index.mjs"; // bundle

async function main() {
  const updateUserResponse = await UserRPC.updateUser({
    params: {
      id: "123e4567-e89b-12d3-a456-426614174000",
    },
    body: {
      email: "john@example.com",
      profile: {
        name: "John Doe",
        age: 25,
      },
    },
    query: {
      notify: "email",
    },
  });

  console.log(updateUserResponse);

  const openapiResponse = await OpenApiRPC.getSpec();
  console.log(
    `getSpec result: ${openapiResponse.info.title} ${openapiResponse.info.version}`,
  );

  const openapiResponseFromBundle = await OpenApiRPCFromBundle.getSpec();
  console.log(
    `getSpec from bundle result: ${openapiResponseFromBundle.info.title} ${openapiResponseFromBundle.info.version}`,
  );
  const streamResponse = await StreamRPC.streamTokens();
  for await (const item of streamResponse) {
    console.log(`stream_tokens iteration: ${JSON.stringify(item)}`);
  }
}
main().catch(console.error);
