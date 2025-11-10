# Add ../dist_python/src to sys.path so we can import the local module
import os
import sys
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
LOCAL_SRC = os.path.normpath(os.path.join(BASE_DIR, "..", "dist_python", "src"))
if LOCAL_SRC not in sys.path:
    sys.path.insert(0, LOCAL_SRC)

from vovk_hello_world import UserRPC, OpenApiRPC, StreamRPC

def main() -> None:
    print("\n--- Python Demo (Local) ---")

    body: UserRPC.UpdateUserBody = {
        "email": "john@example.com",
        "profile": {
            "name": "John Doe",
            "age": 25
        }
    }
    query: UserRPC.UpdateUserQuery = {"notify": "email"}
    params: UserRPC.UpdateUserParams = {"id": "123e4567-e89b-12d3-a456-426614174000"}
    update_user_response = UserRPC.update_user(
        params=params,
        body=body,
        query=query
    )
    print('UserRPC.update_user response:', update_user_response)
    
    openapi_response = OpenApiRPC.get_spec()
    print(f"OpenApiRPC.get_spec response: {openapi_response['info']['title']} {openapi_response['info']['version']}")
    
    stream_response = StreamRPC.stream_tokens()
    print("StreamRPC.stream_tokens response:")
    for item in stream_response:
        print(item['message'], end='', flush=True)
    print()  # Add newline after streaming

if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"Error: {e}")

