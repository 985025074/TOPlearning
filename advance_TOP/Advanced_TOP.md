# ement
https://docs.emmet.io/cheat-sheet/
强大的缩写：
支持输入html名自动生成两边。
支持CSS书写。
只输入CSS默认产生div
产生属性名：
XX[属性名：属性值]
支持惩罚！！子类
{} 指示内部文字
$自动跟随数字
+ 连接同级
^跳出 （或者用括号来限制！）

remove tag:
ctrl+k  .roboto-regular {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-style: normal;
  }
wrap ：
ctrl+shift+a
可以实现，包括光标所在内容到最里层。
或者实现自动包叠多行，使用*，like ul>li*
或者改变属性出现位置 ul>li[title = $#] //$#是原内容的占位符
末尾带|t 自动删除列表项
# ement 实现机理
有一个snippet.json文件，里面详细规定了该展开成什么。
# 隐式缩写：
.content -> div
ul ol > li
# scalable vector graphics: SVG
xmlns - 代表“XML 命名空间”。这指定了您正在使用的 XML方言。在我们的例子中，该方言就是 SVG 语言规范。如果没有它，某些浏览器将无法渲染您的图像或无法正确渲染图像。
# svg viewbox:
viewbox: minx miny width height.
# 嵌入方法：
<!-- <img> 或者 background-img:url -->
不要inline!
# SVG库
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-svg
# 改变SVG颜色：
https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element
# 表格
table:
tr
包裹每一行 table row
每一列：table data
特别强调th
# rowspan colspan 
跨越多少行，合并单元格用
# 给列指定样式
<!-- <table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup> -->
  like this
  也可指定span
# 表格的完整结果
thead
tbody 隐式添加的
tfoot 隐式CSS至少包括置于底部
give CSS hooks
# thead tbody 默认有间隙：
use-this->
<!-- table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid #999;
  padding: 0.5rem;
  text-align: left;
} -->
# 重置表元素default type:
```CSS
table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```
还有一种MeyerReset.
# zebra striping
tbody tr:nth-child(odd) {
  background: #eee;
}
# 高亮的实现:
```CSS
<tr class="highlight">
  ...
</tr>
```
对于列
```CSS
<table>
  <col>
  <col>
  <col>
  <col>

  <thead>
     ...

</table>
```
但是这不如行上的优先级高，因为：col 率先倍加载。
td:nth-child(2),
th:nth-child(2){
  background: yellow;
}
悬停高亮：
td:hover { /* th:hover also if you wish */
  background: yellow;
}
tbody tr:hover {
  background: yellow;
}
高亮列，再看看：https://css-tricks.com/complete-guide-table-element/
真JB 烦 有空再看。
# 恢复默认浏览器格式：
.article :where(h1, h2, h3, h4, h5) {
  all: revert;
}
# CSS 百分比指的是width = 100%父元素的100
# 重置的说明：https://www.joshwcomeau.com/css/custom-css-reset/
# 15点39分 2024年11月9日
CSS 中的单位。
绝对单位：始终用px。像素级别单位。
相对单位：em rem 
em 跟踪父元素的相对大小。
rem 跟踪根元素：
如果元素的font-size 16px;
4em = 64px
推荐使用rem
# 视口单位
vh vw =1%
# 推荐使用方式：
字体使用rem 
其余使用px；
如果出现破坏情况，使用rem
# 字体的一些特殊效果：查看：
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles
# backgroundc-color等一些特殊效果，查看
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties
# 选择器：
> 子类一级选择
+ 同级选择，延后一个
~ 同级选择，后面所有兄弟选择器
# CSS 特异值的计算
查看图片https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/01/specificity-calculationbase_rhrovi.png?w=570&ssl=1
https://css-tricks.com/specifics-on-css-specificity/
最前面的代表inline style  inline 具有最高优先级
# ！important 规则
附加 CSS 属性值的!important值是自动获胜。它甚至覆盖标记中的内联样式。覆盖 !important 值的唯一方法是使用稍后在 CSS 中声明的另一个 !important 规则，否则具有相同或较大的特异性值。您可以将其视为将 1,0,0,0,0 添加到特异性值。
伪类 :not() 本身不添加任何特殊性，仅添加括号内的内容。
伪元素（例如：first-line）得到 0,0,0,1，不像它们的伪类兄弟得到 0,0,1,0
# 伪类选择器(0010)
伪类是一个选择器，它选择处于特定状态的元素，例如它们是其类型的第一个元素，或者它们被鼠标指针悬停在其上。它们的表现就好像您已将类应用到文档的某些部分一样，通常可以帮助您减少标记中多余的类，并为您提供更灵活、可维护的代码。
## 举例：
:focus 焦点选择的元素
:hover 鼠标悬停的元素
:active 被激活的元素
：root 很大程度上是html，但是特异性更高一点
:first-child和:last-child将匹配第一个或最后一个同级元素。同样， :empty将匹配根本没有子元素的元素，而:only-child将匹配没有任何同级元素的元素。
对于更动态的方法，我们可以使用:nth-child 。这是一个灵活的伪类，具有几种不同的用途。
nth-of-type是几个同类的里的第几个，而nth-child是所有子元素里的第几个（包括非同类
https://stackoverflow.com/questions/9313769/nth-of-type-vs-nth-child）。
### nth_child()
```CSS
  .myList:nth-child(5) {/* Selects the 5th element with class myList */}

  .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  .myList:nth-child(3n + 3) { /* Selects every 3rd element with class myList, beginning with the 3rd */}

  .myList:nth-child(even) {/* Selects every even element with class myList */}
```
# pseudo-elements 伪元素(0001) 两个冒号

