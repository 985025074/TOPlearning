# ement

https://docs.emmet.io/cheat-sheet/
强大的缩写：
支持输入 html 名自动生成两边。
支持 CSS 书写。
只输入 CSS 默认产生 div
产生属性名：
XX[属性名：属性值]
支持惩罚！！子类
{} 指示内部文字
$自动跟随数字

- 连接同级
  ^跳出 （或者用括号来限制！）

remove tag:
ctrl+k .roboto-regular {
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

有一个 snippet.json 文件，里面详细规定了该展开成什么。

# 隐式缩写：

.content -> div
ul ol > li

# scalable vector graphics: SVG

xmlns - 代表“XML 命名空间”。这指定了您正在使用的 XML 方言。在我们的例子中，该方言就是 SVG 语言规范。如果没有它，某些浏览器将无法渲染您的图像或无法正确渲染图像。

# svg viewbox:

viewbox: minx miny width height.

# 嵌入方法：

<!-- <img> 或者 background-img:url -->

不要 inline!

# SVG 库

https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-svg

# 改变 SVG 颜色：

https://stackoverflow.com/questions/22252472/how-can-i-change-the-color-of-an-svg-element

# 表格

table:
tr
包裹每一行 table row
每一列：table data
特别强调 th

# rowspan colspan

跨越多少行，合并单元格用

# 给列指定样式

<!-- <table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
  </colgroup> -->

like this
也可指定 span

# 表格的完整结果

thead
tbody 隐式添加的
tfoot 隐式 CSS 至少包括置于底部
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

# 重置表元素 default type:

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

还有一种 MeyerReset.

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
td:hover { /_ th:hover also if you wish _/
background: yellow;
}
tbody tr:hover {
background: yellow;
}
高亮列，再看看：https://css-tricks.com/complete-guide-table-element/
真 JB 烦 有空再看。

# 恢复默认浏览器格式：

.article :where(h1, h2, h3, h4, h5) {
all: revert;
}

# CSS 百分比指的是 width = 100%父元素的 100

# 重置的说明：https://www.joshwcomeau.com/css/custom-css-reset/

# 15 点 39 分 2024 年 11 月 9 日

CSS 中的单位。
绝对单位：始终用 px。像素级别单位。
相对单位：em rem
em 跟踪父元素的相对大小。
rem 跟踪根元素：
如果元素的 font-size 16px;
4em = 64px
推荐使用 rem

# 视口单位

vh vw =1%

# 推荐使用方式：

字体使用 rem
其余使用 px；
如果出现破坏情况，使用 rem

# 字体的一些特殊效果：查看：

https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-text-styles

# backgroundc-color 等一些特殊效果，查看

https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-more-css-properties

# 选择器：

> 子类一级选择

- 同级选择，延后一个
  ~ 同级选择，后面所有兄弟选择器

# CSS 特异值的计算

查看图片https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/01/specificity-calculationbase_rhrovi.png?w=570&ssl=1
https://css-tricks.com/specifics-on-css-specificity/
最前面的代表 inline style inline 具有最高优先级

# ！important 规则

附加 CSS 属性值的!important 值是自动获胜。它甚至覆盖标记中的内联样式。覆盖 !important 值的唯一方法是使用稍后在 CSS 中声明的另一个 !important 规则，否则具有相同或较大的特异性值。您可以将其视为将 1,0,0,0,0 添加到特异性值。
伪类 :not() 本身不添加任何特殊性，仅添加括号内的内容。
伪元素（例如：first-line）得到 0,0,0,1，不像它们的伪类兄弟得到 0,0,1,0

# 伪类选择器(0010)

伪类是一个选择器，它选择处于特定状态的元素，例如它们是其类型的第一个元素，或者它们被鼠标指针悬停在其上。它们的表现就好像您已将类应用到文档的某些部分一样，通常可以帮助您减少标记中多余的类，并为您提供更灵活、可维护的代码。

## 举例：

:focus 焦点选择的元素
:hover 鼠标悬停的元素
:active 被激活的元素
：root 很大程度上是 html，但是特异性更高一点
:first-child 和:last-child 将匹配第一个或最后一个同级元素。同样， :empty 将匹配根本没有子元素的元素，而:only-child 将匹配没有任何同级元素的元素。
对于更动态的方法，我们可以使用:nth-child 。这是一个灵活的伪类，具有几种不同的用途。
nth-of-type 是几个同类的里的第几个，而 nth-child 是所有子元素里的第几个（包括非同类
https://stackoverflow.com/questions/9313769/nth-of-type-vs-nth-child）。

### nth_child()

```CSS
  .myList:nth-child(5) {/* Selects the 5th element with class myList */}

  .myList:nth-child(3n) { /* Selects every 3rd element with class myList */}

  .myList:nth-child(3n + 3) { /* Selects every 3rd element with class myList, beginning with the 3rd */}

  .myList:nth-child(even) {/* Selects every even element with class myList */}
```

# pseudo-elements 伪元素(0001) 两个冒号

::marker 允许您自定义<li>元素的项目符号或数字的样式。
::selection 允许您在用户选择页面上的文本时更改突出显示。
::first-letter 和::first-line 允许您（您猜对了！）为某些文本的第一个字母或第一个行提供特殊的样式。
::before 和::after 允许我们使用 CSS（而不是 HTML）向页面添加额外的元素。使用它以各种方式装饰文本是一种常见的用例。

# 属性选择器（0010）

[]
type[]
允许键值对
[kv]
[key=value]

[attribute^="value"] - ^=将从头开始匹配字符串。

[attribute$="value"] - $=将从末尾开始匹配字符串。

[attribute*="value"] - \*=通配符选择器将匹配字符串内的任何位置。

# 23 点 49 分 2024 年 11 月 9 日 CSS 定位：

# 默认都是 static

# relative 相对定位

作用：
四个参数会起作用：
top、bottom、left、right。
relative to what? father element. 相对于文件流的位置
absolute：
不一定相对于父元素，而是相对于第一个非 static 的父级别元素。

# fix 相对于 view port 定位。从文件流中移走

# sticky 定位。同样移走 不脱离文件流

是 static 和 fixed 的结合。
滚动起来，超出时是 fixed（不会超出父元素），正常情况下是 static

https://css-tricks.com/absolute-relative-fixed-positioining-how-do-they-differ/

# position 的精彩用例：漂亮的底图案效果 + 跟随的导航栏

https://www.youtube.com/watch?v=MxEtxo_AaZ4&t=2s
使用了 -top 来使得图片露出一个角。
使用了 overflow-x:hidden 隐藏此时的滚动条。
使用了 z-index-1 置于底部。

# 注意 非 static 元素会默认显示再顶端。

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

# 09 点 45 分 2024 年 11 月 10 日

CSS func:
calc 最基本的计算
常用来制作动态的文字大小。
max,min

## 用例：

适当宽度的 width：
p {
width: clamp(45ch, 50%, 75ch);
}
占据大部分内容的 content：
.content {
height: calc(100vh - 60px);
}
流畅的大小变动
h1 {
font-size: clamp(1.75rem, 4vw + 1rem, 3rem);
}
自动调整的 header：
footer {
--contentWidth: 400px;

background: lightcoral;
padding: 2rem max(2rem, 50vw - var(--contentWidth) / 2);
}

## CSS 变量用法：

var(name,fallback);
使用的值来自哪？
负极最近的值。
用两个破折号--不是@property 定义的自定义属性始终继承其父级的值。

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
例如：在 root 上面声明变量就可以在全部对象共用。

# 使用:root 实现主题切换：

给所有的的颜色都使用变量，然后切换根的属性类，就可以实现主题切换。

# 属性配合！important 可以 但是会有特殊的情况：

1. 可以被覆盖(其他的普通 property)。（正常应该不会）
2. 但是仍然具有多个自变量中选择出来特异属性。

# 有关于 CSS 变量的文章，太长了https://css-tricks.com/a-complete-guide-to-custom-properties/

# form 属性

# 所有可能的组件：

https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls
action 如何处理数据，发送到哪
method:如何发送数据，使用 get？post?
exmaple:

```html
<form action="example.com/path" method="post"></form>
```

## input:

和 label 配合使用，通过 id 和 for 实现：

```html
<form action="example.com/path" method="post">
  <label for="first_name">First Name:</label>
  <input type="text" id="first_name" />
</form>
```

另一个重要属性：placeholder.
name:用于后端处理。如果没有 name，数据提交时候将会被忽略。

## 发送的内容 belike:

"form": {
"age": "33",
"first_name": "John",
"last_name": "Doe"
},

## 输入的可能 type:

email -- 在移动设备上可能有所不同。
password --遮盖数据。
number -- 数字键盘。
date 收集日期。
radio 单选按钮
checkbiox:复选按钮 详细查看：https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-form-basics
通过 name 来区分组

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
   提供 rows 和 cols 属性指定大小
   overflow: auto;
   background:none;
   一般 overflow 用 auto 即可。

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

可加上 selected 表示默认选择。

# 提交按钮

默认按钮都是 submit 也就是都是提交按钮：(容易出错！务必指定 type)

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
  <input type="text" id="street_address" name="street_address" />

  <label for="city">City:</label>
  <input type="text" id="city" name="city" />

  <label for="zip_code">Zip Code:</label>
  <input type="text" id="zip_code" name="zip_code" />
</fieldset>
```

legend 用于为 fieldset 提供注释。

# 有关 auto 的一切：

https://ishadeed.com/article/auto-css/

# width:auto

块级元素如 <div>, <p> 的 width 属性的初始值就是 auto
占据父元素所有空间，并且不会超出！
100%有可能超出。
总是用 auto!!

```css
input[type="checkbox"],
input[type="radio"] {
  width: auto;
  border: none;
}
```

对于 radio 是根据大小调整，而不是占用总空间

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

# 绝对居中最佳实现：

结合使用：top: 50% + transform: translateY(-50%)
为了让元素 垂直居中 于其父容器，你通常需要结合 top: 50% 和 transform: translateY(-50%)。这样做的效果是：

top: 50% 将元素的顶部对齐到父容器的中间。
transform: translateY(-50%) 将元素向上移动自身高度的 50%，从而使元素的 中心 对齐父容器的中心。

# flexbox 中的使用：

在 flex 布局的父元素内，给子元素的 margin 设置为 auto 会让这个子元素被 "推到" 对应的另一边，这在有些应用场景下是非常有用的。比如， 如果一个 flex 布局的元素设置成 margin-left: auto， 那么它就会被 “推到” 最右边。
特别的，如果容器内只有一个子元素，我们可以用 margin: auto 来将其水平以及垂直居中。

## 元素设置 auto：

根据 MDN 的规范， 设置了 flex：auto 的元素将根据其宽度和高度来调整大小，但它可以根据可用的额外空间来增大或缩小。

# form 中的 CSS

button 和 input 基本上是输入完好的。很容易控制。
不能的 查看：
https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling。
删除部件的系统级别样式：
input {
appearance: none;
}

# 对于 search safari 上比较特别，需要特殊处理。

# 内容无效的 form input 设计:

```CSS
.form-row input[type='text']:invalid,
.form-row input[type='email']:invalid {
  border: 1px solid #D55C5F;
  color: #D55C5F;
  box-shadow: none; /* Remove default red glow in Firefox */
}
```

# 表单 validation 设计

input 必填字段 加上 required.
另外在 label 后加上\*号显示说明.

## 最小长度

minlength

## 最大长度

maxlength

## min max

查看如何限制日期等特殊的 syntax 语法:
https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/max#syntax

## 正则表达式验证:

pattern

## 使用:valid 和 :invlid 来表示通过验证 未通过验证的伪类.

# 媒体查询：

@media mediatype and feature{
rules
}
mediatype:
only screen “媒体类型”意味着所包含的样式只能应用于带有屏幕的设备（与打印文档相反，例如在浏览器中按 Cmd+P 时）。 min-width 和 max-width 部分称为“媒体功能”，它们指定您要定位的设备尺寸。

## 大概两种布局：

fluid:大小随着变动. 在移动设备上使用 限定一个范围。
fiexed:不变

## 优先开发移动布局

示例:

```css
@media only screen and (max-width: 400px) {
  body {
    background-color: #f09a9d; /* Red */
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
    background-color: #b2d6ff; /* Blue */
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
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
/>
```

### 多选框注意! 字体调整要先! webkit 只针对 chrom and safari:

-webkit 前缀仅适用于 Chrome 和 Safari（由 WebKit 渲染引擎提供支持），而 Firefox 不受影响。这实际上是一种 hack，甚至 MDN 也表示不要使用这个 CSS 属性。

```css
.form-row select {
  width: 100%;
  padding: 5px;
  font-size: 14px; /* This won't work in Chrome or Safari */
  -webkit-appearance: none; /* This will make it work */
}
```

原因是 在 chrome 中如果不禁用 这个,那么字体无法调整

# 22 点 33 分 2024 年 11 月 12 日

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
这或许可以为我们在 gird-column 中带来方便。如果有重名使用[名称 计数]
直接一级是 item 跨级别不是

## 支持简写

```css
grid-template: row/column;
```

## 隐式值：

grid-auto-rows: 50px;
默认情况下添加隐式行吗，也就是一行一行躲起来。
可以使用 grid-auto-flow 定义为列。

# 行列间隙：

column-gap row-gap
gap
无法处理 gap：
就基于线的项目定位而言，间隙就像线获得了额外的宽度一样。从该行开始的任何内容都在间隙之后开始，您无法解决间隙或将任何东西放入其中。如果您希望排水沟的行为更像常规轨道，您当然可以为此目的定义一条轨道。

# 实虚线代表显示创建，

# 可以调整线来操做 cell 的大小：

注释：默认情况下都是 1 个宽度。简单理解:end = start+1.
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

还有一种更短的简写方式可以用起始线和结束线定位网格项。您可以使用 grid-area 将 grid-row-start / grid-column-start / grid-row-end / grid-column-end 组合成一行。
左上角 XY/右下角 XY。
另外，这里也支持跨单位访问只需要把第二个换成 span num 即可。

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

# 使用 repeat 函数简化 grid 重复列大小的涉及

repeat(个数，大小)
多个 repeat 可以联用，空格隔开

# 知名单位 fr

类似 flex 按比例分配。
最小是 width:min-content：容纳内容大小的最小值。

# 明确控制的方法 结合 min max：

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

这里的 auto-fit 返回当前大小/200px 的值
配合 min-max 完全释放天性：

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

autofill 会为可能的新空间保留
auto-fit 也会增加列 但是被折叠 是显示列

# justify-item：

<!-- 也支持这个，start,end,center,stretch -->

这里的意思是在每个单元格内部的排序！！！！ 回顾 flexbox

# justify-content:

这个才是我们在 flex-box 中用多个

# align-items alignself align-content

记住 content 所有人一起来，items 在内部排序

# 可使用 safe 关键词修饰：保证不会丢失 类似 wrap

# grid-column 中引用线，支持引用隐式线。

# grid 与 flex 的比较

flex:本质上是在一个维度中布局。
当确定 一个行的大小时某个的什么关系 用 grid
flex 每个项目大小却决于各个 item like nav
选择关键：是否依赖于内部内容的大小？
grid:多列展示

# 注解：ts 中 js 构造函数的体现：

```typescript
type _Player = {
  name: string;
  age: string;
};
function Player(this: _Player) {
  this.name = "123";
  this.age = "123";
}
let a = new (Player as unknown as { new (): _Player })();
```

需要强行说明这个函数符合这个签名。

# js 原型：

在原型上面添加函数：

```js
Player.prototype.sayHello = function () {
  console.log("Hello, I'm a player!");
};

player1.sayHello(); // logs "Hello, I'm a player!"
player2.sayHello(); // logs "Hello, I'm a player!"
```

原型可以用：Object.getPrototypeOf() | Player.prototype
在原型上面定义只有一份.
大概原理是：先看自己有没有定义，如果有用自己，反之用原型递归，按这个链去查炸

# sth.prototype

除开方法 + 箭头函数 都有这个属性。
一般在构造函数中使用

# 原型操作重要函数：

Object.setPrototypeOf(Player.prototype, Person.prototype);
设置 Player.prototype 的原型为 Person.prototype
Object.getPrototypeOf(player1);
xx.isPrototypeof(sth)
y instance of prototype prototype 是否产生了 y?

# 万物之处：

null->Object.prototype->具体对象（Object
array:
null->object.prototype -> array.prototype -> sth
xx.prototype == xx 类的原型

# 注释：在创建所有对象之前使用！ 提高效率

# 构造函数 A.call()在当前 B 函数里调用一次 A,但不会连接原型

# this 不受原型的影响（关于 this 的一切 重要）。

最早哪个地方就是 this 指向。这保证继承方法修改子对象状态，，而不是父对象。 全局对象是 window。
全局函数调用：是全局对象
方法调用：注意 方法也是“属性” 函数属性，因而可以被保存：
let brand = car.getBrand;
console.log(brand()); // undefined 这样是合理的。
然而此时 this undefined 。
除非 bind：

```js
let brand = car.getBrand.bind(car); //不一定要同个对象
console.log(brand()); // Honda
```

构造函数调用：如果忽略 new 变成第一种调用，this 变成全局对象。反之 则是创建一个新的对象
显示检查：

```js
function Car(brand) {
  if (!(this instanceof Car)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
function Car(brand) {
  if (!new.target) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}
```

间接调用：显示指定 this
funcname.call() .apply()这种 （区别 apply 第二参数是数组）
箭头函数不会创建上下文因此如果使用这个创建上下文会造成问题。

```javascript
function Car() {
  this.speed = 120;
}

Car.prototype.getSpeed = () => {
  return this.speed;
};

var car = new Car();
console.log(car.getSpeed()); // 👉 undefined

这里的car 调用的是全局上下文window
```

https://www.javascripttutorial.net/javascript-this/

# 循环遍历键值对语法回顾：

```js
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
```

如何排除继承而来的属性？
sth.hasOwnProperty("属性名")

```js
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    alert(`Our: ${prop}`); // Our: jumps
  } else {
    alert(`Inherited: ${prop}`); // Inherited: eats
  }
}
```

hasOwnProperty 不可迭代，保证不会出现在子类的遍历中。所有函数 like

# 尽量属性单独，方法公用 除非是 this.value 这样的赋值 可以保证单独赋值

# js 支持的闭包

js 支持直接捕获：
可以直接捕获声明所在局部区域的所有变量而不需要任何标记。这个叫做词法环境。 lexical environment,

# 另一种类似构造函数的语法，工厂函数 直接返回对象：

```javascript
function createUser(name) {
  const discordName = "@" + name;
  return { name, discordName };
}
```

**注释**：这里用了一个语法：忽略名称的键自动为同名。
so its just like `{name:"",age:123}`

# 对象 + 数组 支持解构赋值：

```js
const obj = { a: 1, b: 2 };
const { a, b } = obj;
// This creates two variables, a and b,
// which are equivalent to
// const a = obj.a;
// const b = obj.b;

const array = [1, 2, 3, 4, 5];
const [zerothEle, firstEle] = array;
// This creates zerothEle and firstEle, both of which point
// to the elements in the 0th and 1st indices of the array
```

# 通过工厂函数实现隐私变量

有意思：

```js
function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
// logs { discordName: "@josh", reputation: 2 }
```

闭包实现。

# 一种类继承的实现方法:

```js
function createPlayer(name, level) {
  const { getReputation, giveReputation } = createUser(name);

  const increaseLevel = () => level++;
  return { name, getReputation, giveReputation, increaseLevel };
}
```

# 在 js 中外部定义的全局变量是 跨文件的 整个浏览器的。

# var 有点幽默了，函数作用域的变量。用到时候再看https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var

# 函数调用不会产生作用域 类似 C++

意思是

```js
let c;
A{
  do c;
}
B{
  let c;
  A()
}
```

A will do global C
这就是所谓词法作用域 就像 C++ 发生的一样。

# 容易混淆的一个例子：“

注意这里是拷贝:

```js
let obj = (function () {
  let temp = 0;
  function couttemp() {
    return temp;
  }
  function addtemp(num) {
    temp += num;
  }
  return {
    temp, //拷贝
    couttemp: couttemp,
    addtemp: addtemp,
  };
})();

obj.addtemp(5);
console.log(obj.couttemp()); // Output: 5
console.log(obj.temp);
0;
```

# module pattern

就是创建一行代码马上调用

# js 中的 get 和 set:

```js
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};
```

get 和 set ，
C# 中的属性

# js 中的类的实现机制：

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// proof: User is a function
alert(typeof User); // function
```

首先创建一个构造函数 USer.
这就是 consturctor 函数
然后，在原型中放入所有方法。
typeof User //是 function! 足以说明本质
注意 字段不是附着在原型上的。
所以要注意，这就是为什么操作字段要加上 this 的原因：不过者带来一个问题：

# 传递成员函数要注意！！！！！！！！

如果传递，单纯的方法会丢失 this！！
两个解决方法：

1. 使用 bind
2. 使用属性，而不是方法也就是改为箭头函数书

# 其余的一些不同点：

https://javascript.info/class

# 类表达式之定义：

因为类是函数所以可以这样：

```js
let User = class MyClass {
  sayHi() {
    alert(MyClass); // MyClass name is visible only inside the class
  }
};

new User().sayHi(); // works, shows MyClass definition
```

# 计算名称

```js
class User {
  ["say" + "Hi"]() {
    alert("Hello");
  }
}

new User().sayHi();
```

产生一个 CV 名称

# extends:

有构造函数 + prototype 既可以 extends
extends === setPrototypeOf
基类可以从构造函数中返回任何内容，而派生类必须返回对象或 undefined ，否则将抛出 TypeError。
另，派生类必须先调用父类的构造函数：super()

## 默认情况下都继承自 object.prototype 除非我们显示指定 null

# 私有属性：

使用# 名臣创建私有属性，ts 的 private 是假的，能用方括号访问。
但是我们的 chrome 可以访问。

# 支持 static

# ES6 支持了  module

what is module
注意ES6的语法支持：https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import 以及转换到commonjs 的说明 

# 模块模式的缘来：

# 解决跨文件暴露问题：

```js
// one.js
const greeting = (() => {
  const greetingString = "Hello, Odinite!";
  const farewellString = "Bye bye, Odinite!";
  return greetingString;
})();
```

# 命名导出的基本形式

export 放声明前，或者最后一起导出(甚至支持创建 X 之前就导出，这是因为 export 只是个声明)

```js
// one.js
export const greeting = "Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";
// one.js
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export { greeting （as sth 可选）, farewell };
//中继导出
//like __init__.py中的 相对导入一样
export sth from path;
```

# 命名导入：

```js
// two.js
import { greeting（as sth）, farewell } from "./one.js";

console.log(greeting); // "Hello, Odinite!"
console.log(farewell); // "Bye bye, Odinite!"
```

不能使用模板字符串
导入到命名空间：
import \* as myModule from "/modules/my-module.js";
只运行模块代码 不导入
import "/modules/my-module.js";

# 所有者可以改变模块值，导入者不可以

# 默认导出：

export default sth;
这种导入可以使用任何名陈来 import

# script 属性 type = module

使用 import 就要用这个

# npm 默认都是本地安装

不是全局
在一个 node_modules 里面装
如果有 package.json 在，那么 Npm install 自动根据这个全装

# package.json:

name version 必须
example:

```
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "author": "Your Name <email@example.com> (https://example.com)"
}
```

or use npm init 来创建
npm init --yes 快速创建样板文件

# dependency vs devdependency

前者是运行必须，后者是开发必须

# $ npm install moment --save

本地安装包，并且更新到 package.josn

# nodejs 简化模块导入：

var moment = require('moment');

# webpack

npm install webpack webpack-cli --save-dev
webpack 作用，浏览器不支持 require 语句！ 我们通过 webpack 协调这一点
替换为实际路径
--save-dev 与前面相呼应，实际运行显然是不需要这个包的
使用：
./node_modules/.bin/webpack index.js --mode=development
把 index.js 变成可用浏览器的文件 dist/main.js

## 自动化上述步骤：

```
// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    publicPath: 'dist'
  }
};

```

# 自动化一些步骤，使用 packge.json 中内置的脚本

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --progress --mode=production",
    "watch": "webpack --progress --watch"
  },

```

npm run xx
--progress 显示进度条
--watch 每次 js 变动自动运行 webpack
注意到一点，上面的 webpakc 没有包含完整路径！自动搜寻路径 方便

## another tool

npm install webpack-dev-server --save-dev
添加脚本："serve": "webpack-dev-server --open"  
run 之后这会产生一个类似 live preview 的东西

## 目录规定：

src 是开发目录
真正部署的时候只需要 dist

# webpack merge 配置:

https://www.theodinproject.com/lessons/node-path-javascript-revisiting-webpack

# webpack.config.js 绑定配置信息的详细解释

```js
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
```

mode 开发模式
entry: 入口点文件
ouput 最终输出
clean:每次进行时候都会清空输出目录
每个 module 对应相应后缀的文件处理

# 图片处理：

CSS 中图片不用管
html 图片需要 html loader
js 也可以导入图片

```js
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
```

一定要 import

# 完整的：

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "restaurant",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

module 就是模块
test 指示：处理那些模块
use ：用哪个
注意：路径名臣没有引用。表示任何文件
如果引用：
请记住，当使用正则表达式来匹配文件时，您不能引用它。即/\.txt$/与'/\.txt$/'或"/\.txt$/"不同。前者指示 webpack 匹配任何以 .txt 结尾的文件，后者指示 webpack 匹配绝对路径为 '.txt' 的单个文件；这可能不是您的意图。
mode:产生一定的优化效果

## 使用插件：

首先 require 导入到命名空间
使用 new 创建示例,加入到 plugin 中

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
```

# 插件 和 loader 区别：

https://stackoverflow.com/questions/37452402/webpack-loaders-vs-plugins-whats-the-difference
插件总的级别，loader 文件级别
参考：
https://www.theodinproject.com/lessons/javascript-webpack

# npm 脚本

# webpack 可以针对不同的优化：

为此 使用不同的配套设施
"build": "webpack --config webpack.prod.js",
"dev": "webpack serve --config webpack.dev.js"

# 常见的 npm 可能的配置：

```js
start: Launches the server or application (e.g., "node index.js").
start：启动服务器或应用程序（例如“node index.js”）。
test: Executes project tests (e.g., "jest" or "mocha").
test：执行项目测试（例如“jest”或“mocha”）。
build: Compiles and prepares production-ready code (e.g., "webpack").
build：编译并准备生产就绪代码（例如“webpack”）。
dev: Starts a development server with live-reloading (e.g., "nodemon").
dev：通过实时重新加载启动开发服务器（例如“nodemon”）。
lint: Enforces code style guidelines (e.g., "eslint").
lint：强制执行代码风格指南（例如“eslint”）。
pre/post scripts: Execute tasks before/after primary scripts (e.g., "prestart", "posttest").
前/后脚本：在主要脚本之前/之后执行任务（例如，“预启动”、“后测试”）。
clean: Removes generated files (e.g., "dist" folder).
clean：删除生成的文件（例如“dist”文件夹）。
deploy: Automates deployment processes.
部署：自动化部署过程。
```

# pre 和 post 脚本

很贱单 只要加一个 pre post 就行
npm run cmd -- --flag 传递标志

# JSON 处理相关 重要：

JSON.parse 得到对象
然后可以像对象一样访问。
json 支持数组
不支持日期 函数
json stringfy：
转换成 json
同样的数组也支持 stringfy

# json 处理网站：

https://jsonformatter.curiousconcept.com/#

# single responsibility:

考虑单一职责原则的另一种方式是，给定的方法/类/组件应该有一个单一的更改理由。否则，如果一个对象试图承担多种职责，
则更改一个方面可能会影响另一个方面。

# loosely coupled

# SOLID

the first one is single res
second:open and closee swicth is against the law.
thuid lis kof 原则：子类就是父类
interface segregation 接口隔离
依赖注入原则：依赖抽象，而不是依赖具体

# local storage

getItem setItem 或者使用最简单的键值访：
推荐使用 get + set 防止混淆

```js
localStorage.colorSetting = "#a4509b";
localStorage["colorSetting"] = "#a4509b";
localStorage.setItem("colorSetting", "#a4509b");
```

进行删除
检测是否支持 local：
Storage.removeItem()采用单个参数 - 您要删除的数据项的键 - 并将其从该域的存储对象中删除。
Storage.clear()不带参数，并清空该域的整个存储对象。

```js
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
```

# 只支持存储字符串！

如果要存储对象 要 JSON.stringfy 之后才可以！

# prettier 配置：

首先配置 text editor default formatter.
然后切换根的属性类 format on save 打开
.prettierignore：忽略一些文件
node_module
\*.html
vscode 可能内置了 prettier
配置 prettier
.prettierrc

重要选项：
semi:分号
overrides:正对特定文件重写

# 结合 eslint:

npm install --save-dev eslint-config-prettier
关闭 prettier 已经处理的 eslinsts

# prettier 实战：

npx prettier files --check 检查文件是否可以格式化
npx prettier files --write 执行格式化
重要配置文件:.prettierignore + .prettierrc

## 注意 本地安装这一步不要跳过 不然协调出现问题！优先使用本地版本

# esulint:

安装：
npm install --save-dev eslint @eslint/js
配置文件叫做：touch eslint.config.js
使用 npx eslint --init 自动生成配置文件
配置：

```js
import js from "@eslint/js";

export default [
  js.configs.recommended,

  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
```

## 基本使用

npx eslint files 就会报错

## 协同使用：

安装配置文件：
npm install --save-dev eslint-config-prettier
添加到 eslicrc

# dropdownmenu:

使用 relative 定位：
top:100%?
foucus or hover?
opacity 实现渐进效果
Pointer-events:none;查询据说为了不叫胡

# transform:对原进行变换

可以进行的有
translate(X,Y)
rotate(somedeg)
scale(width,height) ==>scalX scaleY
skewX xkewY 倾斜
rotateX() 3d
rotateY()
...

# transition:

propertY:变动的属性
duratioN:时间 别人变动到这个状态的时间
time-func:

```markdown
ease - specifies a transition effect with a slow start, then fast, then end slowly (this is default)
ease - 指定一个缓慢开始，然后快速，然后缓慢结束的过渡效果（这是默认值）
linear - specifies a transition effect with the same speed from start to end
linear - 指定从开始到结束具有相同速度的过渡效果
ease-in - specifies a transition effect with a slow start
ease-in - 指定缓慢启动的过渡效果
ease-out - specifies a transition effect with a slow end
ease-out - 指定缓慢结束的过渡效果
ease-in-out - specifies a transition effect with a slow start and end
ease-in-out - 指定缓慢开始和结束的过渡效果
cubic-bezier(n,n,n,n) - lets you define your own values in a cubic-bezier function
cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值
```

延迟开始时间
div {
transition: <property> <duration> <timing-function> <delay>;
}

# 元素是否符合？

.match("query) 严格匹配！要小心
或者用 closest("query")

# 操作 classlist

add
Remove
toggle

# dropdownmenu:

https://www.youtube.com/watch?v=S-VeYcOCFZw

# good icons:

www.toptal.com

# CSS cursor:

cursor:default
pointer 可点击
move 可拖动
text 文本选择
wait 等待

# 图像轮播技术：

按钮技术。hover + focus

## 解决同时淡入淡出

## 重温 block inline inline block 区别：

重要：inline 不可以设置宽高，根据内容自动调整
inline-block 可以设置宽高。margin padding 会影响位置。
img 默认 inline！！ 重要。

# 一个奇怪的 bug:

设置了绝对定位 left:50%后图片缩小，原因是 li 的宽度是 auto？不清楚为什么会这样

# 自定义表单验证：

<form novalidate> 首先form 后加上这个
阻止内置的验证消息 不影响CSS 和 API ：
validationMessage
validity 描述状态：
都是bool 值
patternMismatch ：如果值与指定的pattern不匹配则返回true ，如果匹配则返回false 。如果为 true，则该元素与:invalid CSS 伪类匹配。

tooLong ：如果值大于 maxlength 属性指定的最大长度，则返回 true ；如果小于或等于最大值，则返回 false 。如果为 true，则该元素与:invalid CSS 伪类匹配。

tooShort ：如果值短于 minlength 属性指定的最小长度，则返回 true ；如果大于或等于最小值，则返回 false 。如果为 true，则该元素与:invalid CSS 伪类匹配。

rangeOverflow ：如果值大于 max 属性指定的最大值，则返回 true ；如果小于或等于最大值，则返回 false 。如果为 true，则该元素与:invalid 和:out-of-range CSS 伪类匹配。

rangeUnderflow ：如果值小于 min 属性指定的最小值，则返回 true ；如果大于或等于最小值，则返回 false 。如果为 true，则该元素与:invalid 和:out-of-range CSS 伪类匹配。

typeMismatch ：如果值不符合所需语法（当 type 为 email 或 url 时），则返回 true ，如果语法正确，则返回 false 。如果为 true ，则该元素与:invalid CSS 伪类匹配。

**valid** ：如果元素满足其所有验证约束，则返回 true ，因此被视为有效；如果未满足任何约束，则返回 false 。如果为 true，则该元素与:valid CSS 伪类匹配；否则:invalid CSS 伪类。

valueMissing ：如果元素具有 required 属性但没有值，则返回 true ，否则返回 false 。如果为 true，则该元素与:invalid CSS 伪类匹配。

willValidate ：如果提交表单时将验证元素，则返回 true ；否则为 false 。

checkValidity() ：如果元素的值不存在有效性问题，则返回 true ；否则为 false 。如果元素无效，此方法还会在元素上触发 invalid 事件。
reportValidity() ：使用事件报告无效字段。此方法与 onSubmit 事件处理程序中的 preventDefault()结合使用非常有用。
setCustomValidity(message) ：向元素添加自定义错误消息；如果设置自定义错误消息，则该元素被视为无效，并显示指定的错误。这使您可以使用 JavaScript 代码来建立除标准 HTML 验证约束提供的验证失败之外的验证失败。报告问题时会向用户显示该消息。
设置例子：

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

对输入框执行检查

# 扩展内置：

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
如果不符合 内置 那么直接返回
```

# 请参考：

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript

# 内在约束： https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation

1. 从 type 限制
   如果不符合 显示 type typeMismatch
2. other
pattern 正则表达式约束 显示patternMismatch
min max 数字约束>
required

# 约束验证的过程
1. checkValidity()
2. 提交时候
3. submit 事件默认不会进行validity验证 click 会
4. min max length 编程方式设置的无效
# 另一个容易出现的错误：
一旦设好custoMvalidty 如果不及时清除会组织后续事件！click =》submit  submit 里面设计好，然后如果click 里面不清楚，会无效！ input 也是！
# checkvalidty 和 reportvalidty 区别：
report 会显示错误信息。

# 如果你需要转译到低版本jshttps://www.theodinproject.com/lessons/node-path-javascript-what-is-es6：
查看：
https://github.com/babel/babel-loader
# 异步 简单理解，调用后不会马上执行

# promise 两个的函数作为参数 resolve and reject

promise.thn() run if finish and success
可以后跟catch（）if reject
# 组合promise
promises.all([promise Array]).then  等待allpromise finish
promise.race() wait just one return as soon as it one finished
# 嵌套：
```js
new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40
```
注意顺序 从最里面的resolve 开始then 起
.finally() 无论正确与否 都会触发
# 异步原理：
  # async callback
  解决sync 的 长延时问题
  # taskqueue: 注意stak 空了才会从队列推入！（防止破坏已有）
  意味着timeout 不是代表刚好那么多time执行。是加入taskqueue时间
  # render 为例 给了render 一些挤兑进入的时间，异步的队列，和render队列同时进入。
  # 不要阻塞callstack or equally that is eventloop
  # js 是单线程 但是浏览器不是：
  事件循环，查看对战 是否为空，如果为空，把任务放到堆栈上运行。定期查看.
  https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html
  # then 和 catch 这种异步callback 加另外一个mircor queue 优先考虑
  # resolve 和reject 只允许有一个 多余的会被忽略
  # then(实际上两个函数)分别处理resolve + reject

  # Cross Origin Request
  通过js的 fetcg 进行跨网站访问时，浏览器会先发送一个请求带上origin名臣，问目标服务器是否可以通过
  服务器会返回一个包含Access-control-allow Origin:源名
  如果包含这个，说明访问被允许：
  example:
  200 OK
Content-Type:text/html; charset=UTF-8
Access-Control-Allow-Origin: https://javascript.info.
一些请求不需要这要的请求：像Get post head 方法 + 安全标头 https://javascript.info/fetch-crossorigin。
要访问别的 都要经过上述询问。
200 OK
Content-Type:text/html; charset=UTF-8
Content-Length: 12345
Content-Encoding: gzip
API-Key: 2c9de507f2c54aa1
Access-Control-Allow-Origin: https://javascript.info
Access-Control-Expose-Headers: Content-Encoding,API-Key
经过这样的请求，那么可以了。
# 请求协议详细解释
预检请求： preflight request:
Access-Control-Request-Method header has the method of the unsafe request.
Access-Control-Request-Headers header provides a comma-separated list of its unsafe HTTP-headers.
Origin header tells from where the request came. (such as https://javascript.info)
如果服务器同意那么返回 200+
同样的三个字段。
# 这是由浏览器自动完成的：
详细过程示例：
真正请求尝试
```js
let response = await fetch('https://site.com/service.json', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    'API-Key': 'secret'
  }
});
```
浏览器代理：
```response
OPTIONS /service.json
Host: site.com
Origin: https://javascript.info
Access-Control-Request-Method: PATCH
Access-Control-Request-Headers: Content-Type,API-Key
```
服务器响应：
```response
200 OK
Access-Control-Allow-Origin: https://javascript.info
Access-Control-Allow-Methods: PUT,PATCH,DELETE
Access-Control-Allow-Headers: API-Key,Content-Type,If-Modified-Since,Cache-Control
Access-Control-Max-Age: 86400
```
可能还会包含一个Max-age 表示缓存有效时间

然后发送著请求：
注意此时请求仍然包含Origin.
且 相应也包含一个Access-Control-Allow-Origin: https://javascript.info(注意 这个即使是安全请求也会返回)
js 只能获取这个请求，或者报错。
# js的请求默认不带coockie等
如果要带：
fetch('http://another.com', {
  credentials: "include"
});
这个也需要经历preflight.服务器端也需要发送一个特别字段表示允许：详细查看上面连接
# fetch 详细解释：
返回值是一个promise
返回之后第一步往往是response.json()处理成json
fetch 接受UR：  字符串 字符串+选项 Request（同一个request 不能fetch 两边）
like
```js
const response = await fetch("https://example.org/post", {
  method: "POST",
 body: 字符串 JSON化的
  headers: {
    "Content-Type": "application/json",
  },

 }
);
```
或者这样添加headers:
```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
然后在正文里这样：
const response =await(,{
  headers:myHeaders
})
```
## 特殊字段：
mode：cors default;
mode:same-origin 不允许跨域 只允许同域名
还有一个可能之no-cors 区别是？TODO
## credetntials:
omit：禁止浏览器发送凭据
include
same-origin
## 实用类之request
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
二者构造函数完全相同
请求可取消 详细查看.
支持复用请求
```js
async function post(request) {
  try {
    const response = await fetch(request);
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

const request1 = new Request("https://example.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ username: "example1" }),
});

const request2 = new Request(request1, {
  body: JSON.stringify({ username: "example2" }),
});

post(request1);
post(request2);

```
# fetch 返回的promise 叫做response。
有的即使是访问失败如404 也有response .reject的是一些网络错误等等
记得检查response.status 200说明正确访问
也可以检查repsonse.ok bool 值
另一个属性：
response.type.
basic.同源请求。
cors 跨域请求
opaque no-cors跨域简单请求
response.headers 返回headers 对象
headers 接口大致查看：
append
DELETE
forEach
get
keys
使用。get()获取属性 更多详细查看https://developer.mozilla.org/en-US/docs/Web/API/Headers
# 正文 重要
response.json()
注意 这是异步的
# 异步函数：
async before function
里面有 await
就是异步函数。
自动返回promise。
意思是说，return sth === resolve sth
throw sth === reject sth
这就是个语法糖。
await 后面跟一个 异步操作。直到完成 await promise ==
promise.then(return Value).
# 处理async 中的reject/异常
.catch()
或者try catch
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
# 牢记是语法糖
# thenlike 也可以await
```js
class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {
    alert(resolve);
    // resolve with this.num*2 after 1000ms
    setTimeout(() => resolve(this.num * 2), 1000); // (*)
  }
}

