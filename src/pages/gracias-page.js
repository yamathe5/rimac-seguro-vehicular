import GraciasText from "../components/Gracias-text"
import BackgroundImage from "../assets/Gracias-backgroun-mobile.png"
import Header from "../components/Header/Header"

export default function GraciasPage(){
  return (
    <>
      <Header/>
      <div className="gracias">
        <img  src={BackgroundImage}/>
        <GraciasText/>
      </div>
    </>
  )
}