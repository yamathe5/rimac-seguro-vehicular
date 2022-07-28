import GirlOnPhonePhone from "../../assets/Girl-on-phone-phone.png"

export default function Presentation (){
  return (
  <div className="main-presentation">
    {/* <img className="main-presentation__img" src={GirlOnPhonePhone} alt="Rimac Logo"/> */}
    <div className="main-presentation__img"  alt="Rimac Logo"></div>
    <div className="main-presentation-text">
      <p className="text-xs">!Nuevo!</p>
      <h1 className="headline-md">Seguro vehicular <span className="red-300">Tracking</span></h1>
      <p className="text-md">Cuentanos donde le haras seguimiento a tu seguro</p>
    </div>
  </div>
  )
}