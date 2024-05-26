import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./Pages/Home";
import Track from "./Pages/Track";
import History from "./Pages/History";
import Styleguide from "./Pages/Styleguide";
import Essay from "./Pages/Essay";
import Artwork from "./Pages/Artwork";
import About from "./Pages/About";

import Navigation from "./Components/Navigation";


function App() {
  return (
    <>
    <ScrollToTop smooth color="#f59b14" />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/history" element={<History />} />
          <Route path="/styleguide" element={<Styleguide />} />
          <Route path="/essay" element={<Essay />} />
         
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </BrowserRouter>

      <p style={{ marginTop: "100vh" }}>bottom</p>
    </>
  );
}

export default App;
