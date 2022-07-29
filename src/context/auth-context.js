import React from "react";
import * as services from "../services/sessions-services";
import { tokenKey } from "../config";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({children}){
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem(tokenKey)) || null)
  const navigate = useNavigate();


  function login (credentials) {
    return services.login(credentials)
    .then((u)=>{
      navigate("/arma-tu-plan")
      setUser(u)
    })
  }

  function logout(){
    services.logout()
    setUser(null)
    navigate("/")
  }

  function sendData(){
    navigate("/gracias")
  }

  // if (loading) return <p>Loading</p>

  return (
    <AuthContext.Provider value={{user, login, logout, sendData}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export {AuthProvider, useAuth}
