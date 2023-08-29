import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.jsx";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import { Container } from "@mui/system";
import "./firebase/config"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container maxWidth="lg" sx={{
      textAlign: "center",
      marginTop: "50px",
    }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
