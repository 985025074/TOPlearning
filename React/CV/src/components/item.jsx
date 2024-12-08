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
        items.map((item)=>{
            return <InnerItem key={item.id} time={item.time} where={item.where} description={item.description} />
        })
      }
    </div>
  );
}
