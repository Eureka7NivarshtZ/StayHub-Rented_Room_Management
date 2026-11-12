import { createContext, useContext, useEffect, useMemo, useState } from "react";
import {
  login as loginApi,
  register as registerApi,
} from "../services/authService";
const Ctx = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("stayhub_user") || "null");
    } catch {
      return null;
    }
  });
  useEffect(() => {
    if (user) localStorage.setItem("stayhub_user", JSON.stringify(user));
    else localStorage.removeItem("stayhub_user");
  }, [user]);
  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!localStorage.getItem("stayhub_token"),
      async signIn(v) {
        const r = await loginApi(v);
        localStorage.setItem("stayhub_token", r.token);
        setUser(r.user);
        return r;
      },
      async signUp(v) {
        const r = await registerApi(v);
        localStorage.setItem("stayhub_token", r.token);
        setUser(r.user);
        return r;
      },
      signOut() {
        localStorage.removeItem("stayhub_token");
        localStorage.removeItem("stayhub_user");
        setUser(null);
      },
    }),
    [user],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useAuth() {
  const v = useContext(Ctx);
  if (!v) throw Error("useAuth phải nằm trong AuthProvider");
  return v;
}
