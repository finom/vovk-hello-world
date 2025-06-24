# vovk-showcase v0.0.0 ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> A showcase for Next.js + Vovk.ts + Zod, demonstrating its capabilities with TypeScript, Rust, and Python RPC.

License: **MIT**

```bash
# Install the package
npm install vovk-showcase
```

## UserRPC

### UserRPC.updateUser

> Update user

Update user by ID

`POST http://localhost:3000/api/users/:id`

```ts
import { UserRPC } from "vovk-showcase";

const response = await UserRPC.updateUser({
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

console.log(response);
/* 
{
    success: true
}
*/
```

## StreamRPC

### StreamRPC.streamTokens

> Stream tokens

Stream tokens to the client

`GET http://localhost:3000/api/streams/tokens`

```ts
import { StreamRPC } from "vovk-showcase";

using response = await StreamRPC.streamTokens();

for await (const item of response) {
  console.log(item);
  /*
    {
        message: "string"
    }
    */
}
```

## OpenApiRPC

### OpenApiRPC.getSpec

> OpenAPI spec

Get the OpenAPI spec for the "Hello World" app API

`GET http://localhost:3000/api/static/openapi/spec.json`

```ts
import { OpenApiRPC } from "vovk-showcase";

const response = await OpenApiRPC.getSpec();
```
