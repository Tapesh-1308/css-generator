import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BoxShadow from "./pages/BoxShadow.jsx";
import ContextProvider from "./context/Context.jsx";

import Gradient from "./pages/Gradient.jsx";
import Glassmorphism from "./pages/Glassmorphism.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<BoxShadow />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/glassmorphism" element={<Glassmorphism />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ContextProvider>
  </React.StrictMode>
);
