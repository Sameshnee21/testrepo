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

<div className="FAV" >
<img className="left" src={sector4} alt="racetrack" />
<h3 className="Sub1"> SECTOR 4: SARAH'S COTTAGE</h3>
<p className="text1"> * 9.6 miles from starting line.</p>
<p className="text1"> * 80mp/h on 2nd gear.</p>
</div>

<div className="FAV2" >
<img className="right" src={sector6} alt="racetrack" />
<h3 className="Sub2"> SECTOR 6: RHENCULLEN</h3>
<p className="text2"> * 15.1 miles from starting line.</p>
<p className="text2"> * 140mp/h on 5th gear.</p>
</div>

<div className="FAV" >
<img className="left" src={sector8} alt="racetrack" />
<h3 className="Sub1"> SECTOR 8: CHURCHTOWN MEMORIAL</h3>
<p className="text1"> * 22 miles from starting line.</p>
<p className="text1"> * 160mp/h on 5th gear.</p>
</div>

<div className="FAV2" >
<img className="right" src={sector9} alt="racetrack" />
<h3 className="Sub2"> SECTOR 9: GOOSENECK</h3>
<p className="text2"> * 25.4 miles from starting line.</p>
<p className="text2"> * 50mp/h on 2nd gear.</p>
</div>

<div className="FAV" >
<img className="left" src={sector11} alt="racetrack " />
<h3 className="Sub1"> SECTOR 11: 33RD</h3>
<p className="text1"> * 33 miles from starting line.</p>
<p className="text1"> * 150mp/h on 5th gear.</p>
</div>

<div className="FAV2" >
<img className="right" src={sector12} alt="racetrack" />
<h3 className="Sub2"> SECTOR 12: SIGNPOST</h3>
<p className="text2"> * 36.5 miles from starting line.</p>
<p className="text2"> * 70mp/h on 2nd gear.</p>
</div>

<p className="last">Images courtesy of TT Marshalls.</p>



        </div>

        
    );
  }
  
  export default Track;
  