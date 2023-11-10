import React from "react";
import "./Main.css";
import Testimonials from "../Testimonials/Testimonials";
import AboutImage1 from "../../assets/icons_assets/Mario and Adrian A.jpg";
import AboutImage2 from "../../assets/icons_assets/Mario and Adrian b.jpg";

const Main = () => {
  return (
    <>
      <Testimonials />
      <main className="main-section">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="info-part">
            Little Lemon is a charming neighborhood bistrothats serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div className="image-section">
          <img src={AboutImage1} className="Image" width={300} alt="" />
          <img src={AboutImage2} className="top" width={300} alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
