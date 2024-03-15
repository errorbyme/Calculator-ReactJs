import React, { useState } from "react";
import "./App.css";
import ButtonsPage from "./ButtonsPage";

export default function Calculator() {
  let [inputVal, SetInputVal] = useState("");
  let [remove, SetRemove] = useState(true);
  let onclickButton = (val) => {
    if (val === "C") {
      SetInputVal("");
    } else if (val === "=") {
      const ans = eval(inputVal);
      SetInputVal(ans);
      SetRemove(false);
    } else if (val === "remove") {
      if (remove) {
        SetInputVal(inputVal.slice(0, -1));
      }
    } else {
      SetRemove(true);
      let inputvalue = inputVal + val;
      SetInputVal(inputvalue);
    }
  };
  return (
    <div className="container-fluid">
      <div className="wrapper">
        <div className="inputBox">
          <input
            type="text"
            className="form-control"
            value={inputVal}
            placeholder=". . . ."
            readOnly
          />
        </div>
        <ButtonsPage onclickButton={onclickButton} />
      </div>
    </div>
  );
}
