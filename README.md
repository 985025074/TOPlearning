# TOPlearning
仅作为个人学习记录，不保证正确，可读性。
#### foudation finished - 2024年11月5日 too long!!!! 
  
celerate for next target!
 
----

# 23点12分 2024年10月12日

`<!DOCTYPE html>` 用以指示文档类型为html

----
`<html lang = "en">` html 根元素 lang 指定语言

`</html>`

----
`<head>`
`    <meta charset = "UTF-8">`
`    <title>TOP</title>`
`</head>`
head 放置一些重要元素，指定编码集合
下面再来一个`<body>`元素

## WSL 打开 方法：
explorer.exe 网页

# 自带模板
! 输入既可以自动补全
# 22点12分 2024年10月14日
# 段落必要性
默认行为是 多个空格会被压成一行
`<p></p>`创建段落
# 标题 
`<h+number></h+number>` 1-6 对应标题
# 强调
`<strong></strong>` 加粗
# 斜体
`<em></em>` 斜体
# other indexes
https://www.w3schools.com/html/html_formatting.asp

# 列表
## 无序列表 unordered list
```html
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul>
```
## 有序列表 ordered list
```html
<ol>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ol>
```
# 锚 标记(anchor)
like
```html
<a href="https://www.theodinproject.com/about">about the odin project</a>
```
## 进一步完善
```html
<a href="https://www.theodinproject.com/about" target="_blank" rel="noopener noreferrer">About The Odin Project</a>
```
target 指明 打开位置：——blank 新窗口打开，——self 当前窗口打开
rel 的是为了安全性，noopener 防止打开连接访问原始网页面
norefer 不让对方知道。一些新浏览器自带
## 相对跳转
```html
<a href="./odin-links-and-images/about.html">About</a>
```
加上./避免一些错误
# img 元素
属于void 元素不需要结束标签。src 指定路径，alt 指代替代文字，height/width 图片大小.
几种图像格式：https://internetingishard.netlify.app/html-and-css/links-and-images/#image-formats
# 尝试第一个项目
暂时结束今天work
# 19点18分 2024年10月16日
忏悔
# CSS基本语法
选择器 {
    属性：属性值;
}
# universal selector
*{

}
# type selector
typename{

}
# class selector
.classname{

}
类class 属性：
class ="classname1 classname2".
空格分隔类名
# idselector
id 每个标签只能有一个 不准重复
#idname{

}
# 选择器可以有多个通过逗号隔开（表达或的意思）
like .read,.unread{

}
选中read 或 unread 类。
# 表达且的意思，不用逗号
# 后代组合器 descent 
选择嵌套于内部的元素 通过空格隔开

# 一些基本CSS 属性
颜色：
color 文字颜色。
background-color 背景颜色。
颜色 可以有多种值：
1. 具体的 如 red  transparent
2. 十六进制值 like #FF0000
#RRGGBB
不透明度：
在后面加上值 2位
#ff0000+ 不透明度
3. RGB值 like rgb(255,0,0)
或者是百分比值 like rgb(100%,0%,0%)
4. HSL值 like hsl(0,100%,50%)
字体：font-family
说明详见：https://www.w3schools.com/Css/css_font.asp
格式是：
font-family: "Helvetica Neue", Arial, sans-serif;
其中带引号的叫做： a font famlily
不带引号的是generic family name
有多个用逗号隔开的原因是会逐个选择，如果前一种不被支持。
字体大小font-size:
单位px
font-weight 影响粗细：
可以是具体的如bold或者 具体值
text-align 对齐方式： 如ceneter
图像大小调整：
使用auto 自动按比例缩放like:
img{
    height : sth;
    width : auto;
}
自动根据sth q调整
如果不指明大小宽高可能会突变。

# 引入 CSS external 
在head 内使用link 标签like:
```html
<head>
    <link href = "path" rel = "stylesheet">
</head>
```
rel 是必须的。
# 引入CSS 内部 internal 
```html
<head>
    <style>
        CSS code here
    </style>
</head>
```
# 引入 CSS内联
like
````html
    <div style ="name:value;"></div>
