import React from "react";
import Header from "../components/Header/Header"
import Presentation from "../components/Presentation";
// import { login } from "../services/sessions-services";


export default function LoginPage(){
  const [conditionsAccepted, setConditionsAccepted] = React.useState(false);

  function handleChange () {
    setConditionsAccepted(current => !current)
  }

  function handleSubmit(event){
    event.preventDefault();
    const { documentType, document, phone, placa, check } = event.target.elements;
    console.log(event.target.elements)
    const credentials = {
      phone: phone.value,
      placa: placa.value,
      check: check.checked,
      document: document.value,
      documentType: documentType.value
    }
    console.log(credentials)
    // login(credentials).catch((error)=>console.log(error));
  }
  return (
    <>
      <Header/>
      <Presentation/>
      <div className="form--container">
        <h2 className="form--container__h2">Dejanos tus datos</h2>
        <form className="form--container--form" onSubmit={handleSubmit}>
          <div className="input--container">
            <label htmlFor="documentType"></label>
            <select className="form__select" name="documentType" id="documentType">
              <option value="DNI">DNI</option>
              <option value="Pasaporte">Pasaporte</option>
            </select>
            <label htmlFor="document"></label>
            <input value="72715796" className="form__document" id="document" name="document" type="document" />
          </div> 
          <div className="input--container">
            <label htmlFor="phone"></label>
            <input value="Celular" className="form__phone" id="phone" name="phone" type="phone" />
          </div>
          <div className="input--container">
            <label htmlFor="placa"></label>
            <input value="Placa" className="form__placa" id="placa" name="placa" type="text" />
          </div>
          <div className="input--container">
            <input defaultChecked={conditionsAccepted} onChange={handleChange} id="check" name="check" type="checkbox" />
            <label htmlFor="check">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</label>
          </div>
          <button className="form__submit" type="submit">COTIZALO</button>
        </form>
      </div>
    </>
)
  
}