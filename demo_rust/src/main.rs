use vovk_hello_world::user_rpc;

pub fn main() {
  use user_rpc::update_user_::{ body as Body, query as Query, params as Params };
  use user_rpc::update_user_::body_::{ profile as Profile };
  use user_rpc::update_user_::query_::{ notify as Notify };

  let response = user_rpc::update_user(
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
    None, /* headers (HashMap) */ 
    None, /* api_root */ 
    false, /* disable_client_validation */
  );

  println!("{}", serde_json::to_string_pretty(&response).unwrap());
}