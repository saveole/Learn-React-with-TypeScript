import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductPage";
import { Header } from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "products",
    element: <ProductsPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
