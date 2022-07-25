import GirlOnPhonePhone from "../../assets/Girl-on-phone-phone.png"

export default function Presentation (){
  return (
  <div className="main-presentation">
    <img className="main-presentation__img" src={GirlOnPhonePhone} alt="Rimac Logo"/>

    <div className="main-presentation-text">
      <p>!Nuevo!</p>
      <h1>Seguro vehicular Tracking</h1>
      <p>Cuentanos donde le haras seguimiento a tu seguro</p>
    </div>
  </div>
  )
}