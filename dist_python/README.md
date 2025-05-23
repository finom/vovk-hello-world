

# vovk_hello_world v0.1.0 ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)




License: **MIT**

```bash
# Install the package
pip install vovk_hello_world
```



## OpenApiRPC
        
### OpenApiRPC.get_spec
> OpenAPI spec

Get the OpenAPI spec for the "Hello World" app API

Endpoint: `http://localhost:3000/api/static/openapi/spec.json`

```py
from vovk_hello_world import OpenApiRPC

response = OpenApiRPC.get_spec()


```
        
    


## UserRPC
        
### UserRPC.update_user
> Update user

Update user by ID

Endpoint: `http://localhost:3000/api/users/:id`

```py
from vovk_hello_world import UserRPC

response = UserRPC.update_user(
    params={
        "id": "123e4567-e89b-12d3-a456-426614174000"
    },
    body={
        "email": "john@example.com",
        "profile": {
          "name": "John Doe",
          "age": 25
        }
    },
    query={
        "notify": "email"
    },
)

print(response)
# {
#   "success": true
# }
```
        
    

