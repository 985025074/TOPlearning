import {getNum,ship,gameBoard} from '../js/baseclass.js';
describe("getNum",()=>{
    test("easy case",()=>{
        expect(getNum(1,0)).toBe(1);
        expect(getNum(2,0)).toBe(2);
        expect(getNum(3,1)).toBe(13);
    })
})
describe("ship",()=>{
    test("easy case",()=>{
        let ships = new ship(1,0);
        expect(ships.isSunk()).toBe(false);
        ships.hit()
        expect(ships.isSunk()).toBe(true);
    })
})
describe("gameBoard",()=>{
    test("easy case",()=>{
       let gb = new gameBoard();
       expect(gb.alreadyAttack(0,0)).toBe(false);
       gb.cubes[0] = -1;
       gb.survive = 0;
    expect(gb.alreadyAttack(0,0)).toBe(true);
    expect(gb.alreadyAttack(0,1)).toBe(false);
    })
})