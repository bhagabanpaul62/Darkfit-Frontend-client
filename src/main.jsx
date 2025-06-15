import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextWraper from "./contextWraper.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWraper />
  </StrictMode>
);
