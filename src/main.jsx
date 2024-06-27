import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./i18next/i18next";
import { HelmetProvider } from "react-helmet-async";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HelmetProvider>
        <App />
    </HelmetProvider>
  </>
);
