import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// src/main.jsx or App.jsx

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add icons to the library
library.add(faCoffee, faCheckCircle);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
