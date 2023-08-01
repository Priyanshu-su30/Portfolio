import React from "react";
import "./about.css";
import me from "./images/work-emoji.png";
import bench from "./images/desk.webp";
import circle from "./images/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg";

export default function Navbar() {
  return (
    <>
      <div class="about" id="aboutme">
          <div class="aboutContent">
            <div class="img">

              <img src={bench} alt="mee" class="mainImg" />
                <img src={circle} alt="text" className="circleImg" />
              <img src={me} alt="emoji" class="workEmoji" /> 
              
            </div>

            <div class="aboutText">

              <h3>About me</h3>
              <h4>A dedicated Front-End Developer</h4>

              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript and React. I excel in
                designing and maintaining responsive websites that offer a
                smooth user experience. My expertise lies in crafting dynamic,
                engaging interfaces through writing clean and optimized code and
                utilizing cutting-edge development tools and techniques. I am
                also a team player who thrives in collaborating with
                cross-functional teams to produce outstanding web applications.
              </p>
            </div>
          </div>
        </div>
    </>
  );
}
