import { gameBoard, getNum, getRandomInt, ship } from "../js/baseclass.js";
import {initial, shipGenerated } from "../js/basefunc.js";
describe("initial",()=>{
    test("easy case",()=>{
        let gb = new gameBoard();
        initial(gb);
        expect(gb.survive).toBe(shipGenerated.length);
        for(let i = 0; i < shipGenerated.length; i++){
            expect(gb.ships[i].length === shipGenerated[i]).toBe(true);
            expect(gb.ships[i].direction.length === 2).toBe(true);
        }
        
    })
})