async function f() {
  // waits for 1 second, then result becomes 2
  let result = await new Thenable(1);
  alert(result);
}

f();
```
# 异常处理：
async function f() {
  throw new Error("Whoops!");
}
完全相同，内部一旦 出现reject 直接throw
async function f() {
  await Promise.reject(new Error("Whoops!"));
}
解决：
可以在内部使用trycath 或者在外部使用.catch() （语法糖！！别忘了）
# 警告 不要在外面使用try_catch！ 
# 处理异常
function catchError(fn){
  return fn(same agrs){
    return fn(args).catch();
  }
}
# 
# git 
## git commit -a 
撤销重做，牢记不要推送之后再修改，会造成云端和本地不一致
# jest：
配置eslint 推荐使用一个插件.
详细查看jest文档：https://jestjs.io/docs/
装一个插件，在eslint里导入全局变量。
# jest 用法;
```js
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```
expect是一个期望对象。
# 断言
toBe 相当于 object.is()
object.is特例：

与 === 的区别
Object.is 的行为与 === 类似，但在以下两种情况下有不同的表现：

- NaN 比较
  NaN 和自身并不相等 (NaN === NaN 为 false)。
  但是 Object.is(NaN, NaN) 返回 true。
- 正负零的比较
  === 认为 +0 和 -0 是相等的 (+0 === -0 为 true)。
  但是 Object.is(+0, -0) 返回 false。

toEqual 会有递归检查每个值。注意忽略undefiend
toEqual会忽略具有undefined属性、 undefined数组项、数组稀疏或对象类型不匹配的对象键。要考虑这些，请改用toStrictEqual 。

.not.toBe() 表示相反
更严格的 如果要判断针对 null undefined true 建议查看：https://jestjs.io/docs/using-matchers
# 数字判断：
toEqualto 
toBeGreaterThan
toBeLessThan
....
浮点数 toBeCloseTo
# 正则表达 字符串
.toMatch
# 对于数组等可迭代对象
是否包含？
toContain(sth)
# 异步测试
如果里面有异步操作。
请把test后的测试函数也改成async
```js
test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});
```
先await 结果再去断言
或者 return 一个promise，在promise的then 里进行断言
# 希望失败的：
加上assertion确保断言被解析到
```js
test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchData().catch(error => expect(error).toMatch('error'));
});
```
# 基于回调的测试： 测试回调代码中的数据是否正确，查看：

https://jestjs.io/docs/asynchronous
# 在测试前的一些开始 结束工作：
```js
beforeEach(() => {
  initializeCityDatabase();
});

