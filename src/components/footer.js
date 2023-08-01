import React from "react";
import './footer.css';


export default function Navbar() {
  return (
    <>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
      <footer>
        <div class="containers">
          <div class="footerc">
            <h3>Copyright © 2023. All rights are reserved</h3>
            <div class="socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/priyanshu-singh-a7711822b/"
              >
                <i className="fa fa-fw fa-linkedin"></i>
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Priyanshu-su30"
              >
                <i className="fa fa-fw fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
