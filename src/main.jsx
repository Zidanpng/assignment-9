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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Details from "./pages/Details";
import { ToastContainer } from "react-toastify";
import UpdateProfile from "./pages/UpdateProfile";

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
        path: "/service/:serviceId",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
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
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>,
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
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