::marker允许您自定义<li>元素的项目符号或数字的样式。
::selection允许您在用户选择页面上的文本时更改突出显示。
::first-letter和::first-line允许您（您猜对了！）为某些文本的第一个字母或第一个行提供特殊的样式。
::before和::after允许我们使用 CSS（而不是 HTML）向页面添加额外的元素。使用它以各种方式装饰文本是一种常见的用例。
# 属性选择器（0010）
[]
type[]
允许键值对
[kv]
[key=value]

[attribute^="value"] - ^=将从头开始匹配字符串。

[attribute$="value"] - $=将从末尾开始匹配字符串。

[attribute*="value"] - *=通配符选择器将匹配字符串内的任何位置。
# 23点49分 2024年11月9日 CSS 定位：
# 默认都是static
# relative 相对定位
作用：
四个参数会起作用：
top、bottom、left、right。
relative to what? father element. 相对于文件流的位置
absolute：
不一定相对于父元素，而是相对于第一个非static 的父级别元素。 
# fix 相对于view port 定位。从文件流中移走
# sticky 定位。同样移走 不脱离文件流
是static和fixed的结合。
滚动起来，超出时是fixed（不会超出父元素），正常情况下是static

https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/
# position 的精彩用例：漂亮的底图案效果 + 跟随的导航栏
https://www.youtube.com/watch?v=MxEtxo_AaZ4&t=2s
使用了 -top来使得图片露出一个角。
使用了overflow-x:hidden隐藏此时的滚动条。
使用了 z-index-1置于底部。
# 注意 非static 元素会默认显示再顶端。
# background 常用属性：
body{
    background-image: url(background.jpg);
    background-repeat: no-repeat;
    background-position: center;//图像居中
    background-attachment: fixed;//不随页面滚动
    background-size: cover;
}
# 视频背景
```html
https://www.w3schools.com/howto/howto_css_fullscreen_video.asp

```
# 09点45分 2024年11月10日
CSS func:
calc 最基本的计算
常用来制作动态的文字大小。
max,min
## 用例：
适当宽度的width：
p {
  width: clamp(45ch, 50%, 75ch);
}
占据大部分内容的content：
.content {
  height: calc(100vh - 60px);
}
流畅的大小变动
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}
自动调整的header：
footer {
  --contentWidth: 400px;
  
  background: lightcoral;
  padding: 2rem max(2rem, 50vw - var(--contentWidth) / 2);
}
## CSS 变量用法：
var(name,fallback);
使用的值来自哪？
负极最近的值。
用两个破折号--不是@property定义的自定义属性始终继承其父级的值。
## property 语法：
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}
每一行的意思：syntex 表示这个值怎么样才是合法的。（不合法就会变成默认值）
inherit 表示是否可以继承，initial-value 表示默认值
## 无效值的处理：
替换成默认值。
如果有继承，先继承，然后是默认值。

