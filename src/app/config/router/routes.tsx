import { RouteObject } from "react-router-dom";

import { AccountPage, Login, NotFound, Registration, UserPage } from "@/pages";
import Main from "@/pages/Main/ui/Main.tsx";
const routes: RouteObject[] = [
  {
    path: "",
    element: <Main />,
    children: [
      { path: "", element: <AccountPage /> },
      { path: "UserPage", element: <UserPage /> },
      { path: "*", element: <NotFound /> },
      { path: "login", element: <Login /> },
      { path: "reg", element: <Registration /> },
    ],
  },
];
export default routes;
