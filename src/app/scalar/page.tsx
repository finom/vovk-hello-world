"use client";
import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ iframeHeight: height }, '*');
    };

    sendHeight();
    window.addEventListener('resize', sendHeight);

    return () => {
      window.removeEventListener('resize', sendHeight);
    };
  }, []);
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
