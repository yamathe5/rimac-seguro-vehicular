import Cobertura from "./Cobertura"

export default function Coberturas({coberturaData,setCoberturaData,setPrice}){

  return (
    <div className="coberturas-container">
      <h2 className="headline-xs">Agrega o quita coberturas</h2>
      <div className="coberturas-container__form">
        <div className="coberturas-container__form__sections">
          <div className="red-300 text-xs font-700 text-center section__selected">
            PROTEGE A TU AUTO
          </div>
          <div className="text-xs font-700 text-center">
            PROTEGE A LOS QUE TE RODEAN
          </div>
          <div className="text-xs font-700 text-center">
            MEJORA TU PLAN
          </div>
        </div>
        {coberturaData.map((item)=>{
          return <Cobertura 
          key={item.id}
          setPrice={setPrice} 
          coberturaData={coberturaData}
          setCoberturaData={setCoberturaData}
          img={item.img}
          id={item.id}
          add={item.add} 
          price={item.price} 
          title={item.title} 
          text={item.text}/>
        })}
        
       
      </div>
    </div>
  )
}