import { getNum, getRandomInt, ship } from "./baseclass.js";

let direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
export let shipGenerated = [2];
export function initial(gameBoard) {
  gameBoard.reset();
  gameBoard.survive = shipGenerated.length;
  for (let i = 0; i < shipGenerated.length; i++) {
    let flag = false;
    let randomX;
    let randomY;
    let dir;

    while (!flag) {
      randomX = getRandomInt(0, 9);
      randomY = getRandomInt(0, 9);
      dir = direction[getRandomInt(0, 3)];
      let endX = randomX + dir[0] * shipGenerated[i];
      let endY = randomY + dir[1] * shipGenerated[i];
      if (endX < 0 || endX > 9 || endY < 0 || endY > 9) {
        continue;
      }
      let j = 0;
      for (j = 0; j < shipGenerated[i]; j++) {
        let nowX = randomX + dir[0] * j;
        let nowY = randomY + dir[1] * j;
        let num = getNum(nowX, nowY);
        if (gameBoard.cubes[num] !== 0 ) {
          break;
        }
      }
      if (j === shipGenerated[i]) {
        flag = true;
      }
    }
    let j = 0;
    for (j = 0; j < shipGenerated[i]; j++) {
      let nowX = randomX + dir[0] * j;
      let nowY = randomY + dir[1] * j;
      let num = getNum(nowX, nowY);
      gameBoard.cubes[num] = i + 1;
    }
    gameBoard.ships.push(new ship(shipGenerated[i], dir,randomX,randomY));
  }
}
export function computerMove(turn, left) {
  let randomX, randomY;
  while (true) {
    randomX = getRandomInt(0, 9);
    randomY = getRandomInt(0, 9);
    if (left.alreadyAttack(randomX, randomY)) {
      continue;
    }
    break;
  }
  let result = left.receiveAttack(randomX, randomY);
  if (left.isOver()) {
    alert("game over");
  } else if (result) {
    computerMove(turn, left);
  } else {
    turn = turn === 0 ? 1 : 0;
  }
}
export function beingAttack(e, turn, left, right, ComputerMode) {
  let id = e.target.id;
  let num = Number(id.slice(1));
  num--; //因为数组是从0开始的
  let whichSide = id[0] === "l" ? 0 : 1;
  let X = num % 10;
  let Y = Math.floor(num / 10);
  
  if (turn === -1 || left.isOver() || right.isOver()) {
    return;
  } //还没开始 //或者已经结束


  if (turn === whichSide) return; //牢记 操作的是另外一边
  //点错边了。
  let boardNow = turn === 0 ? right : left;
  if (boardNow.alreadyAttack(X, Y)) {
    return;
  }
  let result = boardNow.receiveAttack(X, Y);
  console.log("still alive, result: ",boardNow.survive,boardNow.isOver())
  if (boardNow.isOver()) {
   alert("game over");
   return;
  } else if (result) {

    return; //再打一次
  } else {
    if (ComputerMode) {
      computerMove(turn,left);
    } else {
      turn = turn === 0 ? 1 : 0;
    }
  }
}
