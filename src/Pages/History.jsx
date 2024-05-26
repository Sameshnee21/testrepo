import React from "react";
import "../style/home.css";
import "../style/history.css";
import banner from "../Images/historyBanner.png";
import history2 from "../Images/history2.png";
import collier from "../Images/Collier.png";
import dunlop from "../Images/Dunlop.png";
import hickman from "../Images/Hickman.png";

function History() {
    return (
      <div >
        <h1 className="Title">Isle of Man TT: The Starting Line</h1>

        <img className="banner" src={banner} alt="black and white photo of motorbike racers" />
        <h2 className="Title">1907- PRESENT</h2>
           
<img className="image2" src={history2} alt="motorbike racer" />

<p className="historyT">The Isle of Man TT is known as one of the most dangerous sports in the world. From the rush of it all, legendary racers are born.The Isle of Man TT Races celebrated its 100th race in 2019, thrill seekers still venture to the Island in the middle of the Irish Sea for the same reason the those who competed in the first race in 1907 did - the Tourist Trophy, more commonly known as the Isle of Man TT.</p>

<h2 className="Great">The GREATS</h2>
<p className="GreatT">The TT is not merely a race, it is a right of passage to become one of the "Greats". Over the years, many have lost their lives by pushing their boundaries, however those who have survived , have their names engraved in the stars. </p>



<img className="GOATS" src={collier} alt="Illustration" />
<p className="collier"> <h3 className="Title">CHARLIE COLLIER</h3> was the one of the founders of the Isle of Man TT and the first winner of the 1907 single cylinder class TT race with an average speed of 38.21mph with a 431cc Matchless. His fastest lap recorded was 42.9 mph. The following year Collier took second place in the same single cylinder class.</p>
{/*https://www.iomtt.com/tt-database/competitors?ride_id=1*/}


<img className="GOATS" src={dunlop} alt="Illustration" />
<p className="collier"><h3 className="Title">JOEY DUNLOP</h3> also known as ‘King of the Road’ </p>
{/*https://www.iomtt.com/tt-database/competitors?ride_id=8649 */}

<img className="GOATS" src={hickman} alt="Illustration" />
<p className="collier"><h3 className="Title">PETER HICKMAN</h3> was the first winner of the 1907 single cylinder class TT race with an average speed of 38.21mph.</p>


         

        <h4 className="Title">Research and Images: https://www.iomttraces.com/racing/page/history/</h4>
        </div>
    );
  }
  
  export default History;
  