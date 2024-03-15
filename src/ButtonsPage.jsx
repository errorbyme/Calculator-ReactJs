import React, { useState } from "react";

export default function ButtonsPage({ onclickButton }) {
  let buttonsChar = [
    "C",
    "%",
    "/",
    "remove",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="buttons-group">
      <div className="row m-0">
        {buttonsChar.map((item, i) => {
          return (
            <div className="col-3 box" key={i}>
              <button onClick={() => onclickButton(item)}>
                {item == "remove" ? (
                  <>
                    <i className="fa-solid fa-delete-left"></i>
                  </>
                ) : (
                  <>
                    <span>{item}</span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