````
内联优先级很高
# cascade 层叠性 优先级
id 优先于类 优先于普通的类型
。当没有具有更高特异性的选择器的声明时，具有较多相同类型选择器的规则将优先于具有较少相同类型选择器的另一个规则。
组合符号 例如：
* + - ~ 空格 不改变特异性

# 继承性：
子元素继承父元素的部分属性，例如的属性有：基于版式的。
我们自己指定的儿子属性优于继承而来的属性

# 别的都一样 那么就是最后的说了算。

# CSS 盒子模型
padding  具体内容 文字 扩张开的距离
border padding外面包的一层
margin 隔离开CSS元素.相邻元素会collapse;
box-sizing: border-box:
默认情况下 修改width 和 height 属性指的是内容的大小，使用这个会使得大小为整个（包含border + padding + content）的大小。
# margin 属性修改
.box {
    margin: <margin-top> || <margin-right> || <margin-bottom> || <margin-left>
}</margin-left></margin-bottom></margin-right></margin-top>
因此，如果仅定义一个值，则会将所有四个边距设置为相同的值。如果声明了三个值，则为 margin: [top] [left-and-right] [bottom]; 。
或者使用：
.box {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}
也可以类似上面图片一样使用auto 大多数情况下相当于0
**在指定宽度下可以实现居中 居左 居右  margin-left:auto 左边拉满**
margin: 0 auto; 是一种常见的 CSS 考虑布局的方法，尤其用于水平居中对齐块级元素。在这里，margin 属性的各个值的含义如下：

0：这是上方和下方的外边距（margin-top 和 margin-bottom），设置为 0 意味着该元素的上边距和下边距没有外边距，不会有额外的空间。

auto：这是左右的外边距（margin-left 和 margin-right）。将左右的外边距设置为 auto 允许浏览器自动计算并分配这些外边距的值，从而使元素在其父容器中水平居中。
**负边距可以拉近**
# 12点17分 2024年10月21日
# 重要属性之display
block 另起一行 inline 内联。
inline-block 内联 但是可以用padding + margin.
# normal flow
block 产生新行，宽度填充父空间，高度相当于内容
inline 不产生新行 溢出时会。
div 是块容器，span是内联容器。
# inline-block 
与 display: inline 相比，主要区别在于 inline-block 允许设置元素的宽度和高度。此外，使用 display: inline 时，上下边距(margin)和内边距(paddings)不会被遵守，而使用 inline-block 时它们会被遵守。
不会遵守的意思是:
inline padding效果是有的 但是heightwidith 按文字大小。
inline-block padding 效果是有的 但是heightwidith 按整个大小，外面文字进不来.包括上下
# 22点28分 2024年10月22日 抓紧时间！！！珍惜时间！！
# flexbox
https://internetingishard.netlify.app/html-and-css/flexbox/index.html  
display: flex;this is called flex container.
所有在其内部元素称为flex item.
flex item can be flex container themselves.
# 居中元素：
  .menu-container{
    display: flex;
    justify-content: center;
  }
区别于使用margin 的 auto 方式 这种方式不是使用正对元素 而是在容器上操作。
如果我们需要单独操作子类，使用align-self 去覆盖他.
**重要**
我们使用justify-content来控制组沿主轴的分布，并使用align-items来沿横轴单独定位每个项目。这是我们用 Flexbox 管理布局的两个主要属性。 也就是说 content是主轴上的所有元素（每一行独立.） 一起参与排序。
items 则是在各自的福州上面排序。
align-content:同一行元素一起按福州排序。
align-items:同一行元素在各自的福州上排序
# 为什么没有align self?
烤肉串 鸡尾酒的比喻：
https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/
但是可以有align-content;控制多个行flex环境
# 可用属性：  
flex-start   
flex-end  
center   
space-between  顶到左右两边 尽可能远离但是均匀分配  
space-around 多个项目均与分配  
# flex 只会管辖一级子类
也就是不会参与子item里的item
# align-items 垂直方向的对齐（biaxis）
flex-start
...end
cneter
stretch 无视内容 拉伸 填满上下高度
baseline
# flex-wrap 允许小于min-width的时候换行
防止溢出
# flex-direction
默认为row 水平向右
column 垂直向下
还有-reverse版本
# flex-order
  .first-item {
    order: 1;
  }
  
  .last-item {
    order: -1;
  }
  操纵子类的顺序。可以跨行列工作
  order 所有元素默认为0
  越小拍在越前面。
