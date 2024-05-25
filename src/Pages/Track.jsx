import React from "react";
import "../style/home.css";
import "../style/map.css";
import map from "../Images/IsleofMan Map.png";
import sector4 from "../Images/Sector4.png";
import sector6 from "../Images/Sector6.png";
import sector8 from "../Images/Sector8.png";
import sector9 from "../Images/Sector9.png";
import sector11 from "../Images/Sector11.png";
import sector12 from "../Images/Sector12.png";

function Track() {
    return (
      <div>
        <h1 className="Title">Routes of the TT</h1>
<img className="map" src={map} alt="Isle of Man Map and track" />

<h2 className="Title">Here are a few fan favourite locations to look out for!</h2>

<img className="left" src={sector4} alt="racetrack with a cottage" />
<h3 className="Sub1"> SECTOR 4: SARAH'S COTTAGE</h3>
<p className="text1"> cheeseball</p>


{/*<p className="P">Images courtesy of TT Marshalls.</p>*/}

        </div>

        
    );
  }
  
  export default Track;
  