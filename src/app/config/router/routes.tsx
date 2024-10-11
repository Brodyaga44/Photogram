import { RouteObject } from "react-router-dom";

import {
  AccountPage,
  Login,
  MainPage,
  NotFound,
  Registration,
  UserPage,
} from "@/pages";
const routes: RouteObject[] = [
  { path: "", element: <AccountPage /> },
  { path: "Main", element: <MainPage /> },
  { path: "UserPage", element: <UserPage /> },
  { path: "*", element: <NotFound /> },
  { path: "login", element: <Login /> },
  { path: "reg", element: <Registration /> },
];
export default routes;
