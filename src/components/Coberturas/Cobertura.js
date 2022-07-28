import React from "react"

export default function Cobertura ({setPrice, id,img, coberturaData, setCoberturaData, add, price,title, text}){
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
      <div className="coberturas_form--cobertura">
          <img src={img} />

          <h4 className="headline-xxs">{title}</h4>
          { add?  <button onClick={decreasePrice}> Quitar</button>: <button onClick={increasePrice} >Agregar</button> }
            
        <div>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </>
  )
}