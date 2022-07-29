import React from "react";
import * as services from "../services/sessions-services";
import { tokenKey } from "../config";

const AuthContext = React.createContext();

function AuthProvider({children}){
  const [user, setUser] = React.useState(JSON.parse(sessionStorage.getItem(tokenKey)) || null)
  // const [loading, setLoading] = React.useState(true)

  // React.useEffect(()=>{
  //   getUser()
  //     .then((u) => {
  //       setUser(u)
  //       setLoading(false)
  //       console.log("xd")
  //     })
  //     .catch((error)=>{setLoading(false)})
  // },[setUser])

  function login (credentials) {
    return services.login(credentials)
    .then((u)=>{
      // sessionStorage.setItem(tokenKey, JSON.stringify(u))
      setUser(u)
    })
  }

  function logout(){
    services.logout()
    setUser(null)
    
  }

  // if (loading) return <p>Loading</p>

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export {AuthProvider, useAuth}
