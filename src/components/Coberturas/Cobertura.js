import React from "react"
import ReactReadMoreReadLess from "react-read-more-read-less";
import ToggleSwitch from "../ToggleSwitch";

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
      <div className="coberturas-container__form__cobertura">
        <img alt="cobertura imagen" src={img} />

        <h4 className="headline-xxs">{title}</h4>
        <ToggleSwitch checked={add} handleOnClickChangePrice={add ? decreasePrice : increasePrice}/> 
        <div className="cobertura__info text-md">

          <ReactReadMoreReadLess  charLimit={0}
          readMoreText={"ver más ▼"}
          readLessText={"ver menos ▲"} 
          readMoreClassName="read-more-less--more"
          readLessClassName="read-more-less--less">
            {text}
          </ReactReadMoreReadLess>
        </div>
      </div>
    </>
  )
}