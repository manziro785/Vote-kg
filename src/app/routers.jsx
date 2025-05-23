import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage/mainPage";
import RegisterPage from "../pages/authPages/registerPage/registerPage";
import LoginPage from "../pages/authPages/loginPage/loginPage";
import NoPage from "../pages/noPage/noPage";
import DashboardPage from "../pages/dashboard/dashboardPage";
import ProfilePageOthers from "../pages/profiles/ProfilePageOthers/ProfilePageOthers";
import CreatePosts from "../pages/createPosts/CreatePosts";
import VerifyAdmin from "../pages/verifyAdmin/VerifyAdmin";
import { ConfirmForm } from "../components/MultiStepAuth/forms/ConfirmForm";
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
    path: "/create_posts",
    element: <CreatePosts />,
  },
  {
    path: "/verify_admin",
    element: <VerifyAdmin />,
  },
  {
    path: "/confirm_email",
    element: <ConfirmForm />,
  },
  {
    path: "/*",
    element: <NoPage />,
  },
]);
