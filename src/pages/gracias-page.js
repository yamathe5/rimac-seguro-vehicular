import GraciasText from "../components/Gracias-text"
import BackgroundImage from "../assets/Gracias-backgroun-mobile.png"
import BackgroundImageDesktop from "../assets/Gracias-dektop.png"
import Header from "../components/Header/Header"

export default function GraciasPage(){
  return (
    <>
      <Header/>
      <div className="main--gracias">
        <img className="gracias-img-mobile" src={BackgroundImage}/>
        <img className="gracias-img-dektop" src={BackgroundImageDesktop}/>
        <GraciasText/>
      </div>
    </>
  )
}