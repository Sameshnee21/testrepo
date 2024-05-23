import React from "react";
import "../style/home.css";
import "../style/style.css";
import home from "../Images/1.Home.png";
import thegreat from "../Images/2.TG.png";
import tg from "../Images/3.TG.png";
import landscape from "../Images/4.Landscape.png";
import style from "../Images/5.Styleguide.png";
import theory from "../Images/6.Theory.png";
import art from "../Images/7.Artwork.png";
import about from "../Images/8.About.png";
import cp1 from "../Images/ColourPalette.png";
import tt1 from "../Images/TT1.png";
import tt2 from "../Images/TT2.png";
import tt3 from "../Images/TT3.png";
import m1 from "../Images/Marshall1.png";
import m2 from "../Images/Marshall2.png";
import m3 from "../Images/Marshall3.png";

function Styleguide() {
    return (
      <div >
        <h1 className="Title">Behind the Scenes</h1>
        <p className="P">The motivation behind selecting the Isle of Man TT as my inspiration for the website is due to the impressive skills and rich history of the races. The overall race pushs racers to the maximum and is a celebration of speed, courage and the thrill of motorsports. Being a motorsport lover is not the only reason, as a designer the colour choices of the speed machines as well as how it is carried throughout the official websites, plays a big part in creating interest.</p>
        <img className="setone" src={cp1} alt=" retro orange colour palette " />
        <p className="info">The retro warm tone colour palette was chosen after much research of the past promotional posters designed for the Isle of Man TT races. Each poster has a "retro" styling which stood out. The iconic orange and red has been carried out over the years in both the logo and the official websites. (Images: Pinterest, 2024)</p> 


<h2 className="title2"> Screenshots from official TT website & TT Marshalls website.</h2>
<img className="settwoo" src={tt1} alt="wesite screenshot of homepage." />
<img className="settwoo" src={tt2} alt="website screenshot of events/news" />
<img className="settwoo" src={tt3} alt="website screenshot of explore page" />
<img className="setthree" src={m3} alt="marshall tt homepage" />
<img className="setthree" src={m2} alt="marshall tt landscape page" />
<img className="setthree" src={m1} alt="marsall tt graphic" />

<h2 className="title2"> Wireframes</h2>
<img className="frames" src={home} alt="" />
<img className="frames" src={thegreat} alt="" />
<img className="frames" src={tg} alt="" />
<img className="frames" src={landscape} alt="" />
<img className="frames" src={style} alt="" />
<img className="frames" src={theory} alt="" />
<img className="frames" src={art} alt="" />
<img className="frames" src={about} alt="" />
        
        </div>
    );
  }
  
  export default Styleguide;
  