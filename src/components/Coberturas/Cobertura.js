import React from "react"

export default function Cobertura ({setPrice, id, coberturaData, setCoberturaData, add, price,title, text}){
  // const [show, setShow] = React.useState(false); 
  function increasePrice(){
    setPrice((prev)=>prev+price)
    validation()
  }
  function decreasePrice(){
    setPrice((prev)=>prev-price)
    validation()
  }


  function validation(){
    let newcobertura = coberturaData.map((item)=>{
      if (item.id === id ) {
        return {...item, 
          add: !item.add}
      }else return item
    
    })
    setCoberturaData(newcobertura)
  }

  return (
    <>
     <div className="coberturas--form--cobertura">
          <div>
            <h4>{title}</h4>
            { add? <button onClick={decreasePrice}>Quitar</button> : <button onClick={increasePrice} >Agregar</button> }
            
            <span>Quitar</span>
          </div>
          <div>
            {/* <button>QUITAR</button> */}
            <p>{text}</p>
          </div>
        </div>
    </>
  )
}