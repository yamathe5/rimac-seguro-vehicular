import { useAuth } from "../../context/auth-context";

export default function Price ({price}){

  const { sendData } = useAuth();

  function handleSendData (){
    sendData()
  }

  return(
    <div className="price-container">
      <div className="price">
        <div className="price__amount-container">
          <p className="text-sm font-700">MONTO</p>
          <p className="headline-sm">${price}.00</p>
          <p className="text-xs">MENSUAL</p>
        </div>
        <div className="price__plan-container">
          <h4 className="headline-xxs">El precio incluye:</h4>
          <p className="text-md"><span className="green-300">✔</span> Llanta de respuesto</p>
          <p className="text-md"><span className="green-300">✔</span> Analisis de motor</p>
          <p className="text-md"><span className="green-300">✔</span> Aros gratis</p>
        </div>

        <button onClick={handleSendData} className="button">LO QUIERO</button>
      </div>
    </div>
  )
}