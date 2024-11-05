
console.log("开始任务");


console.log("继续其他任务");
const div_container = document.querySelector("div.container");
let p1 = document.createElement("p");
p1.textContent = "Hello, World!";

div_container.appendChild(p1);
p1.style.color = "red";
p1.id = "my-first-paragraph";
// 使用 setTimeout 实现延迟
setTimeout(() => {
    console.log("我刚醒来，继续任务");
    p1.style.color = "blue";
    
}, 2000); // 2000 毫秒后执行，即 2 秒
