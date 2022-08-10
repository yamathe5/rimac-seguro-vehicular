import Sidebar from "../components/Sidebar"
import UserCard from "../components/User-card"
import Headers from '../components/Header'
import PriceSelector from "../components/Price-selector"
import Coberturas from "../components/Coberturas/Coberturas"
import Price from "../components/Price"
import { useAuth } from "../context/auth-context"
import Llanta from "../assets/Llanta-robada.png"
import Choque from "../assets/Choque.png"
import Atropello from "../assets/Atropello.png"

import React from "react"

const data = [
  {
    id:0,
    img: Llanta,
    show: false,
    add: true,
    price: 15,
    title: "Llanta robada",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  },
  {
    id:1,
    img: Choque,
    show: false,
    add: false,
    price: 20,
    title: "Choque y/o pasarte la luz roja ",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  },
  {
    id:2,
    img: Atropello,
    show: false,
    add: false,
    price: 50,
    title: "Atropello en la vía Evitamiento ",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  }
]

export default function ArmaTuPlan (){
  const { user, logout } = useAuth();
  const [coberturaData, setCoberturaData]  = React.useState(data)
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