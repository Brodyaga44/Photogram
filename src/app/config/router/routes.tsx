import { RouteObject } from "react-router-dom";

import { AccountPage, MainPage, NotFound, UserPage } from "@/pages";
const routes: RouteObject[] = [
  { path: "Main", element: <MainPage /> },
  { path: "UserPage", element: <UserPage /> },
  { path: "AccountPage", element: <AccountPage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
