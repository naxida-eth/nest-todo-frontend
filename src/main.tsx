import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { client } from "./service/index";
import { ApolloProvider } from "@apollo/client";
import "./output.css";
import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
