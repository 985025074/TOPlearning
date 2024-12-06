import { useState } from "react";

import "./styles/App.css";

function App() {
  return (
    <>
      <div className="cv">
        <header>
          <h1>syc</h1>
          <div className="information">
            <div className="infoItem">
              <i className="fa-solid fa-envelope"></i>
              <div className="email">985025074@qq.com</div>
            </div>
            <div className="infoItem">
            <i className="fa-solid fa-phone"></i>
              <div className="tel">123456</div>
            </div>
            <div className="infoItem">
              <i className="fa-solid fa-house"></i>
              <div className="location">Beijing, China</div>
            </div>
          </div>
        </header>
        <main>
          <div className="education">
            <h3 className="smalltitle">Education</h3>
            <div className="item">
              <div>
                <p className="time">2015.9 - 2019.6</p>
              </div>
              <div>
                <p className="where">Beijing Institute of Technology</p>
                <p className="description">
                  Bachelor of Engineering in Computer Science
                </p>
              </div>
            </div>
          </div>
          <div className="experience">
            <h3 className="smalltitle">Experience</h3>
            <div className="item">
              <div>
                <p className="time">2015.9 - 2019.6</p>
              </div>
              <div>
                <p className="where">Beijing Institute of Technology</p>
                <p className="description">
                  Bachelor of Engineering in Computer Science
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
