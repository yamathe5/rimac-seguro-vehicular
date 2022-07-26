import React from "react";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation";
import { useAuth } from "../context/auth-context";

const nombres = ["Johan", "Juan", "Pedro", "Micaela", "Sara", "Stefany"];
const autos = [
  {
    auto: "BMW",
    modelo: ["X2", "X4", "X6"],
  },
  {
    auto: "Mercedez-Benz",
    modelo: ["Sedan", "Glc", "Coupe"],
  },
  {
    auto: "Audi",
    modelo: ["A5", "A7", "Q7"],
  },
  {
    auto: "Renault",
    modelo: ["KWID", "STEPWAY", "ALL NEW DUSTER"],
  },
  {
    auto: "Ford",
    modelo: ["Bronco", "Edge", "Evos"],
  },
];

export default function LoginPage() {
  const { login } = useAuth();

  const [check, setCheck] = React.useState(false);
  const [documentTypeInput, setDocumentTypeInput] = React.useState("DNI");
  const [document, setDocument] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [placa, setPlaca] = React.useState("");

  function formValidation(documentType, document, phone, placa, check) {
    if (
      phone.value.length !== 9 ||
      phone.value.match(/[1-9][0-9]{8}$/) == null
    ) {
      return false;
    }
    if (documentType.value === "DNI") {
      if (
        document.value.length !== 8 ||
        document.value.match(/[0-9][0-9]{7}$/) == null
      ) {
        return false;
      }
    } else if (documentType.value === "Pasaporte") {
      if (
        document.value.length !== 12 ||
        document.value.match(/[0-9][0-9]{11}$/) == null
      ) {
        return false;
      }
    }
    if (
      placa.value.length !== 7 ||
      placa.value.match(/[0-9|A-Z|a-z]{3}-[0-9|A-Z|a-z]{3}/) == null
    ) {
      return false;
    }
    if (check === false) {
      return false;
    }
    return true;
  }

  function handleSelectChange(e) {
    setDocumentTypeInput(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handlePlacaChange(e) {
    setPlaca(e.target.value);
  }
  function handleDocumentChange(e) {
    setDocument(e.target.value);
  }
  function handleChange() {
    setCheck((current) => !current);
  }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { documentType, document, phone, placa } = event.target.elements;

    if (!formValidation(documentType, document, phone, placa, check)) {
      console.error("No se ingreso algun dato de manera correcta");
      return;
    }

    let nombre = nombres[getRandomInt(5)];
    let auto = autos[getRandomInt(4)].auto;
    let modelo = autos[getRandomInt(4)].modelo[getRandomInt(2)];
    let años = 2000 + getRandomInt(20);

    const credentials = {
      "tipo-documento": documentType.value,
      documento: document.value,
      celular: phone.value,
      placa: placa.value,
      nombre: nombre,
      auto: auto,
      "modelo-auto": modelo,
      "año-auto": años,
      correo: nombre + "@gmail.com",
    };

    login(credentials).catch((error) => console.log(error));
  }
  return (
    <>
      <Header />
      <div className="main-login">
        <div className="main-login__background"></div>
        <Presentation />
        <div className="form-container">
          <h2 className="form-container__description headline-sm">
            Dejanos tus datos
          </h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__input-container">
              <label htmlFor="documentType"></label>
              <select
                onChange={handleSelectChange}
                className="form__select"
                name="documentType"
                id="documentType"
              >
                <option value="DNI">DNI</option>
                <option value="Pasaporte">Pasaporte</option>
              </select>
              <label htmlFor="document"></label>
              {documentTypeInput === "DNI" ? (
                <input
                  pattern="[0-9]{8}"
                  value={document}
                  onChange={handleDocumentChange}
                  placeholder="DNI"
                  maxLength="8"
                  className="form__document"
                  id="document"
                  name="document"
                  type="document"
                  required
                />
              ) : (
                <input
                  pattern="[0-9]{12}"
                  value={document}
                  onChange={handleDocumentChange}
                  placeholder="Pasaporte"
                  maxLength="12"
                  className="form__document"
                  id="document"
                  name="document"
                  type="document"
                  required
                />
              )}
            </div>

            <div className="form__input-container">
              <label htmlFor="phone"></label>
              <input
                pattern="[0-9]{9}"
                value={phone}
                onChange={handlePhoneChange}
                className="form__phone"
                maxLength="9"
                placeholder="Celular"
                id="phone"
                name="phone"
                type="phone"
                required
              />
            </div>

            <div className="form__input-container">
              <label htmlFor="placa"></label>
              <input
                pattern="[0-9|A-Z]{3}-[0-9|A-Z]{3}"
                placeholder="Placa"
                onChange={handlePlacaChange}
                maxLength="7"
                value={placa}
                className="form__placa"
                id="placa"
                name="placa"
                type="text"
                required
              />
            </div>

            <div className="form__input-container flex align-center gap">
              <input
                className="form__check"
                defaultChecked={check}
                onChange={handleChange}
                id="check"
                name="check"
                type="checkbox"
                required
              />
              <label className="text-sm" htmlFor="check">
                Acepto la Política de Protecciòn de Datos Personales y los
                Términos y Condiciones.
              </label>
            </div>
            <button className="form__submit button" type="submit">
              COTIZALO
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
