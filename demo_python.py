from dist_python.src.vovk_hello_world import UserRPC, OpenApiRPC, StreamRPC  # local module
import vovk_hello_world

def main():
    print("\n--- Python Demo ---")
    # Update user using local module
    update_user_response = UserRPC.update_user(
        params={"id": "123e4567-e89b-12d3-a456-426614174000"},
        body={
            "email": "john@example.com",
            "profile": {
                "name": "John Doe",
                "age": 25
            }
        },
        query={"notify": "email"}
    )
    
    print('UserRPC.update_user:', update_user_response)
    
    # Get OpenAPI spec from local module
    openapi_response = OpenApiRPC.get_spec()
    print(f"OpenApiRPC.get_spec from the local module: {openapi_response['info']['title']} {openapi_response['info']['version']}")
    
    # Stream tokens from local module
    stream_response = StreamRPC.stream_tokens()
    print("streamTokens:")
    for item in stream_response:
        print(item['message'], end='', flush=True)
    print()  # Add newline after streaming
    
    # Get OpenAPI spec from installed package
    openapi_response_from_bundle = vovk_hello_world.OpenApiRPC.get_spec()
    print(f"OpenApiRPC.get_spec from \"vovk_hello_world\" package: {openapi_response_from_bundle['info']['title']} {openapi_response_from_bundle['info']['version']}")

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Error: {e}")

