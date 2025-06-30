import React from 'react'
// import sandeepBro from "./sandeepBro3.png"
import photographer from "./photographer.png"
import "./hero.css"

export default function Hero() {
  return (
    <>
    <div className="hero" id='home'>
        <div className="heroText">
            <p>-Since 1900s</p>
            <h1>PHOTOGRAPHY MAKE US HAPPY TAKE A SHOT</h1>
            <form action="https://www.linkedin.com/in/yash-kadam-9a69032b5/" target="_blank">
            <button>Watch Portfolio</button>
            </form>
        </div>
        <div className="heroImg">
          <img src={photographer} alt="heroPic"/>
        </div>
    </div>
    </>
  )
}
