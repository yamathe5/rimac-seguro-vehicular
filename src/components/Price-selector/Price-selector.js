import React from "react"

export default function PriceSelector({setPrice, coberturaData, setCoberturaData}){  
  const [budget, setBudget] = React.useState(14500)
  
  function increase(){
    setBudget((prevBudget)=>{
      if (prevBudget === 16500) return prevBudget
      return prevBudget + 100
    })
    validateAddCobertura(budget + 100) 
  }

  function decrease(){
    setBudget((prevBudget)=>{
      if (prevBudget === 12500) return prevBudget
      return prevBudget - 100
    })
    validateAddCobertura(budget - 100) 
  }

  function toogleCobertura(coberturaData){
    let newcobertura = coberturaData.map((item)=>{
      if (item.id === 0){
        return {...item, add: !item.add}
      }else {
        return item
      }
    })
    return newcobertura
  }

  function validateAddCobertura (budget){ 
    if(budget > 16000 && coberturaData[0].add === true){
      setPrice((prev) => prev - 15)

      let newcobertura = toogleCobertura(coberturaData)
      setCoberturaData(newcobertura)
    }else if (budget <= 16000 && coberturaData[0].add === false) {
      setPrice((prev) => prev + 15)

      let newcobertura = toogleCobertura(coberturaData)
      setCoberturaData(newcobertura)
    }
  }
  
  return (
  <div className="price-selector">
    <h3 className="headline-xxs">Indica la suma asegurada</h3>
    <p className="text-sm">Min $12,500 | Max $16,500</p>

    <div className="price-selector__buttons">
      <button onClick={decrease}>-</button>
      <p className="headline-xxs">$ {budget}</p>
      <button onClick={increase}>+</button>
    </div>
  </div>
  )
}