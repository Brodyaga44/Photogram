import "./styles/index.scss";
import { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./config/router/routes.tsx";

const App = (): ReactElement => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
