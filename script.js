"use strict";

const allParts = document.querySelectorAll(".styleName");
let allStyleBtns = document.querySelectorAll(".styleBtn");
const btnBar = document.querySelectorAll(".styleBtns");
const randBtn = document.getElementsByClassName("random")[0];

const looks = {
  accessories: ["earings", "flower", "glasses", "headphone"],
  background: [
    "blue50",
    "blue60",
    "blue70",
    "darkblue30",
    "darkblue50",
    "darkblue70",
    "green50",
    "green60",
    "green70",
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

// console.log(document.querySelector(".ears"));

const run = (part) => {
  for (let posters of allStyleBtns) {
    posters.addEventListener("click", () => {
      let change = document.querySelector(`.${part}`);
      console.log(document.querySelector(`.${part}`));
      // console.log(posters.innerHTML);
      change.src = `https://www.warzon.info/alapacagenerator/alpaca/${part}/${posters.innerHTML.toLowerCase()}.png`;
    });
  }
};

for (let part of allParts) {
  part.addEventListener("click", () => {
    for (let eachstyle of allStyleBtns) {
      eachstyle.remove();
    }

    let looklist = looks[part.innerHTML.toLowerCase()];
    for (let eachlook of looklist) {
      const newbtn = document.createElement("button");
      newbtn.innerHTML = eachlook;
      newbtn.classList.add("styleBtn");

      btnBar[0].appendChild(newbtn);
    }
    allStyleBtns = document.querySelectorAll(".styleBtn");
    console.log(allStyleBtns[1]);
    console.log(part.innerHTML.toLowerCase());
    run(part.innerHTML.toLowerCase());
  });
}

randBtn.addEventListener("click", () => {
  Object.keys(looks).forEach((part) => {
    const allParts = looks[part];
    const randomPart = allParts[Math.floor(Math.random() * allParts.length)];
    console.log(randomPart);

    let change = document.querySelector(`.${part}`);
    change.src = `https://www.warzon.info/alapacagenerator/alpaca/${part}/${randomPart}.png`;
  });
});