## CSS 变量范围
这是因为自定义属性的范围是由选择器确定的。此范围包括为其声明自定义属性的选择器以及该选择器的任何后代。如果您熟悉 JavaScript 中作用域的工作原理，这种行为应该感觉有点相似。
例如：在root 上面声明变量就可以在全部对象共用。
# 使用:root 实现主题切换：
给所有的的颜色都使用变量，然后切换根的属性类，就可以实现主题切换。
# 属性配合！important 可以 但是会有特殊的情况：
1. 可以被覆盖(其他的普通property)。（正常应该不会）
2. 但是仍然具有多个自变量中选择出来特异属性。
# 有关于CSS 变量的文章，太长了https://css-tricks.com/a-complete-guide-to-custom-properties/

# form 属性 
# 所有可能的组件：
https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls
action 如何处理数据，发送到哪
method:如何发送数据，使用get？post?
exmaple:
```html
<form action="example.com/path" method="post">

</form>
```
## input:
和label 配合使用，通过id 和 for 实现：
```html
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name">
</form>

```
另一个重要属性：placeholder.
name:用于后端处理。如果没有name，数据提交时候将会被忽略。
## 发送的内容belike:
"form": {
    "age": "33",
    "first_name": "John",
    "last_name": "Doe"
  },
## 输入的可能type:

email -- 在移动设备上可能有所不同。
password --遮盖数据。
number -- 数字键盘。
date 收集日期。
radio 单选按钮
checkbiox:复选按钮 详细查看：https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics
通过name  来区分组
<!-- <h1>Ticket Type</h1>
<div>
  <input type="radio" id="child" name="ticket_type" value="child">
  <label for="child">Child</label>
</div>

<div>
  <input type="radio" id="adult" name="ticket_type" value="adult">
  <label for="adult">Adult</label>
</div>

<div>
  <input type="radio" id="senior" name="ticket_type" value="senior">
  <label for="senior">Senior</label>
</div> -->
默认选中属性：checked
## 另一种输入框 textarea
1. 带结束标签
提供rows 和 cols 属性指定大小
      overflow: auto;
      background:none;
      一般overflow用auto 即可。

# select 多选框
<!-- <select name="fashion">
  <optgroup label="Clothing">
    <option value="t_shirt">T-Shirts</option>
    <option value="sweater">Sweaters</option>
    <option value="coats">Coats</option>
  </optgroup>
  <optgroup label="Foot Wear">
    <option value="sneakers">Sneakers</option>
    <option value="boots">Boots</option>
    <option value="sandals">Sandals</option>
  </optgroup>
</select> -->
可加上selected 表示默认选择。

# 提交按钮
默认按钮都是submit 也就是都是提交按钮：(容易出错！务必指定type)
```html
<button type="submit">Submit</button>
重置：reset:
<button type="reset">Reset</button>
<button》 type="reset">Reset</button》
```
普通按钮：button:
# html 实现分组：
```html
  <fieldset>
      <legend>Delivery Details</legend>
    
      <label for="street_address">Street Address:</label>
      <input type="text" id="street_address" name="street_address">
    
      <label for="city">City:</label>
      <input type="text" id="city" name="city">
    
      <label for="zip_code">Zip Code:</label>
      <input type="text" id="zip_code" name="zip_code">
    </fieldset>
```
legend 用于为fieldset提供注释。
# 有关auto 的一切：
https://ishadeed.com/article/auto-css/
# width:auto
块级元素如 <div>, <p> 的 width 属性的初始值就是 auto
占据父元素所有空间，并且不会超出！
100%有可能超出。
总是用auto!!
```css
input[type="checkbox"],
input[type="radio"] {
  width: auto;
  border: none;
}
```
对于radio 是根据大小调整，而不是占用总空间
# height:auto
auto 是 实际内容的高度：
对于 height 这个属性来说， 和 width 的情况完全不同。一个元素的高度等于它实际内容占用的高度，默认值就是 auto。
为了让 .item 元素占用其父元素的全部高度， 我们可以采用下面的任一方法来实现：

