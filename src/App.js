import { useEffect, useState, useRef } from "react";
import "./App.css";
import logo from "./assets/imgs/logo.png";
import seta from "./assets/imgs/seta.png";
import data from "./shoes.json";
function App() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container">
      <div className="logo">
        <h3>SUPERSHOES&copy;</h3>
      </div>

      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name} />
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">U${oldPrice}</span>
                <span className="price">U$ {price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img className="scroll-left" src={seta} alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src={seta} alt="Scroll Right" />
        </button>
      </div>
    </div>
  );
}

export default App;
