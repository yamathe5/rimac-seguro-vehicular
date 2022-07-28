import React from "react"

export default function PriceSelector({setPrice, coberturaData, setCoberturaData}){
  console.log(coberturaData[0])
  
  const [budget, setBudget] = React.useState(14500)
  
  console.log(budget)
  function increase(){
    console.log(budget)
    setBudget((prevBudget)=>{
      if (prevBudget === 16500) return prevBudget
      return prevBudget + 100
    })
    console.log(budget)
    validatePrice(budget + 100) // NEED AN EXPLANATION FORTHIS - I HAVE ATHEORY
  }
  function decrease(){
    setBudget((prevBudget)=>{
      if (prevBudget === 12500) return prevBudget
      return prevBudget - 100
    })
    validatePrice(budget - 100) // -
  }

  function validatePrice (budget){ 
    if(budget > 16000 && coberturaData[0].add === true){
      setPrice((prev) => prev - 15)
      let newcobertura = coberturaData.map((item)=>{
        if (item.id === 0){
          return {...item, add: !item.add}
        }else {
          return item
        }
      })
      setCoberturaData(newcobertura)
    }else if (budget <= 16000 && coberturaData[0].add === false) {
      setPrice((prev) => prev + 15)
      let newcobertura = coberturaData.map((item)=>{
        if (item.id === 0){
          return {...item, add: !item.add}
        }else {
          return item
        }
      })
      setCoberturaData(newcobertura)
    }
  }
  
  return (
  <div className="price_selector">
    <h3>Indica la suma asegurada</h3>
    <p>Min $12,500 | Max $16,500</p>
    <div className="price_selector--buttons">
      <button onClick={decrease}>-</button>
      <p>$ {budget}</p>
      <button onClick={increase}>+</button>
    </div>
  </div>
  )
}