# flex-item
flex:int 调整缩放权重
flex initial
回归height width 大小
否则会被忽略
flex:1 实际上是shorthand.
flex: 1等于： flex-grow: 1 、 flex-shrink: 1 、 flex-basis: 0 。
flex grow 放大因子。
# flex shrink 缩小因子:
  当所有flex item bigger than father 时候 所有有的都会缩小。
  收缩比例 优于grow。
  这里需要注意的一个重要含义是，当您指定flex-grow或flex-shrink时，flex 项目不一定遵循您给定的width值。在上面的示例中，所有 3 个 div 的宽度均为 250px，但当它们的父级足够大时，它们会增长以填充它。同样，当父级太小时，默认行为是它们缩小以适应。这不是一个错误，但如果您没有预料到它可能会造成混乱。
  意思是说width height 属性不是单独起作用的
  祝天涯 还有个最小大小：min-width:
  对于包含内容的设置为内容的大小，所以内容将会有可能溢出。


  # flex basis 起始大小
  如果flex-basis 为0（默认值）那么项目宽度将被忽略。使用auto 可以使得flex 检查项目大小 以影响前两个指标。
  速记flex： basis 是0 否则是auto
  # flex:auto
  相当于它相当于flex-grow: 1 、 flex-shrink: 1和flex-basis: auto
  在实践中，您可能不会对flex-grow 、 flex-shrink或flex-basis使用复杂的值。一般来说，您最有可能使用像flex: 1;这样的声明。使 div 均匀增长，并flex-shrink: 0来防止某些 div 收缩。
  在一些情况下 很重要 如果盲目使用flex:1 可能导致塌缩
   flex-basis指的主轴上的大小。当主轴为column的时候，那么就是上下方向的大小 也就是height 那么 所以height 大小会被忽略从而干扰发生坍缩
# flex 中的auto margin
产生一种类似嵌套div 的效果：
  .signup {
    margin-left: auto;
  }
# 00点23分 2024年10月27日
flex cheatsheet:
https://flexbox.malven.co/
# 23点49分 2024年10月28日
# gap 提供边距
flex 的一项非常有用的功能是gap属性。在 Flex 容器上设置gap会在 Flex 项目之间添加指定的空间，类似于为项目本身添加边距。 gap是一个新属性，因此它尚未出现在许多资源中，但它在所有现代浏览器中都能可靠地工作，因此使用安全且非常方便！将gap: 8px添加到上面的居中示例中会产生下面的结果。
# width in flexbox(display:flex)
超出大小将会被缩减 flow_shrink
每一行成为一个新环境！
# 10点17分 2024年10月29日
# usefull example of flexbox
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
# 页脚设计
利用没有设置flex1 默认值为0 1 auto的特点，设计非foot 元素为1 从而成为唯一能够增长的元素，把另一个元素寄到边上
# 处理部分元素自带的padding + margin like ul ol
# 我们通常不使用 flex: 0 0 auto
因为我们需要借助flex 调整大小，取而代之我们用width min 和max限制
# 简单总结：
block normal flow 布局
从上到下
flex 按轴布局。
# 项目学习：
字体获取：https://fonts.google.com/selection/embed
font-size调整字体大小
font-weight调整粗细，注意有的宽度不被允许
# anchor 美化：
a{
    color: #f9faf8;
    text-decoration: none;
    flex-shrink: 0;
}
显示边框：
/* for develop use */
div{
    background-color: rgba(255, 0, 0, 0.416);
    border-color: rgb(0, 0, 0);
    border:1px solid;
}
按钮设计：
.signup{
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-top:10px;
    margin-bottom: 50px;
    margin-right: auto;
    background-color: #3882F6;
    color:white;
    border-radius: 20px; 
    
}
# 一些基本值
flex：0 等价于0 1 auto 没设置的默认值
flex:1 1 0
# 把图片放在div：
.window{
    width: 200px;
    height: 200px;
    border-radius:40px;
    border-style: solid;
    border-width: 5px;
    border-color: rgb(7, 118, 255);
    display:flex;
    overflow: hidden; //超出就隐藏
    justify-content: center;
    align-items: center;
}
.window img{
    width: 100%; 
    height:auto;
    object-fit: contain;
}
# object-fit:
fill:拉伸以填充会失真 
contain:保持宽高比填充  为了不被建材，留下空白 
cover:保持宽高比填充 不介意超出 
# object-position：
指定位置：left center right top bottom 

