"use strict";

const allParts = document.getElementsByClassName("styleName");
let allStyleBtns = document.querySelectorAll(".styleBtn");
const btnBar = document.getElementsByClassName("styleBtns");
const randBtn = document.getElementsByClassName("random");

const looks = {
  accessories: ["earings", "flower", "glasses", "headphone"],
  backgrounds: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
    "gray40",
    "gray70",
    "gray80",
    "red50",
    "red60",
    "red70",
    "yellow50",
    "yellow60",
    "yellow70",
  ],
  ears: ["default", "tilt-backward", "tilt-forward"],
  eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
  hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  leg: [
    "bubble-tea",
    "cookie",
    "default",
    "game-console",
    "tilt-backward",
    "tilt-forward",
  ],
  mouth: ["astonished", "default", "eating", "laugh", "tongue"],
  neck: ["bend-backward", "bend-forward", "default", "thick"],
};

// console.log(document.getElementsByClassName("styleBtn"));

const run = (part) => {
  for (let posters of allStyleBtns) {
    console.log("It works :?");
    posters.addEventListener("click", () => {
      let change = document.querySelector(`.${part}`);
      change.src = `https://www.warzon.info/alapacagenerator/alpaca/${part}/${posters.innerHTML.toLowerCase()}.png`;
    });
  }
};

for (let part of allParts) {
  part.addEventListener("click", () => {
    console.log(part.innerHTML.toLowerCase());

    //Creates new boxes
    let looklist = looks[part.innerHTML.toLowerCase()];
    // console.log(looklist);
    //Deletes boxes
    for (let eachstyle of allStyleBtns) {
      // console.log();
      eachstyle.remove();
    }
    for (let eachlook of looklist) {
      const newbtn = document.createElement("button");
      newbtn.innerHTML = eachlook;
      newbtn.classList.add("styleBtn");
      // console.log(document.getElementsByClassName("styleBtn"));
      // console.log(allStyleBtns[0]);
      // btnBar[0].appendChild(newbtn);
    }

    // allStyleBtns = document.querySelectorAll(".stylebtn");
    // run(part.innerHTML);
  });
}
