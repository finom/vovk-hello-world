import { UserRPC, OpenApiRPC, StreamRPC } from "vovk-client";

async function main() {
  console.log("\n--- Node.js Demo (Local) ---");
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

  console.log("UserRPC.updateUser:", updateUserResponse);

  const openapiResponse = await OpenApiRPC.getSpec();
  console.log(
    `OpenApiRPC.getSpec response: ${openapiResponse.info.title} ${openapiResponse.info.version}`,
  );

  const streamResponse = await StreamRPC.streamTokens();
  console.log(`streamTokens:`);
  for await (const item of streamResponse) {
    process.stdout.write(item.message);
  }
  process.stdout.write("\n");
}
main().catch(console.error);
