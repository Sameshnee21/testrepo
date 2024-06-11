import React from "react";
import "../style/home.css";
import "../style/art.css";
import art1 from "../Images/art1.png";
import art2 from "../Images/art2.png";
import art3 from "../Images/art3.png";
import art4 from "../Images/art4.png";
import art5 from "../Images/art5.png";
import dunlop from "../Images/dunlop pixel.png";

function Artwork() {
    return (
      <div>
        <h1  className="Title">Web Art</h1>

        <h2  className="Title">Rationale: Pixel Net Art</h2>
        <p className="P">For this assignment, I have selected a pixel styled approach to the Isle of Man flag. Pixelation is an intriguing style that has been around for many years and is still a famous art style amongst digital artists and game designers. I found that this approach would be most suitable for my website’s theme.  I have always been fascinated with the way small blocks of colour work together in order to create something beautiful.  </p>
        <p className="P">The Isle of Man flag, also known as the iconic Three Legs of Mann, contains rich history and symbolism. The 3 legs represent the Isle’s 3 kings which signifies the sun, power and life. The colour red, on the flag represents hardiness, bravery, strength, and valour. The radiant hue shows the resilience and courage rooted in the Isle of Man’s history and the spirit of its people.</p>
        <p className="P">Through this artwork, I would like to capture the dedication and courage of the fellow racers that participate in this dangerous sport. </p>


        <p className="P">My second idea, depending on the time constraints would revolve around a pixel portrait of Joey Dunlop. Dunlop was and still is a well known and respected figure in the TT world. A portrait of him would be a tribute to all of his efforts as a skilled racer. </p>
{/*https://tourismteacher.com/isle-of-man-flag/ */}

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
        <h3  className="Title">Reference images of a colour breakdown and retro poster designs from TT.</h3>

        <img className="art2" src={art2} alt="" />
        <img className="art3" src={art3} alt="" />
        
        <h3  className="Title">Reference images detailed pixel art (A Joey Dunlop Portrait).</h3>
        <img className="art4" src={art4} alt="" />
        <img className="art5" src={art5} alt="" />
        {/*https://diamondpaintings.shop/products/star-wars-death-star-5d-diamond-paintings/ */}
         {/*https://theinspirationgrid.com/pixel-art-portraits-by-hatayosi/ */}
{/*https://za.pinterest.com/pin/431641945516040109/ */}
{/*https://i.pinimg.com/originals/49/0a/b5/490ab5d632b5ba37f427c6a1f171336f.jpg */}

       
<h3  className="Title">Micheal Dunlop breaking Joey Dunlop's 26 win streak in the 2024 IOMTT!</h3>  
<img className="pixel" src={dunlop} alt="" />
 
{/*hair chunks*/ }

<div className="A">
<div className="A1"/> 
<div className="A1"/>

<div className="B1"/>
<div className="C1"/>
<div className="D1"/>

<div className="E1"/>
<div className="F1"/>
<div className="G1"/>
<div className="H1"/>

<div className="I1"/>
<div className="J1"/>
<div className="K1"/>
<div className="L1"/>
<div className="M1"/>
<div className="N1"/>

{/*eyebrow left*/ }

<div className="O1"/>
<div className="P1"/>
<div className="Q1"/>

{/*eyebrow right*/}
<div className="R1"/>
<div className="S1"/>
<div className="T1"/>

{/*sideburns left */}
<div className="U1"/>
<div className="V1"/>
<div className="W1"/>
<div className="X1"/>
<div className="Y1"/>
<div className="Z1"/>

{/*sideburns right */}

<div className="AA1"/>
<div className="AB1"/>
<div className="AC1"/>
<div className="AD1"/>
<div className="AE1"/>
<div className="AF1"/>
<div className="AG1"/>
<div className="AH1"/>
<div className="AI1"/>
<div className="AJ1"/>

<div className="AK1"/>
<div className="AL1"/>
<div className="AM1"/>
<div className="AN1"/>
<div className="AO1"/>
<div className="AP1"/>
<div className="AQ1"/>
<div className="AR1"/>
<div className="AS1"/>
<div className="AT1"/>
<div className="AU1"/>
<div className="AV1"/>
<div className="AW1"/>

{/*NOSE */}
<div className="AX1"/>
<div className="AY1"/>
<div className="AZ1"/>
<div className="BA1"/>
<div className="BB1"/>
<div className="BC1"/>
<div className="BD1"/>
<div className="BE1"/>
<div className="BF1"/>
<div className="BG1"/>
<div className="BH1"/>
<div className="BI1"/>
<div className="BJ1"/>
<div className="BK1"/>

{/*CHEEK */}
<div className="BL1"/>
<div className="BM1"/>
<div className="BN1"/>
<div className="BO1"/>
<div className="BP1"/>
<div className="BQ1"/>

{/*LIPS */}
<div className="BR1"/>
<div className="BS1"/>
<div className="BT1"/>
<div className="BU1"/>
<div className="BV1"/>
<div className="BW1"/>
<div className="BX1"/>
<div className="BY1"/>
<div className="BZ1"/>

<div className="CA1"/>
<div className="CB1"/>
<div className="CC1"/>

</div>

 
      </div>
    );
  }
  
  export default Artwork;
  