import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

//api here is an axios instance which has our app's API set according to the env.
import api from "../lib/Api";

export interface UserProfile {
  email: string | null;
  totpEnabled: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
  id?: string | null;
  isRestricted?: string | null;
  createdOn?: Date | null;
  updatedOn?: Date | null;
  metadata?: object | null;
}

export type AuthContext = {
  user: UserProfile | null;
  isAuthenticated: boolean;
  totpEnabled: boolean;
  login: (login: Login) => Promise<void | Error>;
  signup: (signup: SignupUser) => Promise<void | Error>;
  loading: boolean;
  logout: () => void;
};

export type Login = {
  email: string;
  password: string;
};

type LoginResponse = {
  token: string;
  totp: boolean;
};
type SignupResponse = {
  email: string;
  status: boolean;
};

export type SignupUser = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

const AuthContext = createContext<AuthContext>({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserProfile>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = await api.get("users/me");
        if (user) setUser(user);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async ({ email, password }: Login) => {
    try {
      const { token, totp }: LoginResponse = await api.post("/v1/auth", {
        email,
        password,
      });
      if (token) {
        console.log("Got token", token);
        Cookies.set("token", token, { expires: 1 });
        api.defaults.headers.Authorization = `Bearer ${token}`;
        // const { data: user } = await api.get('users/me')
        setUser({ email, totpEnabled: totp });
        console.log("Got user", user);
      }
    } catch (err) {
      return new Error("error logging in", err);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/login";
  };

  const signup = async ({
    email,
    password,
    first_name,
    last_name,
  }: SignupUser) => {
    try {
      const { status }: SignupResponse = await api.post("/v1/users", {
        email,
        password,
        first_name,
        last_name,
      });
      console.log("Signup response", email, status);
    } catch (e) {
      return new Error("error signing up", e);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        totpEnabled: !!user?.totpEnabled,
        user,
        login,
        signup,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext<AuthContext>(AuthContext);
