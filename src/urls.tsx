import { lazy } from "react";
const Login = lazy(() => import("./auth/login"));
const Home = lazy(() => import("./pages/home"));
const CustomErrorPage = lazy(
  () => import("./core/component/customErrorPage.js")
);
export const urls = [
  {
    path: "/login",
    identifier: "Login",
    component: <Login />,
    isPrivate: false,
  },
  {
    path: "/",
    identifier: "Home",
    component: <Home />,
    isPrivate: true,
  },
  {
    path: "*",
    identifier: "CustomErrorPage",
    component: <CustomErrorPage />,
    isPrivate: false,
  },
];
