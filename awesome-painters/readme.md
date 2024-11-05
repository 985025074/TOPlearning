# plan：
ok,i decide to make a copy of this:https://michalosman.github.io/etch-a-sketch/.
# 全局区保存
canvas 画布
nowMode 当前模式
nowColor 获取当前颜色的函数
nowDivArray 当前存着的div
# nowcolor模块：
nowColor(){
    if(!rainbow{
        return get now input value.
    })
    else if(!erase){
        return get random color.//check google how ?
    }
    else{
        return white
    }
}
# paintblock模块：
负责画出div，监听bar 事件，bar 一旦变化就变动div 绘画。
func(){
    
    release old Div().
    get now input value.
    calc number of each block size. by:300/input value;
    for(i=0;i<input value;i++)
        for(j=0;j<input value;j++){
            add a child to the father div.
            add to nowDivArray.
        }
}

# 着色 由每个div 内部函数自己负责
用mousedown监听：
paint(e){
    e.target.style.backgroundColor = nowColor();
}
# clear 模块：
for every div in nowDivArray{
    e.target.style.backgroundColor = nowColor;
    background-color:white;
}