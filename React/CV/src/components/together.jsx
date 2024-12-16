import CV from "./cv.jsx";
import Builder from "./builder.jsx";
import { useState } from "react";
export function Together() {
  const [personaldetails, setPersonaldetails] = useState({name: "", email: "", tel: "", location: ""});
  const [existItems_edu, setexistItems_edu] = useState([]);
  const [blindID_edu, setblindID_edu] = useState([]);
  const [existItems_exp, setexistItems_exp] = useState([]);
  const [blindID_exp, setblindID_exp] = useState([]);
  let titles = ["Education", "Experience"];
  let CVpack = [["Education", existItems_edu],["Experience", existItems_exp]]
  return (
    <>
      <div className="together">
        <Builder
          personaldetails={personaldetails}
          setpersonaldetails={setPersonaldetails}
          titles={titles}
          existItems={[existItems_edu, existItems_exp]}
          setexistItems={[setexistItems_edu, setexistItems_exp]}
          blindID={[blindID_edu, blindID_exp]}
          setblindID={[setblindID_edu, setblindID_exp]}
        ></Builder>
        <CV {...personaldetails} itemspack={CVpack}></CV>
      </div>
    </>
  );
}
