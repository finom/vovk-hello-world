use std::io::Write;
use vovk_hello_world_local::{
  user_rpc, 
  open_api_rpc, 
  stream_rpc 
};
pub fn main() {
  println!("\n--- Rust Demo (Local) ---");
  use user_rpc::update_user_::{
    body as Body, 
    body_::profile as Profile,
    query as Query,
    query_::notify as Notify,
    params as Params,
  };

  let update_user_response = user_rpc::update_user(
    Body {
      email: String::from("john@example.com"),
      profile: Profile {
        name: String::from("John Doe"),
        age: 25
      }
    },
    Query {
      notify: Notify::email
    },
    Params {
      id: String::from("123e4567-e89b-12d3-a456-426614174000")
    },
    None,
    None,
    false,
  );

  match update_user_response {
    Ok(response) => println!("user_rpc.update_user: {:?}", response),
    Err(e) => println!("update_user error: {:?}", e),
  }

  let openapi_response = open_api_rpc::get_spec(
    (),
    (),
    (),
    None,
    None,
    false,
  );

  match openapi_response {
    Ok(spec) => {
      if let (Some(title), Some(version)) = (
        spec["info"]["title"].as_str(),
        spec["info"]["version"].as_str()
      ) {
        println!("open_api_rpc.get_spec from the local module: {} {}", title, version);
      } else {
        println!("Could not extract title or version from OpenAPI spec");
      }
    },
    Err(e) => println!("Error fetching OpenAPI spec: {:?}", e),
  }

  let stream_response = stream_rpc::stream_tokens(
      (),
      (),
      (),
      None,
      None,
      false,
  );
  
  match stream_response {
    Ok(stream) => {
      print!("streamTokens:\n");
      for (_i, item) in stream.enumerate() {
        print!("{}", item.message.as_str());
        std::io::stdout().flush().unwrap();
      }
      println!();
    },
    Err(e) => println!("Error initiating stream: {:?}", e),
  }
}