给 .wrapper 一个固定的高度， 然后给 .item 设置 height: 100%。
给 .wrapper 设置成 display: flex, 它就会默认拉伸他的子元素 .item。

# margin:auto
只要这样用：
margin: 0 auto；
or{
  .element {
    margin-left: auto;
    margin-right: auto;
}
}
原理：
 如果一个元素的 margin-left 和 margin-right 的值都是 auto， 那么这两个的使用的真实值就是相等的，也会使得元素相对于父元素的边缘水平居中。
margin auto 也可以用于 绝对居中。
这个元素的必须有一个固定的宽度和高度
这个元素必须是绝对定位 position: absolute
# flexbox 中的使用：
在 flex 布局的父元素内，给子元素的 margin 设置为 auto 会让这个子元素被 "推到" 对应的另一边，这在有些应用场景下是非常有用的。比如， 如果一个 flex 布局的元素设置成 margin-left: auto， 那么它就会被 “推到” 最右边。
特别的，如果容器内只有一个子元素，我们可以用 margin: auto 来将其水平以及垂直居中。
## 元素设置auto：
根据 MDN的规范， 设置了flex：auto的元素将根据其宽度和高度来调整大小，但它可以根据可用的额外空间来增大或缩小。

# form 中的 CSS
button 和 input 基本上是输入完好的。很容易控制。
不能的 查看：
https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling。
删除部件的系统级别样式：
input {
  appearance: none;
}
# 对于search safari上比较特别，需要特殊处理。
# 内容无效的form input 设计:
```CSS
.form-row input[type='text']:invalid,
.form-row input[type='email']:invalid {
  border: 1px solid #D55C5F;
  color: #D55C5F;
  box-shadow: none; /* Remove default red glow in Firefox */
}
``` 
# 表单validation设计
input 必填字段 加上required.
另外在label 后加上*号显示说明.
## 最小长度
minlength
## 最大长度
maxlength
## min max 
查看如何限制日期等特殊的syntax 语法:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax
## 正则表达式验证:
pattern
## 使用:valid 和 :invlid 来表示通过验证 未通过验证的伪类.

# 媒体查询：
@media mediatype and feature{
  rules
}
mediatype:
only screen “媒体类型”意味着所包含的样式只能应用于带有屏幕的设备（与打印文档相反，例如在浏览器中按Cmd+P时）。 min-width和max-width部分称为“媒体功能”，它们指定您要定位的设备尺寸。
## 大概两种布局：
fluid:大小随着变动. 在移动设备上使用 限定一个范围。
fiexed:不变 
## 优先开发移动布局
示例:
```css
  @media only screen and (max-width: 400px) {
    body {
      background-color: #F09A9D; /* Red */
    }
  }
  
  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    @media only screen and (min-width: 401px) and (max-width: 960px) {
      .sign-up,
      .feature-1,
      .feature-2,
      .feature-3 {
        width: 50%;
      }
    }
  }
  
  /* Desktop Styles */
  @media only screen and (min-width: 961px) {
    body {
      background-color: #B2D6FF; /* Blue */
    }
    .page {
      width: 960px;
      margin: 0 auto;
    }
    .feature-1,
    .feature-2,
    .feature-3 {
      width: 33.3%;
    }
    .header {
      height: 400px;
    }
  }
```
## 禁用缩放 以打开移动布局:
```html
 <meta name='viewport'
      content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
```
### 多选框注意! 字体调整要先! webkit 只针对 chrom and safari:
-webkit前缀仅适用于 Chrome 和 Safari（由 WebKit 渲染引擎提供支持），而 Firefox 不受影响。这实际上是一种 hack，甚至 MDN 也表示不要使用这个 CSS 属性。
```css
.form-row select {
  width: 100%;
  padding: 5px;
  font-size: 14px;            /* This won't work in Chrome or Safari */
  -webkit-appearance: none;   /* This will make it work */
}
```
原因是 在chrome 中如果不禁用 这个,那么字体无法调整


# 22点33分 2024年11月12日 
# grid
```CSS
还有一种叫做inline-grid
.container {
  display: grid; 
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px 50px;
}
```
支持为线命名：
```CSS
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```
[]中可以空格隔开表示多个名
这或许可以为我们在gird-column中带来方便。如果有重名使用[名称 计数]
直接一级是item 跨级别不是

