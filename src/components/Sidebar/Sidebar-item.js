export default function SidebarItem (){
  return (
    <>
      <div className="sidebar--mobile">
        <button className="rounded-button__red">	&#x3C;</button>
        <p className="text-xs font-700" >PASO 2 DE 2</p>
        <div className="pruple-bar"></div>
      </div>
      <div className="sidebar--desktop">
        <div>
          <button className="rounded-button" >1</button>
          <p className="text-lg font-400" >Datos</p>
        </div>
        <div>
          <button className="rounded-button__selected">2</button>
          <p className="text-lg font-400" >Datos</p>
        </div>
        
      </div>
    </>
  )
}