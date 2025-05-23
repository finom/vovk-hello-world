

# vovk_hello_world v0.1.0 ![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)



License: **MIT**


```bash
# Install the package
cargo install vovk_hello_world
```



## mod open_api_rpc
        
### open_api_rpc::get_spec
> OpenAPI spec

Get the OpenAPI spec for the "Hello World" app API

Endpoint: `http://localhost:3000/api/static/openapi/spec.json`

```rust
use vovk_hello_world::open_api_rpc;

pub fn main() {
  let response = open_api_rpc::get_spec(
    (), /* body */ 
    (), /* query */ 
    (), /* params */ 
    None, /* headers (HashMap) */ 
    None, /* api_root */ 
    false, /* disable_client_validation */
  );

  
}
```
        
    


## mod user_rpc
        
### user_rpc::update_user
> Update user

Update user by ID

Endpoint: `http://localhost:3000/api/users/:id`

```rust
use vovk_hello_world::user_rpc;

pub fn main() {
  let response = user_rpc::update_user(
    serde_json::from_value(serde_json::json!({
        "email": "john@example.com",
        "profile": {
          "name": "John Doe",
          "age": 25
        }
    })).unwrap(), /* body */ 
    serde_json::from_value(serde_json::json!({
        "notify": "email"
    })).unwrap(), /* query */ 
    serde_json::from_value(serde_json::json!({
        "id": "123e4567-e89b-12d3-a456-426614174000"
    })).unwrap(), /* params */ 
    None, /* headers (HashMap) */ 
    None, /* api_root */ 
    false, /* disable_client_validation */
  );

  println!("{}", serde_json::to_string_pretty(&response).unwrap()); /* 
  {
    "Ok": {
      "success": true
    }
} 
  */
}
```
        
    

