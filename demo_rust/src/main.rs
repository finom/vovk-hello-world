use vovk_showcase::{ user_rpc, open_api_rpc, stream_rpc };

pub fn main() {
  use user_rpc::update_user_::{ body as Body, query as Query, params as Params };
  use user_rpc::update_user_::body_::profile as Profile;
  use user_rpc::update_user_::query_::notify as Notify;

  let update_user_response = user_rpc::update_user(
    Body {
      email: String::from("john@example.com"),
      profile: Profile {
        name: String::from("John Doe"),
        age: 25
      }
    },
    Query {
      notify: Notify::none
    },
    Params {
      id: String::from("123e4567-e89b-12d3-a456-426614174000")
    },
    None,
    None,
    false,
  );

  match update_user_response {
    Ok(response) => println!("update_user success: {:?}", response),
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
        println!("get_spec result: {} {}", title, version);
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
      for (i, item) in stream.enumerate() {
          println!("stream_tokens iteration #{}: {:?}", i, item);
      }
    },
    Err(e) => println!("Error initiating stream: {:?}", e),
  }
}