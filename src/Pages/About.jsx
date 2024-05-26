import React from "react";
import "../style/home.css";
import "../style/about.css";
import profile from "../Images/Portrait.png";
import logo1 from "../Images/Logo 1.png";




function About() {
    return (
      <div>
        <h1 className="Title">Meet The Designer: Sameshnee Moodley</h1>
        <img className="personal" src={profile} alt="Biker with helmet with a heart sign." />
        <p className="Profile">Hey there! I'm Sameshnee, a graphic designer, animator and a bike enthusiast. I hope that you have enjoyed this webiste as much as I have had, building it. I built my website based on the bond that motorbikes have created between my brother and I. Not many know how special the motorbike world is, it is not merely a sport but rather something magical (and addictive).</p>
        <p className="Profile"> As the saying goes, "Input makes the design better" (well, something like that), all input is much appreciated so that we can improve and make your experience wayyyyyy better.</p>
        <p className="Profile">If you would like to see more of my work, you can follow me on Instagram (@the_sameshnee), where I post the good, the bad and the ugly, Behance (which is mostly the good) and LinkedIn.</p>
        <p className="Profile">Much Love, Sameshnee.</p>

<img className="logo" src={logo1} alt="instagram and behance logo" />

       {/*Insert Social media Handles or links*/ }
       
        </div>

        
    );
  }
  
  export default About;
  