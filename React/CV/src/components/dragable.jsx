/* eslint-disable react/prop-types */
import { useState } from "react";
import "./dragable.css";
export default function Dragable({ title, innerCom }) {
  const [show, setShow] = useState(-1);
  function handleClick() {
    if(show===-1 ){
        setShow(true);
    }
    else
        setShow(!show);
  }
    return (
    <div className={"dragable"+" "+(show===-1?"unclick":show===false? "notshow":"show")}  >
      <div className="nothidden" onClick={handleClick}>
          <h2>{title} </h2>
          <i className="fa-solid fa-chevron-up chevron "></i>
      </div>
    
         <div className="hidden">{innerCom}</div>
    </div>
  );
}
