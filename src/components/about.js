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
            <h4>A dedicated Full-Stack Developer</h4>

            <p>
              I'm a full-stack developer. I'm passionate about building web
              applications from the ground up. I'm proficient in HTML, CSS,
              JavaScript, React, Node.js, Mongodb.I enjoy the challenge of
              tackling both the front-end and back-end aspects of a project. On
              the front-end, I'm skilled in creating intuitive and visually
              appealing user interfaces using modern frameworks and libraries.
              On the back-end, I specialize in developing efficient and scalable
              server-side applications that handle data storage, retrieval, and
              processing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
