import React from "react";
import { AuthProvider } from "./context/authContecxt";
import App from "./App";

function ContextWraper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default ContextWraper;
