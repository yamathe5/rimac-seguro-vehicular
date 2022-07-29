import { tokenKey } from "../config";
import apiFetch from "./api-fetch";


export async function login(credentials){
  let user = false;
  const users = await apiFetch("users", {
    // body
  });


  user = users.find((user)=>{
    return (user.documento === credentials.documento
    && user.celular === credentials.celular
    && user.placa ===  credentials.placa)
  })

  let userById = users.find((user)=>{
    return (user.documento === credentials.documento)
  })


  // user by id -> only id matches user 
  if(userById){
    credentials = {
      ...credentials,
      documento: userById.documento,
      nombre: userById.nombre
    }
    user = await apiFetch("users", {
      body: credentials
    });
    
    return user
  }


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

export function logout(){
  sessionStorage.removeItem(tokenKey) 
}