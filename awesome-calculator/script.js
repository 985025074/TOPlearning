let displayNum = "1";
let alreadyNum = 0;
let operator = "";
let state = 1;
let displayer = document.querySelector(".Display");
function doOperaion(operator, num1, num2) {
    console.log("Doing operation");
    console.log(num1, operator, num2);
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 0;
    }
}
function display() {
    displayer.innerText = displayNum;
}
function numberFunc(e) {
    console.log("Number pressed", e.target.innerText);
    console.log("State", state);
    if (state == 1 || state == 3) {
        displayNum += e.target.innerText;
    }
    else if (state == 2) {
        alreadyNum = Number(displayNum);
        displayNum = e.target.innerText;
        state = 3;
    }
    else if (state == 4) {
        displayNum = e.target.innerText;
        state = 1;
    }
    display();
}
function operatorFunc(e) {
    console.log("Number pressed", e.target.innerText);
    console.log("State", state);
    if (state == 1 || state == 2 || state == 4) {
        state = 2;
    }
    else if (state == 3) {
        alreadyNum = doOperaion(operator, alreadyNum, Number(displayNum))
        displayNum = alreadyNum;
        state = 2;
        display();
    }
    operator = e.target.innerText;
}
function operatorEqual() {
    if (state == 1 || state == 2 || state == 4) {
        return;
    }
    else if (state == 3) {
        alreadyNum = doOperaion(operator, alreadyNum, Number(displayNum))
        displayNum = alreadyNum;
        state = 4;
        display();
    }


}
function operatorC() {
    displayNum = "";
    alreadyNum = 0;
    state = 1;
    operator = "";
    display();
}
//bind to each button:
let numbuttons = document.querySelectorAll(".Buttons button");
numbuttons.forEach((button) => {
    button.addEventListener("click", numberFunc);
});
document.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key >= "0" && key <= "9") {
        let btn = document.querySelector(`#n${key}`);
        btn.dispatchEvent(new MouseEvent("click"))
    }
});
document.addEventListener("keydown",(e)=>{
    let key = e.key;
    if(key ==="Backspace") {
        displayNum = displayNum.slice(0, -1);
        display();
    }
    if(key ==="Enter"){
        //TODO
    }
});
let operatorbuttons = document.querySelectorAll(".Operators:not(#equal):not(#clear) button");
operatorbuttons.forEach((button => {
    button.addEventListener("click", operatorFunc);
}));
let equalbutton = document.querySelector("#equal");
equalbutton.addEventListener("click", operatorEqual);
let clearbutton = document.querySelector("#clear");
clearbutton.addEventListener("click", operatorC);