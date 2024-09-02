import { RouteObject } from "react-router-dom";
import { NotFound, MainPage } from "../../../pages";

const routes: RouteObject[] = [
  { path: "Main", element: <MainPage /> },
  { path: "*", element: <NotFound /> },
];
export default routes;
