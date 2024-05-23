import React from "react";
import "../style/home.css";
import "../style/map.css";
import map from "../Images/IsleofMan Map.png";

function Track() {
    return (
      <div>
        <h1 className="Title">Routes of the TT</h1>
<img className="map" src={map} alt="Isle of Man Map and track" />

        </div>

        
    );
  }
  
  export default Track;
  