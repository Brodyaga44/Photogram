import { createContext } from "react";

import { IAuth } from "@/app/module/context/interfaces/IAuth.ts";

const AuthContext = createContext<IAuth>({
  user: null,
  // token: null,
});

export default AuthContext;
