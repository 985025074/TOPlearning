/* eslint-disable react/prop-types */
import { useState } from "react";
import "./itemmanager.css";
//分别代表两个设置函数
function CreateItem({ cancel, create, existItems }) {
  let time, where, discription;
  function handleSubmit() {
    create([...existItems, [time, where, discription]]);
    cancel("exist");
  }
  return (
    <div className="createitem inputs">
      {/* time where discription */}
      <div className="labinp">
        <label htmlFor="time">time:</label>
        <input
          type="text"
          id="time"
          name="time"
          onChange={(e) => (time = e.target.value)}
        />
      </div>
      <div className="labinp">
        <label htmlFor="where">where:</label>
        <input
          type="text"
          id="where"
          name="where"
          onChange={(e) => (where = e.target.value)}
        />
      </div>
      <div className="labinp">
        <label htmlFor="discription">discription:</label>
        <input
          type="text"
          id="discription"
          name="discription"
          onChange={(e) => (discription = e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={() => cancel("exist")}>Cancel</button>
    </div>
  );
}
// 数据格式:
// [time, where, discription]
function ShowItem({ cancel, create, setblindID, blindID, existItems }) {
  function setUnvisible(key) {
    if (!blindID.includes(key)) setblindID([...blindID, key]);
    else setblindID(blindID.filter((item) => item !== key));
  }

  return (
    <div className="showitem divs">
      {existItems.map((item, index) => {
        return (
          <div key={item[0]} className="item">
            {item[2]}
            <i
              className="fa-regular fa-eye-slash eye"
              onClick={()=>setUnvisible(item[0])}
            ></i>
          </div>
        );
      })}
      <button onClick={() => cancel("create")}>Create</button>
    </div>
  );
}
export default function ItemManager({ existItems, setexistItems, blindID, setblindID}) {
const [showWhich, setshowWhich] = useState("create");
  return (
    <>
      <div className="itemmanager">
        {showWhich === "create" && (
          <CreateItem
            cancel={setshowWhich}
            create={setexistItems}
            existItems={existItems}
          />
        )}
        {showWhich === "exist" && (
          <ShowItem
            cancel={setshowWhich}
            create={setexistItems}
            setblindID={setblindID}
            blindID={blindID}
            existItems={existItems}
          />
        )}
      </div>
    </>
  );
}
