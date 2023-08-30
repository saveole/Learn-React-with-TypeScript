import React from "react";
import "./App.css";
import { ContactPage, contactPageAction } from "./ContactPage";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { ThankYouPage } from "./ThankYouPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="contact" />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
      action: contactPageAction,
    },
    {
      path: "/thank-you/:name",
      element: <ThankYouPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
