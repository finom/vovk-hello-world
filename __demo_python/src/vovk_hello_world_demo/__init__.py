from vovk_hello_world import UserRPC, OpenApiRPC, StreamRPC

params: UserRPC.UpdateUserParams = {
    "id": "123e4567-e89b-12d3-a456-426614174000"
}
body: UserRPC.UpdateUserBody = {
    "email": "john@example.com",
    "profile": {
        "name": "John Doe",
        "age": 25
    }
}

query: UserRPC.UpdateUserQuery = {
    "notify": "email"
}

update_user_response = UserRPC.update_user(
    params=params,
    body=body,
    query=query,
)

print(update_user_response)
# {
#   "success": True
# }

openapi_response = OpenApiRPC.get_spec()

print(f"get_spec result: {openapi_response['info']['title']} {openapi_response['info']['version']}")

stream_response = StreamRPC.stream_tokens()
for i, item in enumerate(stream_response):
    print(f"stream_tokens iteration #{i}: {item}")

