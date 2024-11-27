import css from "./css/normal.css";
import myCSS from "./css/styles.css";
import { gameBoard, getNum, getRandomInt, ship } from "./js/baseclass.js";
import {
  initial,
  shipGenerated,
  computerMove,
  beingAttack,
} from "./js/basefunc.js";
let leftboard = document.querySelector("#left");
let rightboard = document.querySelector("#right");
let randomBtn = document.querySelector("#random_loc");
let startBtn = document.querySelector("#start_game");
let doubleBtn = document.querySelector("#double");
let leftGameBoard = new gameBoard();
let rightGameBoard = new gameBoard();
let ComputerMode = true;
let turn = -1;
//按下状态
let press = false;
//get a ship by  gameboard 's div
function getShip(e,gameboard){
    let id = e.target.id;
    let num = Number(id.slice(1));
    num--; //因为数组是从0开始的
    console.log(gameboard.ships)
    let targetShip = gameboard.ships[(gameboard.cubes[num]-1)];
    return targetShip;
}
function drawShips(div, gameboard) {
  let ships = Array.from(div.querySelectorAll(".ships"));

  for (let i = 0; i < ships.length; i++) {
    ships[i].classList=["ships"] //清空
    if (gameboard.cubes[i] == -1) {
      ships[i].classList.add("beHit");
      continue;
    }
    if (gameboard.cubes[i] == "X") {
      ships[i].classList.add("beHitRight");
      continue;
    }
    if (gameboard.cubes[i] != 0) {
      ships[i].classList.add("hasShip");

    }
  }
}
function bindBeingAttack(div) {
  let ships = Array.from(div.querySelectorAll(".ships"));
  for (let i = 0; i < ships.length; i++) {
    ships[i].addEventListener("click", function (e) {
      beingAttack(e, turn, leftGameBoard, rightGameBoard, ComputerMode);
      drawShips(leftboard, leftGameBoard);
      drawShips(rightboard, rightGameBoard);
    });


  }
}

function startGame() {
  if (ComputerMode) {
    initial(rightGameBoard);
    drawShips(rightboard, rightGameBoard);
    bindBeingAttack(leftboard)
    bindBeingAttack(rightboard);
    turn = 0;
  }
}
randomBtn.addEventListener("click", function () {
  initial(leftGameBoard);
  drawShips(leftboard, leftGameBoard);
  let ships = Array.from(leftboard.querySelectorAll(".ships"));
  ships.forEach(function (ship) {
    ship.addEventListener("mousedown", function (e) {
        console.log(getShip(e, leftGameBoard));
        press = true;
    });
    ship.addEventListener("mouseup", function (e) {
        press = false;
    });
  });
});
startBtn.addEventListener("click", function () {
  startGame();
});
