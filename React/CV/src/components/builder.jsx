/* eslint-disable react/prop-types */
import ItemManager from "./itemmanager.jsx";
import Dragable from "./dragable.jsx";
import Item from "./item.jsx";
export default function Builder({
  personaldetails,
  setpersonaldetails,
  titles,
  existItems,
  setexistItems,
  blindID,
  setblindID,
}) {
  return (
    <div className="builder">
      <h2 className="title">Personal Details</h2>
      <div
        className="personaldetails inputs"
        onChange={(event) => {
          console.log(event.target);
          setpersonaldetails({
            ...personaldetails,
            [event.target.name]: event.target.value,
          });
        }}
      >
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
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" />
        </div>
      </div>
      {/*  */}
      {titles.map((item, index) => {
        return (
          <Dragable
            key={item}
            title={item}
            innerCom={
              <ItemManager
                title={item}
                existItems={existItems[index]}
                setexistItems={setexistItems[index]}
                blindID={blindID[index]}
                setblindID={setblindID[index]}
              />
            }
          />
        );
      })}
    </div>
  );
}
