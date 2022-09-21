import React from "react"

import Sidebar from "../components/Sidebar"
import UserCard from "../components/User-card"
import Headers from '../components/Header'
import PriceSelector from "../components/Price-selector"
import Coberturas from "../components/Coberturas/Coberturas"
import Price from "../components/Price"

import { useAuth } from "../context/auth-context"
import { COBERTURAS_DATA } from "../mock/coberturas.mock"




export default function ArmaTuPlan (){
  const { user, logout } = useAuth();
  const [coberturaData, setCoberturaData]  = React.useState(COBERTURAS_DATA)
  const [price, setPrice] = React.useState(35)


  function handleLogout(){
    logout()
  }
 
  return (
    <>
      <Headers/>

      <div className="main-arma-tu-plan">
        <div className="arma-tu-plan">
          <Sidebar/>
          <div className="arma-tu-plan__user-card-container">
            <button className="rounded-button__red" onClick={handleLogout}>	&#x3C;</button>
            <span> VOLVER </span>
            <h2 className="headline-md mg-top-24">!Hola, <span className="red-300">{user.nombre}!</span></h2>
            <p className="text-lg">Conoce las coberturas para tu plan</p>
            <UserCard user={user}/>
          </div>
          <PriceSelector setPrice={setPrice} coberturaData={coberturaData} setCoberturaData={setCoberturaData}/> 
        
          <Coberturas coberturaData={coberturaData} 
                      setCoberturaData={setCoberturaData} 
                      setPrice={setPrice}/>

          <Price price={price}/> 
        </div>
      </div>
    </>
  )
}