# 17点29分 2024年10月31日
javascrwipt 基础语法：
外部导入：
<!-- <script src="javascript.js"></script> -->
变量命名：
let sth = sth;
常量命名
connst sth = sth;
严格模式：
"use strict"；
提供对于 num = 5；这样不声明的报错。
大写与非大写常量，类似于C++ 中define的和const 的区别。
# No type
属于是无类型语言。
精度：小数始终是double 类型。
int 支持15为精度
同样存在 不一定能精准表示的问题
# 加法：
数字和字符串 统一成字符串. 可使用Number()函数转换字符串到数字。（revser 运算 String()）
或者使用一元加号+号。

注意顺序 从左到右
但是很奇怪的是 其余运算不会发生这种转换。例如除法剑法惩罚，都会变成数字。
# 特殊运算结果：
NaN
Infinity
16进制 0x开头
# 转换进制
name.toString(2) 二进制
# typeof 输出类型
数字都是number  无论整数还是小数
# 四舍五入
to fixed.
# 严格等于 严格不等于
=== ，!== 会判断类型
# 支持使用逗号运算符
# null undefined值
null 是值，而undefined表示还未赋值(like void)
^ typeof object |^ typeof undefined
数值转换变换0    | 数值转换为NaN
# 空白字符如\t\n 转换成0
# strings
三种 单引号 双引号 反引号
前俩中差不多。
反引号支持嵌入javascript
let c = `${a}${b}`
支持换行而不是用\n转义
基本方法：
访问字符：[] 或者 .at() <-支持附索引
要注意string 默认是**只读的** 两者都不可以改变属性(下面所有函数都是，返回新的字符串)，其中at()抛出异常 like C++
# 切片：
slice(start, end) 如果只有一个元素 则从一个元素到末尾 支持夫索引
substring(start, end) 不支持夫索引
substr(start, length) 
# 大小写转换
toLowerCase()
toUpperCase()
# 字符串连接
.concat(other string) like +;
# 两侧删除空格
.trim()
.trimstart()
.trimend()
# 两边填充直到达到目标长度
padStart(targetLength, padString)
padEnd(targetLength, padString)
# 重复
sth.repeat(count)
# 替换
.replace(old,new);
第一个匹配的old 将会被换成new
支持正则表达式，这里不再深入研究。
# 全部替换
replaceAll(old new)
# 分片 
.split(separator)返回字符串数组
# 文档
https://www.w3schools.com/js/js_string_methods.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
# 逻辑运算符中的特别之处：
除了常用的||可用于if 。
1. 可以用来获取最后一个真值，或者最后一个假值。
2. 短路功能
&& 同理
Boolean 类型。
所有算作假的：false undefined null  0 NaN或空字符串 ( '' ) 
# if else + swicth
完全跟C 语言 一样
也有?运算符
# F12调试 
.hov 添加伪状态
.cls 添加规则
chrom 调试工具：https://www.theodinproject.com/lessons/foundations-javascript-developer-tools
# 13点46分 2024年11月2日 
我觉得最好用还是console