## 支持简写
```css
grid-template: row/column;
```
## 隐式值：
 grid-auto-rows: 50px;
默认情况下添加隐式行吗，也就是一行一行躲起来。
可以使用grid-auto-flow定义为列。
# 行列间隙：
column-gap row-gap
gap
无法处理gap：
  就基于线的项目定位而言，间隙就像线获得了额外的宽度一样。从该行开始的任何内容都在间隙之后开始，您无法解决间隙或将任何东西放入其中。如果您希望排水沟的行为更像常规轨道，您当然可以为此目的定义一条轨道。
# 实虚线代表显示创建，
# 可以调整线来操做cell的大小：
注释：默认情况下都是1个宽度。简单理解:end = start+1.
另，支持负数表示倒数。（仅考虑显示网络）
```css
#living-room {
  grid-column-start: 1;
  grid-column-end: 6;
 grid-row-start: 1;
  grid-row-end: 3; 
}
```
简单写版本：
```CSS
  grid-column: 4 / 6; 
  grid-row: 3 / 6;
```
再次简写：
```CSS
#living-room {
  grid-area: 1 / 1 / 3 / 6;
}
```
还有一种更短的简写方式可以用起始线和结束线定位网格项。您可以使用grid-area将grid-row-start / grid-column-start / grid-row-end / grid-column-end组合成一行。
左上角XY/右下角XY。
另外，这里也支持跨单位访问只需要把第二个换成span num 即可。
# grid area 甚至可以使用名称来布局：
```css
/* styles.css */

#living-room {
  grid-area: living-room;
}

```
这是父容器内的：
```CSS
  grid-template-areas:
    "living-room living-room living-room living-room living-room"
    "living-room living-room living-room living-room living-room"
    "bedroom bedroom bathroom kitchen kitchen"
    "bedroom bedroom bathroom kitchen kitchen"
    "closet closet bathroom kitchen kitchen"    
```
可用. 来表示空格子。
此时 线会被自动命名：xx-start,xx-end
# resize:both;
允许用户调整大小。
# 使用repeat 函数简化grid 重复列大小的涉及
repeat(个数，大小)
多个repeat 可以联用，空格隔开
# 知名单位fr
类似flex 按比例分配。
最小是width:min-content：容纳内容大小的最小值。
# 明确控制的方法 结合min max：
```CSS
.grid-container {
  grid-template-rows: repeat(2, min(200px, 50%));
  grid-template-columns: repeat(5, max(120px, 15%));
}

```
min 控制最大
max 控制最小
# 同时控制 minmax()

```CSS
.grid-container {
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(5, minmax(150px, 200px));
}
```
可以使用静态尺寸
# clamp 全流程适用的自适应
clamp(minimum-size, ideal-size, maximum-size)
min 和 max 常常是静态值
而 ideal-size 往往是动态值
# auto-fit 和 auto-fill
用例：
```CSS
.example {
  display: grid;
  width: 1000px;
  grid-template-columns: repeat(auto-fit, 200px);
}
```
这里的auto-fit返回当前大小/200px 的值
配合min-max 完全释放天性：
```CSS
.grid-container {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

```
尽可能多的列，并且不超出！ 完全自适应！
## 内部实现机理：
首先根据最小尺寸算出来 最多的行列睡，然后根据剩余空间去最大分配。
效果：均匀分配。
## auto fill 的区别
autofill会为可能的新空间保留
auto-fit也会增加列 但是被折叠 是显示列
# justify-item：
<!-- 也支持这个，start,end,center,stretch -->
这里的意思是在每个单元格内部的排序！！！！ 回顾flexbox
# justify-content:
这个才是我们在flex-box中用多个
# align-items alignself align-content
记住 content 所有人一起来，items 在内部排序
# 可使用safe 关键词修饰：保证不会丢失 类似wrap
# grid-column中引用线，支持引用隐式线。
# grid 与flex的比较
flex:本质上是在一个维度中布局。
当确定 一个行的大小时某个的什么关系 用grid
flex每个项目大小却决于各个item like nav
选择关键：是否依赖于内部内容的大小？
grid:多列展示