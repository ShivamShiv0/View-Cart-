import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <main className="hero">
        <div className="heroContent">
          <h1>YOUR FEET DESERVE THE BEST</h1>

          <p>
          
            AND WE’RE HERE TO HELP YOU WITH OUR SHOES YOUR FEET DESERVE THE BEST. Shop Now Category Also
            Available On
          </p>

          <div className="heroBtn">
            <button  >Shop Now</button>
            <button className="secondaryBtn" >Category </button>
          </div>
          <div className="site">
            <p>Also Available on </p>

            <div className="brandIcon">
              <img src="/Images/amazon.png" alt="amazon logo" />
              <img src="/Images/flipkart.png" alt="flipkart logo" />
            </div>
          </div>
        </div>
        <div className="heroImage">
        <img src="/Images/shoe_image.png" alt="Shoe" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
