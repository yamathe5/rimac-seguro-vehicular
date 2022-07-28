import Sidebar from "../components/Sidebar"
import UserCard from "../components/User-card"
import Headers from '../components/Header'
import PriceSelector from "../components/Price-selector"
import Coberturas from "../components/Coberturas/Coberturas"
import Price from "../components/Price"
import { logout } from "../services/sessions-services"

import React from "react"

const data = [
  {
    id:0,
    img: "Not yet 1",
    show: false,
    add: true,
    price: 15,
    title: "Llanta robada",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  },
  {
    id:1,
    img: "Not yet 2",
    show: false,
    add: false,
    price: 20,
    title: "Choque y/o pasarte la luz roja ",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  },
  {
    id:2,
    img: "Not yet 3",
    show: false,
    add: false,
    price: 50,
    title: "Atropello en la vía Evitamiento ",
    text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  }
]

export default function ArmaTuPlan ({user,setUser}){

  
  const [coberturaData, setCoberturaData]  = React.useState(data)
  
  // let coberturaPrices = coberturaData.reduce((acc,obj) => {
  //   if(obj.add === true) {
  //     return acc + obj.price
  //   }else {
  //     return acc
  //   }
  // },0)
  
  const [price, setPrice] = React.useState(35)


  function handleLogout(){
    let newUser = logout()
    setUser(newUser)
  }

  // suma asegurada 
  // monto base 
    // ->CUANDO DE CLICK EN ESTOS SE VBA 
    //   A AUMENTAR EL PRECIO
      // llanta robada 15
      // choque 20 
      // atropello 50
 
  return (
    <>
      <Headers/>
      <div className="arma_tu_plan">
        {/* <Sidebar/> */}
        <div className="arma_tu_plan--container">
          <div>
            <button onClick={handleLogout}>Volver</button>
            <span>Volver</span>
            <h2>!Hola Juan!, Mira lcas coverturas</h2>
            <p>Conoce las coberturas para tu plan</p>
          </div>
          <UserCard user={user}/>
          <PriceSelector setPrice={setPrice} coberturaData={coberturaData} setCoberturaData={setCoberturaData}/> {/* MODIFICA A COBERTURA 
            quita la cobertura de choque 
          */}
          
        </div>
      
        <Coberturas coberturaData={coberturaData} 
                    setCoberturaData={setCoberturaData} 
                    setPrice={setPrice}/> {/* MODIFICA A PRICE
          aumenta y resta el precio final
        */}
        <Price price={price}/> 
      </div>
    </>
  )
}