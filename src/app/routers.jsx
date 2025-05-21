import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import RegisterPage from "../pages/authPages/registerPage/registerPage";
import LoginPage from "../pages/authPages/loginPage/loginPage";
import NoPage from "../pages/noPage/noPage";
import DashboardPage from "../pages/dashboard/dashboardPage";
import ProfilePageOthers from "../pages/profiles/ProfilePageOthers/ProfilePageOthers";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/profile_other",
    element: <ProfilePageOthers />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
