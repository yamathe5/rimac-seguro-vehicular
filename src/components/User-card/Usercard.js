import RimacCarCard from "../../assets/Rimac-car-card.png"

export default function UserCard ({user}){

  function handleConsole(){
    console.log(user)
  }
  
  return (
    <div onClick={handleConsole} className="arma_tu_plan--user_card">
      <p >Placa {user.placa}</p>
      <h3>{user.auto || "Auto anio"} <br/> {user.modelo || "modelo"}</h3>
      <img src={RimacCarCard}/>
    </div>

  )
}