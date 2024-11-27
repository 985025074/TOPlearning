# ships:
length:
direcion: shouldbe [0 1] like this
hp： auto cal:length
hit(){       
    hp--;
}
isSunk(){
    return true if hp ==0
}
# getNum(X,Y)
return Y*10+X
# gameboard
ships:[]
cubes:[] 0 表示空 X 表示命中 数字表示是几船 -1表示已经攻击过
survive:xx
alreadyAttack(X,Y){
    let num = getNum(X,Y)
    return cubes[num] ===-1
}
receiveAttack(X,Y){
    let num = getNum(X,Y)
    if(XY != 0){
        ships[cubes[XY]].hit()
        return true;
    }
    return false;
}
isOver(){
    if(survive ==0){
        return true;
    }
    return false;
}
# 两个棋盘
div1 div2
分别维护两个状态。
1. waitToHit
2. stop
# 随机数：
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

# logic：

先点击随机开始按钮。
开始随机生成一组
生成的指标来自预定的一个
let shipGenerate = [...]
func initial(gameboard){
    for(every i){
        let flag = true;
        while(flag)
            randomeX = getRandomeint(0,10);
            randomY = getRandomint(0,10)
            let dir = getrandom(0,3)
            dirx = direcit[dir]
            diry =...
            let i = 0;
            for(i =0;i<length){
                let nowX = ranndomX + length*dirx
                now y ==...
                if(board.cubes[getNum()]!==0){
                    break;//说明选的方向不行
                }
               
            }
            if(i==length)
                flag=false;
        
    }
}
# 对弈逻辑
点击按钮start 正式开始。
left 先move 。
左边棋盘设置为stop 右边设置为OK。
turn = 0 代表left 初始化为-1
所有绑定一个事件
click：
beingAttack(e){
    得到序号 + 字母；
    if(turn===-1)return; //说明还没开始
    if(字母===l turn===1 || 字母===r turn===0) return；//点到别处了
    let boardNow == turn==0? left:right //选择操作棋盘。

    if(boardnow.alreadyAttack)  return //return;.
    let result =boardnow.receiveAttack(X Y)

    如果被命中 boardNow.isOver?
    如果没命中 change
    if(双人模式){
        turn = turn===0?;反向
    }
    else if(电脑模式){
        turn反向。
        computerMove()
    }
}
# computerMove(){
  setTimelut(()=>{
    let randomX Y
    while(true)
        randomeX = getRandomeint(0,10);
        randomY = getRandomint(0,10)
        if(board2.alreadyAttack){
            continue;//重复了，继续
        }
        break;
    let result =boardnow.receiveAttack(X Y)

    如果被命中 boardNow.isOver?
    如果没命中 change
  },time)  
}

