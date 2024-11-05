# Awesome Calculator
操作逻辑：
全局变量：
let displayNum = ""; 
let alreadyNum = 0; 
let operator = ""; // 运算符
let State = 0； 状态机
let displayer = ducument.querySelector()...
状态：
1. 在输入第一个数字
2. 输入完毕第一个运算符
3. 在输入第二个数字
4. 一次计算完成。

# 状态切换逻辑：
阶段1：数字输入+等于号不影响状态，展示到位置即可，一旦输入运算符，进入状态二
阶段2：此时还有一丝机会，持续输入运算符不改变状态，一旦输入数字 进入状态三
阶段3： 数字输入不改变状态，一旦输入运算符 或者等于号 计算出结果，进入状态4
阶段4：输入数字展示，并且进入状态1。按下运算符进入状态2

# 数字按钮：
func(){
    if state 1 || state 3:
        displayNum += button.text;
        display();//通知显示新数字
    if state 2:
        alreadyNum = displayNum;
        displayNum = button.text;
        state = 3;
        display();
    if state 4:
        displayNum = button.text;
        state =1;
        display()
}
# 运算符按钮(=不包括)：
func(){
    if state 1 || state 2 || state 4:
        operator = button.text;
        state = 2;
    if state 3:
        doOperator(operator,alreadyNum,displayNum)
        dispalyNum = alreadyNum
        operator = button.text;
        state =3;
}
# = 按钮：
func(){
    if state 1 || state 2 || state 4:
    return;
    if state 3:
        doOperator(operator,alreadyNum,displayNum)
        display = alreadyNum;
        state =4;
        display();

}
# doOperator()函数：:
func(operator,num1,num2){
    switch(operator){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "error";
    }
# display():
func(){
    displayer.innerHTML = displayNum;
}
# 加数字逻辑
