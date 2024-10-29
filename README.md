# TOPlearning
仅作为个人学习记录，不保证正确，可读性。

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