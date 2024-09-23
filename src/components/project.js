/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./project.css";
import dailyblog from "./images/Dailyblog (2).png";
import tourImg from "./images/tour.jpeg";
import deliciasoImg from "./images/deliciaso.jpeg";

export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="project" id="project">
        <div className="container">
          <div className="heading">
            <p>Projects</p>
            <h3>Each project is a unique piece of development 🧩</h3>
          </div>
          <div className="block">
            <div className="aboutProject">
              <h4>
                <b>Dail Blog</b>
              </h4>
              <p>
                A full-stack web application that allows users to create
                accounts, post blogs with images, and engage with content by
                commenting on blogs and also replying to the comments.
              </p>
              <div className="techName">
                <p>React</p>
                <p>Nodejs</p>
              </div>
              <div class="links">
                <a
                  href="https://github.com/Priyanshu-su30/blog-frontend?tab=readme-ov-file"
                  target="_blank"
                  rel="noreferrer"
                >
                  CODE <i className="fa fa-fw fa-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://priyanshu-dailyblog.netlify.app/"
                  rel="noreferrer"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
            <div className="siteImage" id="project1">
              <a
                target="_blank"
                href="https://priyanshu-dailyblog.netlify.app/"
                rel="noreferrer"
              >
                <img src={dailyblog} />
              </a>
            </div>
          </div>
          <div className="block">
            <div className="siteImage" id="project2">
              <a
                target="_blank"
                href="https://priyanshu-su30.github.io/TOUR/index.html"
                rel="noreferrer"
              >
                <img src={tourImg} />
              </a>
            </div>
            <div className="aboutProject">
              <h4>
                <b>TOUR</b>
              </h4>
              <p>
                This frontend application allows users to easily browse, search,
                and book hotels for their desired dates. With a user-friendly
                interface and intuitive design, finding the perfect
                accommodation has never been easier.
              </p>
              <div className="techName">
                <p>HTML</p>
                <p>Javascript</p>
              </div>
              <div class="links">
                <a
                  href="https://github.com/Priyanshu-su30/TOUR"
                  target="_blank"
                  rel="noreferrer"
                >
                  CODE <i className="fa fa-fw fa-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://priyanshu-su30.github.io/TOUR/"
                  rel="noreferrer"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="aboutProject">
              <h4>
                <b>DELICIASO</b>
              </h4>
              <p>
                This project contains the code for our restaurant's website,
                which showcases our delicious menu, location, and various
                offerings. The website is built using HTML, CSS, and JavaScript,
                and it is designed to provide a delightful and user-friendly
                experience to our customers.
              </p>
              <div className="techName">
                <p>HTML</p>
                <p>Javascript</p>
              </div>
              <div class="links">
                <a
                  href="https://github.com/Priyanshu-su30/DELICIASO"
                  target="_blank"
                  rel="noreferrer"
                >
                  CODE <i className="fa fa-fw fa-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://priyanshu-su30.github.io/DELICIASO/"
                  rel="noreferrer"
                >
                  Live Demo
                  <i class="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
            <div className="siteImage" id="project3">
              <a
                target="_blank"
                href="https://priyanshu-su30.github.io/DELICIASO/"
                rel="noreferrer"
              >
                <img src={deliciasoImg} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
