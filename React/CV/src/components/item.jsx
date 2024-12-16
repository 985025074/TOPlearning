/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function InnerItem({time, where, description}) {
  return (
    <div className="item">
      <div>
        <p className="time">{time}</p>
      </div>
      <div>
        <p className="where">{where}</p>
        <p className="description">
          {description}
        </p>
      </div>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
export default function Item({ title,items}) {
    if(title == undefined){
        return null;
    }
  return (
    <div className={title}>
      <h3 className="smalltitle">{title}</h3>
      {
        items.map((item,index)=>{
            return <InnerItem key={index} time={item[0]} where={item[1]} description={item[2]} />
        })
      }
    </div>
  );
}