大概有如下几种放啊:
console.warn()
console.error()
console.info()
console.log()
console.assert()

console.clear()
console.log()
console.dir()

# 组内遍历：
console.groupCollapsed(name)
putout message here
console.groupEnd(name)

# 计数器
console.count(label name)

# 计时器
console.time("name);
console.timeend(name)

# 函数的基本格式
function functionName(parameter list...){

}
- 支持默认参数
- 支持匿名函数对象创建
- like C++'s lambda create method:
()=>{}; no return so it is like this.
if it has only one parameter,you can omit brackets
if the main function has only one statement,you can omit the curly brackets.{}
# definition confliction
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
computer decide the first.js as the final one.
the parameter is the viarible in the brackets.
the argument is the value passed to the function.

# Default arguments evaluation:

if the default argument contains a exression, it is evaluated when the function is called and the value is missing.
# return nothing (return;)
is equivalent to "return undefined;"
# cross-line return
add brackets.or it is truncated.:
return
 (some + long + expression + or + whatever * f(a) + f(b))
return;
 (some + long + expression + or + whatever * f(a) + f(b))

 # function declaration  and function expression:
 (区别于C++ 这里的declaration 实际上给了 definition)
 function expression:
 创建完毕之后才可以调用：
 函数表达式在执行到达时创建，并且仅从那时起才可用。
 function declaration:
全局可用
并且支持函数内部定义函数：C++ 不行！ 不过这样是类内允许访问的。
# js 中的stack
先创建内存区，然后在分配。 2阶段
包括global级别 和 function级别
# 参数传递说明：
在 JavaScript 中，函数参数的传递方式取决于数据类型：

基本数据类型（如：number、string、boolean、null、undefined、symbol）是通过值传递。这意味着在函数内部对参数的修改不会影响外部的变量。

引用数据类型（如：对象、数组、函数）是通过引用传递。这意味着在函数内部对参数的修改会影响外部的变量，因为传递的是指向原始对象的引用。
注意 不完全是引用，我觉得用指针的行为更好解释
# 关于数组
声明格式 const arr = [1,2,3];
（或者使用new Array(1,2,3)，需要注意 当new （single）变量的时候意思是创建single个undefined 而不是有一个40元素的数组）
const 的意思是引用为常量，不能修改。
数组本省不能赋值为另一个数组。
越界访问返回undefined
## 接口：
toString()
转换成字符串
.length()
获取长度
.foreach(func)
use func foreach every element in the array.
.map()
.filter 过滤
返回一个新的数组，使用func对每个元素进行操作。
.push(elemt)
添加元素 逆操作 .pop()
.join(char) like toString 使用指定字符连接 默认是, 想成为空白使用''
添加到首位：
unshift()（push_front 和 pop-front）
shift() 移出首位

concat() 连接元素，但是返回新的数组 不是改变原数组
splice:
arr.splice(start[, deleteCount, elem1, ..., elemN])
插入 删除 替换元素
start开始，删除deletecount个 然后插入elem,注意，这是原地操作。改变原数组
slice:
arr.slice([start], [end]) 左闭右开，返回新的数组。
concat 拼接：
相当自由  arr.concat(args)
通常，它只复制数组中的元素。其他对象，即使它们看起来像数组，也会作为一个整体添加：[ 1, 2, 3, { '1': 1 } ]
但是如果一个类似数组的对象有一个特殊的Symbol.isConcatSpreadable属性，那么它会被concat视为一个数组：它的元素会被添加：
args支持数字类型，以及数组
> arr
[ [ 0 ] ]
> arr.forEach((a)=>a[0]+=1);
undefined
> arr
[ [ 1 ] ]
forEach 完整句法：
arr.forEach(function(item, index, array) {
  // ... do something with an item
});
indexof lastindexof 分别代表最先，最后的index，查找用,找到返回索引，否则-1：
arr.indexOf(item, from) – 查找从索引from开始的item ，并返回找到它的索引，否则-1 。
includes 确定元素是否在 返回true false:
let arr = [1, 0, false];

alert( arr.indexOf(0) ); // 1
alert( arr.indexOf(false) ); // 2
alert( arr.indexOf(null) ); // -1

alert( arr.includes(1) ); // true
** includes 可以正确处理Nan 而indexof 不行，意味着indexof nan 永远找不到，而includes可以显示正确的结果。**
.find(): other alike:findindex,findlastindex
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
.sort():
就地排序。 按字符串序比较。 数字亦是如此。
除非我们定义一个： 注意 这个顺序升序默认实现！！！！！ 不要搞bool
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

let arr = [ 1, 2, 15 ];

arr.sort(compareNumeric);

alert(arr);
宽泛的类型转换使得 上述函数可以只用a-b 这样简单的实现
resverve()
同样注意，就地反转
split,join：切分合并
reduce,reduceright 缩减
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
Fisher-Yates shuffle 。
sum 和 reduce 可以用来创建对象
# typeof arry is obj. Use Array.isArray()
# this 调用成员函数：
let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length); // 2
alert(soldiers[0].age); // 20
alert(soldiers[1].age); // 23


