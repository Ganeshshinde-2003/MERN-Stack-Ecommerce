import axios from "axios";
import { useState, useEffect, useContext, createContext } from "react";

const AuthContex = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []);

  return (
    <AuthContex.Provider value={[auth, setAuth]}>
      {children}
    </AuthContex.Provider>
  );
};

const useAuth = () => useContext(AuthContex);

export { useAuth, AuthProvider };
