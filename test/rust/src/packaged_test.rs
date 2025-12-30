use std::io::Write;
use futures_util::StreamExt;
use vovk_hello_world::{
  user_rpc,
  open_api_rpc,
  stream_rpc,
  HttpException,
};

#[tokio::main]
pub async fn main() -> Result<(), HttpException> {
  println!("\n--- Rust Demo (Packaged) ---");
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
  ).await?;

  println!("user_rpc.update_user response: {:?}", update_user_response);

  let openapi_response = open_api_rpc::get_spec(
    (),
    (),
    (),
    None,
    None,
    false,
  ).await?;

  if let (Some(title), Some(version)) = (
    openapi_response["info"]["title"].as_str(),
    openapi_response["info"]["version"].as_str()
  ) {
    println!("open_api_rpc.get_spec response: {} {}", title, version);
  } else {
    println!("Could not extract title or version from OpenAPI spec");
  }

  let mut stream = stream_rpc::stream_tokens(
      (),
      (),
      (),
      None,
      None,
      false,
  ).await?;
  print!("stream_rpc.stream_tokens response:\n");
  while let Some(item) = stream.next().await {
    let val = item?;
    print!("{}", val.message.as_str());
    std::io::stdout().flush().unwrap();
  }
  println!();

  Ok(())
}

#[cfg(test)]
mod packaged_test {
  use super::*;
  use futures_util::StreamExt;

  #[tokio::test]
  async fn update_user_and_openapi_spec_work() {
    use user_rpc::update_user_::{
      body as Body, body_::profile as Profile, params as Params, query as Query, query_::notify as Notify,
    };

    let response = user_rpc::update_user(
      Body {
        email: "john@example.com".to_string(),
        profile: Profile {
          name: "John Doe".to_string(),
          age: 25,
        },
      },
      Query { notify: Notify::email },
      Params {
        id: "123e4567-e89b-12d3-a456-426614174000".to_string(),
      },
      None,
      None,
      false,
    )
    .await
    .expect("update_user should succeed");
    println!("user_rpc.update_user response: {:?}", response);

    let openapi = open_api_rpc::get_spec((), (), (), None, None, false)
      .await
      .expect("get_spec should succeed");
    if let (Some(title), Some(version)) = (
      openapi["info"]["title"].as_str(),
      openapi["info"]["version"].as_str(),
    ) {
      println!("open_api_rpc.get_spec response: {} {}", title, version);
      assert!(!title.is_empty());
      assert!(!version.is_empty());
    } else {
      panic!("Could not extract title or version from OpenAPI spec");
    }
  }

  #[tokio::test]
  async fn stream_tokens_emits_messages() {
    let mut stream = stream_rpc::stream_tokens((), (), (), None, None, false)
      .await
      .expect("stream_tokens should start");

    let mut messages = Vec::new();
    print!("stream_rpc.stream_tokens response:\n");
    while let Some(item) = stream.next().await {
      let val = item.expect("stream item should be Ok");
      print!("{}", val.message.as_str());
      std::io::stdout().flush().unwrap();
      messages.push(val.message);
    }
    println!();
    assert!(!messages.is_empty(), "expected at least one streamed message");
  }
}