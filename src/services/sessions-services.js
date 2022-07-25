import { tokenKey } from "../config";
import apiFetch from "./api-fetch";


export async function login(credentials){
  let user = false;
  const users = await apiFetch("users", {
    // body: credentials
  });
  console.log(credentials)
  console.log(users)

  user = users.find((user)=>{
    return (user.documento === credentials.documento
    && user.celular === credentials.celular
    && user.placa ===  credentials.placa)
  })

  // if there is an user 
  if(user){
    sessionStorage.setItem(tokenKey, JSON.stringify(user)) // save user data on storage
    return user
  }
  
  // if there is not an user
  user = await apiFetch("users", {
    body: credentials
  });

  return user


  
   
}

export async function logout(){
  await apiFetch("logout", {
    method: "delete" 
  })
  sessionStorage.removeItem(tokenKey)
}