import Cobertura from "./Cobertura"

export default function Coberturas({coberturaData,setCoberturaData,setPrice}){


  // ocultar - mostrar 
  // aumentar o quitar precio
  // const coberturaData = [
  //   {
  //     img: "Not yet 1",
  //     price: 15,
  //     title: "Llanta robada",
  //     text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  //   },
  //   {
  //     img: "Not yet 2",
  //     price: 20,
  //     title: "Choque y/o pasarte la luz roja ",
  //     text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  //   },
  //   {
  //     img: "Not yet 3",
  //     price: 50,
  //     title: "Atropello en la vía Evitamiento ",
  //     text: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más"
  //   }
  // ]


  return (
  <div className="coberturas">
      <h2>Agrega o quita coberturas</h2>
      <div className="coberturas--form">
        <div style={{display: "flex"}}>
          <div>
            PROTEGE A TU AUTO
          </div>
          <div>
            PROTEGE A LOS QUE TE RODEAN
          </div>
          <div>
            MEJORA TU PLAN
          </div>
        </div>
        {coberturaData.map((item)=>{
          return <Cobertura 
          setPrice={setPrice} 
          coberturaData={coberturaData}
          setCoberturaData={setCoberturaData}
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