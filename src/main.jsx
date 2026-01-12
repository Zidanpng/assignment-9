import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Roots from "./Layouts/Roots";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
import Login from "./components/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";
import { AuthProvider } from "./providers/AuthProvider";
import ForgetPass from "./components/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPass",
        element: <ForgetPass></ForgetPass>,
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
