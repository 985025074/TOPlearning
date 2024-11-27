export function getNum(X, Y) {
  return Y * 10 + X;
}
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//^^tools
export class ship {
  constructor(length, direction,startX,startY) {
    this.length = length;
    this.direction = direction;
    this.hp = length;
    this.startX = 0;
    this.startY = 0;
  }
  hit() {
    this.hp--;
  }
  isSunk() {
    if (this.hp === 0) {
      return true;
    }
    return false;
  }
}

export class gameBoard {
  constructor() {
    this.cubes = new Array(100);
    for (let i = 0; i < 100; i++) {
      this.cubes[i] = 0;
    }
    //空的
    this.ships = [];
    this.survive = 0;
  }
  reset() {
    this.cubes = new Array(100);
    for (let i = 0; i < 100; i++) {
      this.cubes[i] = 0;
    }
    //空的
    this.ships = [];
    this.survive = 0;
  }
  alreadyAttack(X, Y) {
    let num = getNum(X, Y);
    return this.cubes[num] === -1 || this.cubes[num] === "X";
  }
  isOver() {
    return this.survive === 0;
  }
  receiveAttack(X, Y) {
    console.log("receiveAttack", X, Y);
    if (this.cubes[getNum(X, Y)] !== 0 && this.cubes[getNum(X, Y)] !== "X") {
      console.log(this.ships);
      this.ships[this.cubes[getNum(X, Y)] - 1].hit();
      if (this.ships[this.cubes[getNum(X, Y)] - 1].isSunk()) {
        this.survive--;
      }
      this.cubes[getNum(X, Y)] = "X";
      return true;
    }
    this.cubes[getNum(X, Y)] = -1;
    return false;
  }
}