afterEach(() => {
  clearCityDatabase();
});
```
在这两个函数里注册回调
一次性的：
```js
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});
```
# 套组
describe.
descirb中的函数会在所有测试前运行。无论这些describe的顺序如何，test内部按顺序：
```js
describe('describe outer', () => {
  console.log('describe outer-a');

  describe('describe inner 1', () => {
    console.log('describe inner 1');

    test('test 1', () => console.log('test 1'));
  });

  console.log('describe outer-b');

  test('test 2', () => console.log('test 2'));

  describe('describe inner 2', () => {
    console.log('describe inner 2');

    test('test 3', () => console.log('test 3'));
  });

  console.log('describe outer-c');
});

// describe outer-a
// describe inner 1
// describe outer-b
// describe inner 2
// describe outer-c
// test 1
// test 2
// test 3
```
所以要设置setup 请在对应函数里设置/
# 只运行一个
test后面加上.only()
# mock 函数
const mockCallback = jest.fn(x => 42 + x);
这个函数如果用在要测试的函数里，会记录一些列数据
重要属性.mock
## mock属性使用用例 
```js
// The function was called exactly once
expect(someMockFunction.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe('return value');

// The function was called with a certain `this` context: the `element` object.
expect(someMockFunction.mock.contexts[0]).toBe(element);

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toBe('test');

// The first argument of the last call to the function was 'test'
expect(someMockFunction.mock.lastCall[0]).toBe('test');

```
## 设置特定返回值：
```js
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
```
## 模拟moudle
模拟fetch:
```js
import axios from 'axios';
import Users from './users';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});
```
# 纯函数：
1. 保证结果一致。在参数一致的情况下。 不能依赖外部变量
2. 不产生副作用。如IO 
纯函数便于测试
# 测试的基本原则：
测试纯函数
测试非纯函数+可被观测的side effect
不要测试私有方法
不要限制内部实现，限制接口
有副作用的要谨慎测试 可能限制实现
# 注意js 中的引用 通过本身去访问属性 才算引用，修改本身无效。
# 拖动属性制作：
draggable="true"
有一个dragstart dragend.
drag over持续发生  preventdefault 可以加一个，不然无法拖动到现存元素
获取屏幕y e.clienty 这是视口坐标。page 是页面坐标

尝试模仿。
getClientDOMRect() 获取元素位置 视口坐标
https://www.youtube.com/watch?v=jfYWwQrtzzY