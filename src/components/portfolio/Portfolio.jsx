import "./portfolio.scss"
import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";


export default function Portfolio() {
  const [selected, setSelected] = useState("featured")
  const list = [
    {
        id: "featured",
        title: "Featured",
    },
    {
        id: "web",
        title: "Web App",
    },
    {
        id: "mobile",
        title: "Mobile App",
    }
];
  return (
    <div className='portfolio' id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList 
              title={item.title} 
              active={selected === item.id} 
              setSelected={setSelected}
              id={item.id} />
          ))}
        </ul>
        <div className="container">
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          <div className="item">
            <img src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="" />
            <h3>Chat App</h3>
          </div>
          
        </div>
    </div>
  )
}


