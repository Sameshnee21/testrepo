import React from "react";
import "../style/home.css";
import "../style/art.css";
import art1 from "../Images/art1.png";

function Artwork() {
    return (
      <div>
        <h1  className="Title">Web Art</h1>

        <h2  className="Title">Rationale: Pixel Net Art</h2>
        <p className="P">For this assignment, I have selected a pixel styled approach to the Isle of Man flag. Pixelation is an intriguing style that has been around for many years and is still a famous art style amongst digital artists and game designers. I found that this approach would be most suitable for my website’s theme.  I have always been fascinated with the way small blocks of colour work together in order to create something beautiful.  </p>
        <p className="P">The Isle of Man flag, also known as the iconic Three Legs of Mann, contains rich history and symbolism. The 3 legs represent the Isle’s 3 kings which signifies the sun, power and life.</p>


        <h2  className="Title">Technical Constraints</h2>
        <p className="P">* A time-consuming art style.</p>
        <p className="P">* A grid-format must be used to understand format.</p>
        <p className="P">* A colour palette needs to be created. </p>
        <p className="P">A mixture of shades may warp artwork.</p>
        <p className="P">* Mockups are essential for block placements.</p>
        <p className="P">* Consistency and precise measurements are crucial.</p>
        <p className="P">* Choice of refernce image is limited depending on detail.</p>

        <img className="art1" src={art1} alt="" />

        <h2  className="Title">Material Preparation</h2>
        
        <p className="P"></p>
      </div>
    );
  }
  
  export default Artwork;
  