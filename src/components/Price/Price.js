export default function Price ({price}){
  return(
    <div className="price">
      <div>
        <p>${price}.00</p>
        <p>MENSUAL</p>
      </div>

      <button>LO QUIERO</button>
    </div>
  )
}