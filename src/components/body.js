import React from "react";
import "./body.css";
import JavaIcon from "./images/java-4.svg";
import ReactIcon from "./images/react-2.svg";
import Html from "./images/html-1.svg";
import Javascript from "./images/logo-javascript.svg";
import Git from "./images/git-scm-icon.svg";
import Github from "./images/github-tile.svg";
import Node from "./images/nodejs.svg";
import Mongodb from "./images/mongodb.svg";
import Express from "./images/expressjs.svg";
import SQL from "./images/mysql.svg";
import Bootstrap from "./images/getbootstrap.svg";

export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="content">
        <div className="lcontent">
          <h1 className="text">Front-End React Developer</h1>
          <p className="para">
            Hola!!, I'm Priyanshu Singh. A passionate Front-end React Developer
            based in Uttar Pradesh, India.
          </p>
          <span>
            <a
              href="https://github.com/Priyanshu-su30"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-fw fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-singh-a7711822b/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-fw fa-linkedin"></i>
            </a>
          </span>
        </div>
        <div className="hero-img"></div>
      </div>

      <div class="skills">
        <p>Tech Stack</p>
        <div class="logos">
          <ul>
            <li>
              <img
                className="jsicon"
                src={JavaIcon}
                title="Java"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Html}
                title="HTML5"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Bootstrap}
                title="Bootstrap"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Javascript}
                title="Java Script"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={ReactIcon}
                title="React"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Node}
                title="NodeJs"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Express}
                title="ExpressJS"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={Mongodb}
                title="MongoDB"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
                className="jsicon"
                src={SQL}
                title="MYSQL"
                alt="skill-icon"
              />
            </li>
            <li>
              <img className="jsicon" src={Git} title="Git" alt="skill-icon" />
            </li>
            <li>
              <img
                className="jsicon"
                src={Github}
                title="Github"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
