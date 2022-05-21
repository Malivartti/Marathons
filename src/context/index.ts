import { createContext } from "react";

interface Ivalue {
  isAuth: boolean;
  setIsAuth: (flag: boolean) => void;
}

const AuthContext = createContext<Ivalue>({
  isAuth: false,
  setIsAuth: () => undefined,
});
export default AuthContext;
