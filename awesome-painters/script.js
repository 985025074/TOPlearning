let canvasSize = 300;
let nowSize = 0;
let canvas = document.querySelector(".canvas");
let nowMode = "normal";
let colorinput = document.querySelector(".colorinput");
let sizeinput = document.querySelector(".size");
let nowDivArray=[];
let nowColor = function(){
    if(nowMode == "normal"){
        let result = colorinput.value;
        console.log(`normal mode,choose color ${result}`);
        return result;
    }else if(nowMode == "rainbow"){
        let R = Math.floor((Math.random()*16)).toString(16)+Math.floor((Math.random()*16)).toString(16);
        let G = Math.floor((Math.random()*16)).toString(16)+Math.floor((Math.random()*16)).toString(16);
        let B = Math.floor((Math.random()*16)).toString(16)+Math.floor((Math.random()*16)).toString(16);
        let result = "#" + R + G + B;
        console.log(`rainbow mode,choose color ${result}`);
        return result;
    }
    else if (nowMode == "erase"){
        return "#FFFFFF";//white
    }

}
function clear(){
    for(let i =0;i<nowDivArray.length;i++){
        canvas.removeChild(nowDivArray[i]);
    }
    nowDivArray = [];
}
function cleanColor(){
    for(let i =0;i<nowDivArray.length;i++){
        nowDivArray[i].style["background-color"] = "#FFFFFF";
    }
}
function painter(e){
    if(e.buttons !== 1){
        return;
    }
    console.log("nowcolor"+nowColor());
    console.log("e.target.style.backgroundColor"+e.target.style["background-color"]);
    console.log(e.target.style["background-color"].R);
    if("#"+e.target.style["background-color"].R.toString(16).padStart(2, '0')+
        e.target.style["background-color"].G.toString(16).padStart(2, '0')
        +e.target.style["background-color"].B.toString(16).padStart(2, '0')
         == nowColor()){
        console.log("same color");
        e.target.style.opacity =String(Number(e.target.style.opacity)+0.1);
        return;
    }
    console.log("painter");
    e.target.style["background-color"] = nowColor();
}
function paintblock(){
    nowMode = "normal";
    clear();
    let nowSize = Number(sizeinput.value);
    let actualSize = canvasSize/nowSize;
    console.log("paintblockm");
    console.log(`actualSize ${actualSize}`);
    console.log(`nowSize ${nowSize}`);
    for(let i = 0;i<nowSize;i++){
        for(let j = 0;j<nowSize;j++){
            let newdiv =document.createElement("div");
            newdiv.style.width = actualSize + "px";
            newdiv.style.height = actualSize + "px";
            newdiv.style.userSelect = "none";
            // newdiv.style.border = "1px solid #000000";
            newdiv.style.flex = "0 0 auto";
            newdiv.style["background-color"] = "#FFFFFF";
            newdiv.style.opacity = "0.1";
            newdiv.addEventListener("mouseover",painter);
            newdiv.addEventListener("mousedown",painter);

            nowDivArray.push(newdiv);
            canvas.appendChild(newdiv);
        }
    }
   
}
document.querySelector("#clear",clear).addEventListener("click",cleanColor);
document.querySelector("#rainbow").addEventListener("click",()=>{
    nowMode = "rainbow";
});
document.querySelector("#erase").addEventListener("click",()=>{
    nowMode = "erase";
});
sizeinput.addEventListener("input",paintblock);