# 更多接口见：https://www.w3schools.com/js/js_array_methods.asp https://javascript.info/array-methods
typeof arr is object
# 对象区别
对象定义方式 const obj = {name: "John", age: 30, city: "New York"};就像字典一样 使用.xxx访问
判断 .isArray()方法 。
# DOM 是html 的真实印象
> CSS 子选择器 只选择直接一级的
句法：
elemetn.querySelector(selector) 选择第一个
elemetn.querySelectorAll(selector) 选择全部.返回一个nodeList,可以Array.from()转化为数组
或者byid
getItembyID
#  元素创建：
doucument.createElement(tagname,options) 创建元素
# 插入到具体位置：
parentNode.appendChild(newElement) 添加到末尾。
parentNode.insertBefore(newElement,referenceElement) 插入到referenceElement之前。
# 元素删除：
parentNode.removeChild(element) 删除元素
# 在JS 中访问 CSS属性 ：
// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");
注意有横线的要这样：
// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];
# 添加属性:
// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
# 改变class 属性:
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");
# 添加文字内容：
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";
# innerHTML:
内嵌HTML 有可能造成问题！js注入！
# js 位置：
最好放在后面，保证页面加载完成后执行
或者用defer。在后台下载脚本，在DOM 准备好之后执行，并且保证顺序。
不同于img 这种也有src 的 这种往往会自动异步执行
async 加载完就马上执行 所以才会无法保证顺序
defer 等待html 执行完毕。并且保证顺序
<!-- <head>
  <script src="js-file.js" defer></script>
</head> -->
还有个属性是async，不保证顺序（动态脚本，在JS中动态加载script是这种）
https://javascript.info/script-async-defer#defer。
# Events 事件处理：
法1：直接在html标签上处理，像：on<event> onclick onmousexxx
法2：通过在javascript中绑定事件处理函数，可以处理多个事件。
sth.onclick = functionl
法3 a容器类的addEventListener()方法，可以处理多个事件。
element.addEventListener("click", function(){});
回调对象可以包含参数。一个**event**本省的引用。（e.target）
click 点击
dblclick 双击
keydown 按键
keyup 按键
其余的：https://www.w3schools.com/jsref/dom_obj_event.asp
# event 模型：https://www.javascripttutorial.net/javascript-dom/javascript-events/
bubble：从下往上 进行处理 具体的函数调用
capture：从上往下 可以拦截 
DOM level2 事件流模型三个阶段：
捕捉 目标对象 冒泡
相关属性：
参见 上面tutorial
sopPropagation 在bubbling 中进一步组织

