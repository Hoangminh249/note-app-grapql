import React, { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    const unsubcribed = auth.onIdTokenChanged((user) => {
      console.log({user});
      if (user?.uid) {
        setUser(user)
        if (user.accessToken !== localStorage.getItem("accessToken")) {
          localStorage.setItem("accessToken", user.accessToken);
          window.location.reload();
        }
        setIsloading(false);
        return

      }
      setIsloading(false)
      setUser({})
      localStorage.clear();
      navigate("/login")
    })
    return () => {
        unsubcribed()
    }
  }, [auth])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading ? <CircularProgress/> :children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
