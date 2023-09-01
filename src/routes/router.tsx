import { createBrowserRouter } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import LoginPage from "../pages/LoginPage";
import ProductListingPage from "../pages/ProductListingPage";
import NullPage from "../pages/NullPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListingPage />,
  },
  {
    path: "/sign-up",
    element: <RegistrationPage />,
  },
  {
    path: "/log-in",
    element: <LoginPage />,
  },

  {
    path: "*",
    element: <NullPage />,
  },
]);
