import { useState } from "react";
import CV from "./components/cv.jsx";
// 
import Dragable from "./components/dragable.jsx";
// 
import "./styles/App.css";
import ItemManager from "./components/itemmanager.jsx";
let items_education = [
  {
    time: "2015.9 - 2019.6",
    where: "beijing",
    description: "Bachelor of Engineering in Computer Science",
  },
];
let items_experience = [
  {
    time: "2015.9 - 2019.6",
    where: "beijing",
    description: "Bachelor of Engineering in Computer Science",
  },
];
function App() {
  return (
    <>
      <div className="builder">
        <h2 className="title">Personal Details</h2>
        <div className="personaldetails">
          <div className="labinp">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="labinp">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="labinp">
            <label htmlFor="tel">Phone:</label>
            <input type="tel" id="tel" name="tel" />
          </div>
          <div className="labinp">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />
          </div>
        </div>
        <Dragable title = "Education" innerCom={(<ItemManager/>)} />
    asd
      </div>
    </>
  );
}

export default App;
