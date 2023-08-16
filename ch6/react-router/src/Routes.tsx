import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "products",
    element: <ProductsPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
