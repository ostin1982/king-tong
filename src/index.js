import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { init, backButton } from "@telegram-apps/sdk-react";

import App from "./components/App";
import BackButton from "./components/common/BackButton.jsx";
import "./assets/styles/index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement).render(<BackButton />);

init();
backButton.mount();

root.render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
