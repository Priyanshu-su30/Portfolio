import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="nav">
        <nav>
          <a className="head"><strong>priyanshu.dev</strong></a>
          <div className="elements">
            <a href="#"> Home </a>
            <a href="#aboutme"> About me </a>
            <a href="#project"> Project </a>
            <a href="#contact"> Contact </a>
          </div>
        </nav>
      </div>
    </>
  );
}
