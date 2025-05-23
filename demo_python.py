from dist_python.src.vovk_hello_world import UserRPC

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

response = UserRPC.update_user(
    params=params,
    body=body,
    query=query,
)

print(response)
# {
#   "success": True
# }