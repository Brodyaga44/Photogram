import { useContext } from "react";

import AuthContext from "@/app/module/context/AuthContext.ts";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
