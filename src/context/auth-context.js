import React from "react";
import * as services from "../services/sessions-services";
import { tokenKey } from "../config";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

function AuthProvider({children}){
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem(tokenKey)) || null)
  const navigate = useNavigate();


  function login (credentials) {
    return services.login(credentials).then((u)=>{
      setUser(u)
      sessionStorage.setItem(tokenKey, JSON.stringify(u))
      navigate("/arma-tu-plan")
    }).catch((e)=>console.log(e))
  }

  function logout(){
    services.logout()
    setUser(null)
    navigate("/")
  }

  function sendData(){
    navigate("/gracias")
  }

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
