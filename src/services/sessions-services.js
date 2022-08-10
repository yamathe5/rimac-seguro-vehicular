import { tokenKey } from "../config";
import apiFetch from "./api-fetch";


export async function login(credentials){
  let user = false;
  const users = await apiFetch("users", {});

  // user que coincide documento y nro de placa
  user = users.find((user)=>{
    return (user.documento === credentials.documento && user.placa ===  credentials.placa)
  })

  // return si encuentra un usuario 
  if(user){
    return user
  }

  // user que coincide por documento - este user tendra un carro distinto
  let userById = users.find((user)=>{
    return (user.documento === credentials.documento)
  })


  // Le asignamos su informacion que esta en la API como su documento, nombre y correo
  // La otra informacion como el carro modelo año sera nueva
  // solo coincide el nro de documento excepto la placa
  if(userById){
    credentials = {
      ...credentials,
      documento: userById.documento,
      nombre: userById.nombre,
      correo: userById.correo
    }
    user = await apiFetch("users", {
      body: credentials
    });
    return user
  }


  // si ninguna validacion funciono entonces creamos un nuevo usuario
  user = await apiFetch("users", {
    body: credentials
  });

  return user
}

export function logout(){
  sessionStorage.removeItem(tokenKey) 
}