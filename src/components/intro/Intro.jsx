import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      strings:["Html5", "Css3", "Javascript", "Bootstrap", "React","React-Native", "Node.js", "MongoDB"],
    });

  },[])

  return (
    <div className='intro' id="intro">
        <div className="left">
        <div className="imgContainer">
            <img src="assets/blackwitsaydam.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className="box">
              <div className="inner">
                <span>Hello There</span>
              </div>
            <div className="inner">
                <span>Hello There</span>
            </div>
          </div>
              <h1 id="text3d">I'm Osman ISMAIL</h1>
              <h3>FrontEnd Developer <span className="neon" ref={textRef}></span></h3>
              <a className="cv" href="#">Download CV</a>
            </div>
            <a href="#portfolio">
              <img src="assets/down-arrow.png" alt="" />
            </a>
        </div>
    </div>
  )
}
