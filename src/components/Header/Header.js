import Logo from "../../assets/Logo.png"
import Phone from "../../assets/phone.png"

export default function Header (){
  return <header className="header">
   <div className="header-container">
    <img src={Logo} className="header-container__logo" alt="Rimac Logo"/>
    <div className="header-container-links">



      {/* <a className="header-container-links__help gray-300 text-md" href="#" >Tienes alguna duda?</a> */}

      <div className="header-container__phone">
        <img src={Phone} alt="Phone"/>
        <a className="purple-link text-md text-decoration-none" href="#"  >Llamanos</a>
      </div>

      <div className="header-container__phone__dektop">
        <a className="header-container-links__help gray-300 text-md text-decoration-none" href="#" >Tienes alguna duda?</a>
        <img src={Phone} alt="Phone"/>
        <a className="purple-link text-md text-decoration-none" href="#"  >(01) 411 6001</a>
      </div>

    </div>
   </div>
  </header>
}