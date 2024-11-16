import { RouteObject } from "react-router-dom";

import {
  AccountPageDisplay,
  LoginPageDisplay,
  NotFound,
  RegistrationPageDisplay,
  UserFollowingDisplay,
  UserPageDisplay,
} from "@/pages";
import Main from "@/pages/Main/ui/Main.tsx";
const routes: RouteObject[] = [
  {
    path: "",
    element: <Main />,
    children: [
      { path: "", element: <AccountPageDisplay /> },
      { path: "userpage", element: <UserPageDisplay /> },
      { path: "*", element: <NotFound /> },
      { path: "login", element: <LoginPageDisplay /> },
      { path: "reg", element: <RegistrationPageDisplay /> },
      { path: "following", element: <UserFollowingDisplay /> },
    ],
  },
];
export default routes;
