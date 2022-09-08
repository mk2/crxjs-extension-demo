import { ChakraProvider } from "@chakra-ui/react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./content.css";

const html = document.querySelector("html");
const root = document.createElement("div");

root.attachShadow({ mode: "open" });
root.id = "shadow-root";

if (html) {
  html.append(root);
}

const appRoot = document.createElement("main");
appRoot.id = "app-root";
(root.shadowRoot as any).appendChild(appRoot);

const cache = createCache({
  key: "C",
  container: appRoot,
});

ReactDOM.createRoot(appRoot as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </CacheProvider>
  </React.StrictMode>
);
