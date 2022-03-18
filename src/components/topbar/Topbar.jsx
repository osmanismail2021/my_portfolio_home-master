import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <a href="#intro" className="logo">
        <div className="stage">
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
  <div className="layer"></div>
</div>
</a>
          
          <div className="itemContainer">
            <Person className="icon" />
            <span>+32 777 777</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>osman@ism@live.nl</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

    </div>
  )
}
