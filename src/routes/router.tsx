import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ProductListingPage from "../pages/ProductListingPage";
import NullPage from "../pages/NullPage";
import Layout from "../pages/Layout/Layout";
import ProductAddOrEditPage from "../pages/ProductAddOrEditPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ProductListingPage />,
      },
      {
        path: "sign-up",
        element: <RegistrationPage />,
      },
      {
        path: "sign-in",
        element: <LoginPage />,
      },
      {
        path: "add-product",
        element: <ProductAddOrEditPage />,
      },
      {
        path: "/edit-product/:id",
        element: <ProductAddOrEditPage />,
      },
      {
        path: "*",
        element: <NullPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NullPage />,
  },
]);
