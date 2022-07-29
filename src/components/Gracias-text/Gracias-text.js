import { useAuth } from "../../context/auth-context.js"

export default function GraciasText(){

  const {user} =  useAuth();
  console.log(user)
  return (<div className="gracias--text__container"> 
  <p className="red-300 headline-md">¡Te damos la bienvenida! </p>
    <h2 className="headline-md" >
        Cuenta con nosotros para proteger tu vehículo</h2>
    <p className="text-lg font-300">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:</p>
    <span className="text-lg font-300">{user.correo}</span>

    <button>COMO USAR MI SEGURO</button>
  </div>)
}