# 特殊事件：
DOMContetnload:加载完html 且DOM 树构建完毕。 然而img and stylesheet 还没加载。
load 挖宝气压变化在挖宝
beforeunload:推出之前 可以用俩提示您是否要跳转，防止误触：
unload 清理资源
    <script>
        addEventListener('DOMContentLoaded', (event) => {
            console.log('The DOM is fully loaded.');
        });

        addEventListener('load', (event) => {
            console.log('The page is fully loaded.');
        });

        addEventListener('beforeunload', (event) => {
            // show the confirmation dialog
            event.preventDefault();
            // Google Chrome requires returnValue to be set.
            event.returnValue = '';
        });

        addEventListener('unload', (event) => {
            // send analytic data
        });
    </script>
# 鼠标相关时间检测：
mousedown mouseup click 三个按顺序发生 分别代表按下 释放和最终触发。
如果在某个元素上按下鼠标按钮，请将鼠标光标移离该元素，然后释放鼠标按钮。唯一的mousedown事件在元素上触发。
同样，如果您按下鼠标按钮，将鼠标移动到元素上，然后释放鼠标按钮，则元素上只会触发唯一的mouseup事件。
以上情况此时click 不会触发：
测试:
  <!-- <button>Click me</button>aaaaaaaaaaaaaaaaaaa

  <script>
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
      console.log('Button clicked!');
    });
    btn.addEventListener('mousedown', () => {
      console.log('Button mousedown!');
    });
    btn.addEventListener('mouseup', () => {
      console.log('Button mouseup!');
    });

  </script>>
</body> -->
# doubleclick:
 mousedown
 mouseup
 click
 mousedown
 mouseup
 click
 dblclick
 需要从上往下经理这么多才能触发dbclick,不要同时使用dbclick + click
 # mousemove 检测移动时间：影响性能
 # mouseover mouseout 移入和移出
 # mouseenter 和moseleave 跟上面类似，但是子类不会bubble。
 # 鼠标事件的event： 
 还有一个button属性 可以检测是那个按键按下的：
         btn.addEventListener('mouseup', (e) => {
            let msg = document.querySelector('#message');
            switch (e.button) {
                case 0:
                    msg.textContent = 'Left mouse button clicked.';
                    break;
                case 1:
                    msg.textContent = 'Middle mouse button clicked.';
                    break;
                case 2:
                    msg.textContent = 'Right mouse button clicked.';
                    break;
                default:
                    msg.textContent = `Unknown mouse button code: ${event.button}`;
            }
        });

# 也可以检测shift这类按钮的按下与否，详细请查看：https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/
# 获取按下时的屏幕坐标：
screenX screenY  X->
Y
|
V
# 键盘事件族：（鼠标也可能触发）
keydown 按下时候触发：按下时候持续触发。
keyUp:释放触发
keypress 字符触发：按下时候持续触发。
类似鼠标 一次按下：
keydown
keypress
keyup
# 键盘event 对象重要属性：
key codekey
key属性返回已按下的字符，而code属性返回物理键代码。
例如，如果按z字符键， event.key返回z且event.code返回KeyZ 。
# 事件委托：
借助父对象类处理子对象
let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked');
            break;
        case 'report':
            console.log('Report menu item was clicked');
            break;
    }
});
# 人工触发事件：事件分发构造：
let clickEvent = new Event('click');
后面可以跟对象like:（下面是默认）

{ bubbles: false, cancelable: false}
分发触发事件
element.dispatchEvent(event);
如何判断用户触发还是代码？
isTrusted:true 表示由用户触发，false 表示由代码触发。https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/
Event 是个基类，使用MouseEvent、KeyboardEvent等子类。可以提供更多属性传入：
# 自定义事件：

