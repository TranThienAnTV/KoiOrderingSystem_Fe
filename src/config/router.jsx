import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";

import LoginPage from "../page/login/LoginPage";
import RegisterPage from "../page/register/RegisterPage";
import HomePage from "../page/home/HomePage";
import ErrorPage from "../page/error/ErrorPage";
import Layout from "../components/layout/Layout";

// const ProtectedRouteAuth = ({ children }) => {
//   const user = useSelector(selectUser);
//   if (!user) {
//     alertFail("You need to login first!!");
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// const ProtectedRouteCreator = ({ children }) => {
//   const user = useSelector(selectUser);
//   console.log(user);
//   if (user?.role === "AUDIENCE") {
//     alertFail("You do not have permissions to access");
//     return <Navigate to="/go-pro" replace />;
//   }
//   return children;
// };

// const ProtectedADMIN = ({ children }) => {
//   const user = useSelector(selectUser);
//   console.log(user);
//   if (user?.role !== "ADMIN") {
//     if (user?.role !== "MOD") {
//       alertFail("You do not have permissions to access");
//       return <Navigate to="/" replace />;
//     }
//   }
//   return children;
// };

export const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);
