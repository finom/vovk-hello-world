import { UserRPC, OpenApiRPC, StreamRPC } from "vovk-client"; // composed client
import { OpenApiRPC as OpenApiRPCFromBundle } from "vovk-hello-world"; // bundle

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

  console.log('UserRPC.updateUser:', updateUserResponse);

  const openapiResponse = await OpenApiRPC.getSpec();
  console.log(
    `OpenApiRPC.getSpec from the local module: ${openapiResponse.info.title} ${openapiResponse.info.version}`,
  );

  const streamResponse = await StreamRPC.streamTokens();
  console.log(`streamTokens:`);
  for await (const item of streamResponse) {
    process.stdout.write(item.message);
  }
  process.stdout.write("\n");

  const openapiResponseFromBundle = await OpenApiRPCFromBundle.getSpec();
  console.log(
    `OpenApiRPC.getSpec from "vovk-hello-world" package: ${openapiResponseFromBundle.info.title} ${openapiResponseFromBundle.info.version}`,
  );
 
}
main().catch(console.error);
