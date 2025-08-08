import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

async function App() {
  return (
    <ApiReferenceReact
      configuration={{
        url: "/api/static/openapi/spec.json",
        servers: [
          {
            url: "http://localhost:3000",
            description: "Localhost",
          },
          {
            url: "https://vovk-hello-world.vercel.app",
            description: "Production",
          },
        ],
      }}
    />
  );
}

export default App;
