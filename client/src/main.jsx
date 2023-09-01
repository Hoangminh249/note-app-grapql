import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/index.jsx";
import "@fontsource/roboto";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import { Container } from "@mui/system";
import "./firebase/config";

import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Container
    maxWidth="lg"
    sx={{
      textAlign: "center",
      marginTop: "50px",
    }}
  >
    <RouterProvider router={router} />
  </Container>
);
