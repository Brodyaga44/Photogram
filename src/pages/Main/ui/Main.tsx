import { Outlet } from "react-router-dom";

import AuthProvider from "@/app/module/providers/AuthProvider.tsx";

const Main = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default Main;
