import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import ContextWraper from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextWraper />
  </StrictMode>
);