let event = new CustomEvent(eventType, options);
let event = new CustomEvent('highlight', {
    detail: {backgroundColor: 'yellow'} //自定义event 属性内核值

});
这种貌似只能用dispatcheventfire 触发.
触发顺序 按我们的绑定顺序
# let 对于对象默认创建引用 js 中大部分操作都是钱拷贝。
注意 嵌套对象 由于是引用 所以是会共享的（浅拷贝原因），深拷贝的方法： structuredClone()。或者const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
# 错误：
您提供的示例在预期输出中存在错误。在 JavaScript 中，当您将一个对象分配给另一个变量时，这两个变量都引用内存中的同一对象。因此，通过一个变量修改对象将反映在另一个变量中。
`let person1 = { name: "Shameel", age: 29 };
# 展开语法：
...（ARR或者用STRING）
# 抄了 公式化
超不了 font awesome 不会
<!-- <footer class="footer">
      <p>
        Copyright ©
        <script>
          document.write(new Date().getFullYear())
        </script>2024
        985025074
      </p>
      <a href="https://github.com/985025074" target="_blank">
        <i class="fab fa-github" aria-hidden="true"></i></a>
    </footer>

    .fa-github {
    color: var(--primary-dark);
    font-size: 24px;
    transition: transform 0.3s ease-in-out;
} -->
    <div class = "foot">
        <a href="https://github.com/985025074 " target="_blank">
            Copyright ©
            <script>
              document.write(new Date().getFullYear())
            </script>
            985025074
        </a>
    </div>

    .foot{
    flex:0;
    display: flex;
    justify-content: center;
    align-items: center;
}
别忘记把body 设置为100 vh + display flex
# 舒服的居中：
    <h1 style = "font-size:75px; text-align: center;">Etch-a-Sketch</h1>

# 奇怪bug：
这个问题可能是因为在画布上双击并拖动时，浏览器误认为你正在尝试选中或拖拽内容，而当拖拽的动作不符合预期行为时，浏览器会显示一个“禁止”符号（通常是一个红色的禁止图标）。可以通过以下方式来避免这种情况：

禁用默认的拖拽事件：为画布的 mousedown 事件添加一个阻止默认行为的处理程序，避免浏览器处理默认的拖拽事件。

禁用选择行为：为画布元素添加样式 user-select: none;，避免在双击时选中内容。

# 对象：
声明语法：
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax
没有python 和 C++ 那么严格：
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
key 可以不用""双引号
属性删除方法:
delete propertyname;
### 计算出属性名，而不是直接使用compute property:
加上【】
bash 
### 支持同名简写：
let user = {
  name,  // same as name:name
  age: 30
};
# 属性名陈的限制： 没有，自动转化成字符串
简而言之，属性名称没有限制。它们可以是任何字符串或符号（标识符的特殊类型，稍后介绍）。

Other types are automatically converted to strings.
其他类型会自动转换为字符
# 测试属性是否存在 ===undefiend，或者用 sth in sth(特殊情况，被赋值为undefine 只能用这个)
# 遍历键值对：
for (key in object) {
  // executes the body for each key among object properties
}

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
key 在循环内使用。
## 循环的顺序？
简短的答案是：“以特殊方式排序”：整数属性被排序，其他属性按创建顺序出现。详细信息如下。
 “integer property” :
 means "PureNumber" no any signs'
 ## 成员函数语法：
 object{
  func(){
    最简单的语法
  }
 }
 类似C++  如果不存在 使用 【】 会创建新的对象成员
 ## 构造函数语法：
 function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}
直接在this 上面设.
然后 使用 new Person("John") 创建对象。
# reduce
常见的三剑客
usagelike:
```javascript
  const arr = [1, 2, 3, 4, 5];
  const productOfAllNums = arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  console.log(productOfAllNums); // Outputs 120;
  console.log(arr); // Outputs [1, 2, 3, 4, 5]
  ```
reduce (缩减方式,初始值).
```
```
