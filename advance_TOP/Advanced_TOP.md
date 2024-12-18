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
relative to what? father element. **相对于文件流的位置**
其他元素看待它好像还在。
absolute：
不一定相对于父元素，而是**相对于第一个非 static 的父级别元素**。
其他元素看待它已经不在了，文件流中移走
https://www.youtube.com/watch?v=jx5jmI0UlXU

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

# background 常用属性/背景图片使用：

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

@media mediatype (not and only or( ,)) feature{
rules
}
mediatype:
only screen “媒体类型”意味着所包含的样式只能应用于带有屏幕的设备（与打印文档相反，例如在浏览器中按 Cmd+P 时）。 min-width 和 max-width 部分称为“媒体功能”，它们指定您要定位的设备尺寸。
meida type:
print screen all

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

图示请查看
https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-content
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

# ES6 支持了 module

what is module
注意 ES6 的语法支持：https://stackoverflow.com/questions/39436322/node-js-syntaxerror-unexpected-token-import 以及转换到 commonjs 的说明

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
Pointer-events:none;防止鼠标交互发生,传递到下位元素

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
   pattern 正则表达式约束 显示 patternMismatch
   min max 数字约束>
   required

# 约束验证的过程

1. checkValidity()
2. 提交时候
3. submit 事件默认不会进行 validity 验证 click 会
4. min max length 编程方式设置的无效

# 另一个容易出现的错误：

一旦设好 custoMvalidty 如果不及时清除会组织后续事件！click =》submit submit 里面设计好，然后如果 click 里面不清楚，会无效！ input 也是！

# checkvalidty 和 reportvalidty 区别：

report 会显示错误信息。

# 如果你需要转译到低版本 jshttps://www.theodinproject.com/lessons/node-path-javascript-what-is-es6：

查看：
https://github.com/babel/babel-loader

# 异步 简单理解，调用后不会马上执行

# promise 两个的函数作为参数 resolve and reject

promise.thn() run if finish and success
可以后跟 catch（）if reject

# 组合 promise

promises.all([promise Array]).then 等待 allpromise finish
promise.race() wait just one return as soon as it one finished

# 嵌套：

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
})
  .then(function (num) {
    console.log("first then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("second then: ", num);
    return num * 2;
  })
  .then(function (num) {
    console.log("last then: ", num);
  });

// From the console:
// first then:  10
// second then:  20
// last then:  40
```

注意顺序 从最里面的 resolve 开始 then 起
.finally() 无论正确与否 都会触发

# 异步原理：

# async callback

解决 sync 的 长延时问题

# taskqueue: 注意 stak 空了才会从队列推入！（防止破坏已有）

意味着 timeout 不是代表刚好那么多 time 执行。是加入 taskqueue 时间

# render 为例 给了 render 一些挤兑进入的时间，异步的队列，和 render 队列同时进入。

# 不要阻塞 callstack or equally that is eventloop

# js 是单线程 但是浏览器不是：

事件循环，查看对战 是否为空，如果为空，把任务放到堆栈上运行。定期查看.
https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html

# then 和 catch 这种异步 callback 加另外一个 mircor queue 优先考虑

# resolve 和 reject 只允许有一个 多余的会被忽略

# then(实际上两个函数)分别处理 resolve + reject

# Cross Origin Request

通过 js 的 fetcg 进行跨网站访问时，浏览器会先发送一个请求带上 origin 名臣，问目标服务器是否可以通过
服务器会返回一个包含 Access-control-allow Origin:源名
如果包含这个，说明访问被允许：
example:
200 OK
Content-Type:text/html; charset=UTF-8
Access-Control-Allow-Origin: https://javascript.info.
一些请求不需要这要的请求：像 Get post head 方法 + 安全标头 https://javascript.info/fetch-crossorigin。
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
let response = await fetch("https://site.com/service.json", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    "API-Key": "secret",
  },
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

可能还会包含一个 Max-age 表示缓存有效时间

然后发送著请求：
注意此时请求仍然包含 Origin.
且 相应也包含一个 Access-Control-Allow-Origin: https://javascript.info(注意 这个即使是安全请求也会返回)
js 只能获取这个请求，或者报错。

# js 的请求默认不带 coockie 等

如果要带：
fetch('http://another.com', {
credentials: "include"
});
这个也需要经历 preflight.服务器端也需要发送一个特别字段表示允许：详细查看上面连接

# fetch 详细解释：

返回值是一个 promise
返回之后第一步往往是 response.json()处理成 json
fetch 接受 UR： 字符串 字符串+选项 Request（同一个 request 不能 fetch 两边）
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

或者这样添加 headers:

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
还有一个可能之 no-cors 区别是？TODO

## credetntials:

omit：禁止浏览器发送凭据
include
same-origin

## 实用类之 request

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

# fetch 返回的 promise 叫做 response。

有的即使是访问失败如 404 也有 response .reject 的是一些网络错误等等
记得检查 response.status 200 说明正确访问
也可以检查 repsonse.ok bool 值
另一个属性：
response.type.
basic.同源请求。
cors 跨域请求
opaque no-cors 跨域简单请求
response.headers 返回 headers 对象
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
自动返回 promise。
意思是说，return sth === resolve sth
throw sth === reject sth
这就是个语法糖。
await 后面跟一个 异步操作。直到完成 await promise ==
promise.then(return Value).

# 处理 async 中的 reject/异常

.catch()
或者 try catch
try {
const people = await server.getPeople();
const person = people.find(person => { return person.name === name });
return person;
} catch (error) {
// Handle the error any way you'd like
}

# 牢记是语法糖

# thenlike 也可以 await

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
完全相同，内部一旦 出现 reject 直接 throw
async function f() {
await Promise.reject(new Error("Whoops!"));
}
解决：
可以在内部使用 trycath 或者在外部使用.catch() （语法糖！！别忘了）

# 警告 不要在外面使用 try_catch！

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

配置 eslint 推荐使用一个插件.
详细查看 jest 文档：https://jestjs.io/docs/
装一个插件，在 eslint 里导入全局变量。

# jest 用法;

```js
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

expect 是一个期望对象。

# 断言

toBe 相当于 object.is()
object.is 特例：

与 === 的区别
Object.is 的行为与 === 类似，但在以下两种情况下有不同的表现：

- NaN 比较
  NaN 和自身并不相等 (NaN === NaN 为 false)。
  但是 Object.is(NaN, NaN) 返回 true。
- 正负零的比较
  === 认为 +0 和 -0 是相等的 (+0 === -0 为 true)。
  但是 Object.is(+0, -0) 返回 false。

toEqual 会有递归检查每个值。注意忽略 undefiend
toEqual 会忽略具有 undefined 属性、 undefined 数组项、数组稀疏或对象类型不匹配的对象键。要考虑这些，请改用 toStrictEqual 。

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
请把 test 后的测试函数也改成 async

```js
test("the data is peanut butter", async () => {
  const data = await fetchData();
  expect(data).toBe("peanut butter");
});

test("the fetch fails with an error", async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch("error");
  }
});
```

先 await 结果再去断言
或者 return 一个 promise，在 promise 的 then 里进行断言

# 希望失败的：

加上 assertion 确保断言被解析到

```js
test("the fetch fails with an error", () => {
  expect.assertions(1);
  return fetchData().catch((error) => expect(error).toMatch("error"));
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
一次性的，在所有测试前执行一次：

```js
beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test("city database has Vienna", () => {
  expect(isCity("Vienna")).toBeTruthy();
});

test("city database has San Juan", () => {
  expect(isCity("San Juan")).toBeTruthy();
});
```

# 套组

describe.
descirb 中的函数会在所有测试前运行。无论这些 describe 的顺序如何，test 内部按顺序：

```js
describe("describe outer", () => {
  console.log("describe outer-a");

  describe("describe inner 1", () => {
    console.log("describe inner 1");

    test("test 1", () => console.log("test 1"));
  });

  console.log("describe outer-b");

  test("test 2", () => console.log("test 2"));

  describe("describe inner 2", () => {
    console.log("describe inner 2");

    test("test 3", () => console.log("test 3"));
  });

  console.log("describe outer-c");
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

所以要设置 setup 请在对应函数里设置/

# 只运行一个

test 后面加上.only()

# mock 函数

const mockCallback = jest.fn(x => 42 + x);
这个函数如果用在要测试的函数里，会记录一些列数据
重要属性.mock

## mock 属性使用用例

```js
// The function was called exactly once
expect(someMockFunction.mock.calls).toHaveLength(1);

// The first arg of the first call to the function was 'first arg'
expect(someMockFunction.mock.calls[0][0]).toBe("first arg");

// The second arg of the first call to the function was 'second arg'
expect(someMockFunction.mock.calls[0][1]).toBe("second arg");

// The return value of the first call to the function was 'return value'
expect(someMockFunction.mock.results[0].value).toBe("return value");

// The function was called with a certain `this` context: the `element` object.
expect(someMockFunction.mock.contexts[0]).toBe(element);

// This function was instantiated exactly twice
expect(someMockFunction.mock.instances.length).toBe(2);

// The object returned by the first instantiation of this function
// had a `name` property whose value was set to 'test'
expect(someMockFunction.mock.instances[0].name).toBe("test");

// The first argument of the last call to the function was 'test'
expect(someMockFunction.mock.lastCall[0]).toBe("test");
```

## 设置特定返回值：

```js
const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
```

## 模拟 moudle

模拟 fetch:

```js
import axios from "axios";
import Users from "./users";

jest.mock("axios");

test("should fetch users", () => {
  const users = [{ name: "Bob" }];
  const resp = { data: users };
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then((data) => expect(data).toEqual(users));
});
```

# 纯函数：

1. 保证结果一致。在参数一致的情况下。 不能依赖外部变量
2. 不产生副作用。如 IO
   纯函数便于测试

# 测试的基本原则：

测试纯函数
测试非纯函数+可被观测的 side effect
不要测试私有方法
不要限制内部实现，限制接口
有副作用的要谨慎测试 可能限制实现

# 注意 js 中的引用 通过本身去访问属性 才算引用，修改本身无效。

# 拖动属性制作：

draggable="true"
有一个 dragstart dragend.
drag over 持续发生 preventdefault 可以加一个，不然无法拖动到现存元素
获取屏幕 y e.clienty 这是视口坐标。page 是页面坐标

尝试模仿。
getClientDOMRect() 获取元素位置 视口坐标
https://www.youtube.com/watch?v=jfYWwQrtzzY

# transform 不影响自然文档流

- 不脱离，同样不影响他人。
- 另外重要的一点，百分比代表自身大小
  有一些不能使用 transform non-replaced inline。
  non-replaced 指的是内容就是元素内部。
  “Non-replaced” refers to elements whose content is contained within the HTML document

## transform rotate:

rotate(sth deg)

## 缩放：

scale：
scaleX
scaleY
scale(X,Y)

# 倾斜

skewX()
skewY()
skew

# translate 移动

translateX
translateY
translate(X,Y)

# 注意顺序是从右到左！ 依次执行，先平移在旋转，可能导致变换中心没有变动，变成一个 45 度大角度旋转

# perspective

三维变换
transform: perspective();
注意 连接时候 perspective 必须放在前面
后面常常配合旋转等。
数字越大表示从越远的地方看，3d 效果越不好https://3dtransforms.desandro.com/perspective

# rotate3d

三维旋转 https://theodinproject.com/lessons/node-path-advanced-html-and-css-transforms

# 轴的说明：

坐标空间是一个有两个轴的坐标系：X 轴水平向右增大； Y 轴垂直向下增加。三维变换函数将此坐标空间扩展为三维，添加垂直于屏幕平面的 Z 轴，该轴朝观察者方向增加。

# transform 很好的资料

https://www.joshwcomeau.com/css/transforms/
transform 会导致内部文本挤压。产生一个关闭电视的神奇效果

# tranform origin 重要 变换原点

注意 变换远点始终不变
transform-origin: x-axis y-axis z-axis;

# transition 过度

# z-index 大的在上面

# stacking context

z-index 仅在同一级别的 stacking context work.
会创建上下文的情形：
position relative | absolute + z-idnex;
opcacity<1
position 为 fixed sticky
https://www.joshwcomeau.com/css/stacking-contexts/
look this
注意 堆栈上下文 。底层重绘会导致上层也重绘

# z index 不一定依赖于 position

如果实现 flex grid 配合使用 z-inde 也可也

# 创建堆叠上下文：

.wrapper {
isolation: isolate;
}

# transition:

# 为了效率 尽量使用 transform+ opacity 其余的会影响效率。

反之 height 的效率十分差

# timing function:

linear
ease-out 刚开始块 后来满，适合东西进入
ease-in 反过来
ease-in-out 上述的组合
ease 默认值 类似 ease-in-out 稍微陡峭一点
自定义速度函数：贝塞尔曲线：
https://www.joshwcomeau.com/animation/css-transitions/

# 通常动画都是 60fps

浏览器对于内容有四个部分工作
style
layout
paint
composite

# 始终是 GPU

willchange 硬件加速
.btn {
will-change: transform;
}

# 效果器和触发器分离 可以防止 快速触发动画

https://www.joshwcomeau.com/animation/css-transitions/

```css
<button class="btn">
  <span class="background">
    Hello World
  </span>
</button>

<style>
  .background {
    will-change: transform;
    transition: transform 450ms;
  }

  .btn:hover .background { btn是触发器  内部background是效果器
    transition: transform 150ms;
    transform: translateY(-10px);
  }

  /* Toggle me on for a clue! */
  .btn {
    outline: auto;
  }
</style>
```

# 查看 repaint 区域：

使用 esc 打开 打开左边工具三个点 里的 rendering painting tool 可以显示 paint。

# zindex:

relative 元素默认比 static zindex 大
默认后面的元素遮掩前面的 想想他的 zindex 为 0
可以变成负的，这样会跑到下面去

# 动画

属性一览：

```css
#ball {
  /* ... other CSS properties ... */
  animation-duration: 2s; 动画时间
  animation-name: change-color;
  animation-iteration-count: infinite; 运行几次？
  animation-direction: alternate;
}
```

具体动画的形式：

```css
@keyframes change-color {
  from {
    //指示动画事件 0妙处 0%
    background-color: red;
  }

  to {
    //2妙处 200%
    background-color: green;
  }
}
```

可以用百分比
支持多个值。

```css
animation-name: fadeInOut, moveLeft300px, bounce;
animation-duration: 2.5s, 5s, 1s;
animation-iteration-count: 2, 1, 5;
```

infinite + alternate:
会来回，如果配合次数 那就是来回算一次 iter
direction 可选的其他选项 reverse。

动画事件

```js
const element = document.getElementById("watch-me");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-in";
```

注意这里类的设置放在后面。保证 事件绑定之后，动画才开始。

# 淡入淡出 配合 display 彻底消失

注意！ display 配合 transition 是不行的！

```js
@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
  }

  100% {
    opacity: 1;
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}
function showHide() {
  if (divElem.classList[0] === "fade-in") {
    divElem.classList.remove("fade-in");
    divElem.classList.add("fade-out");
  } else {
    divElem.classList.remove("fade-out");
    divElem.classList.add("fade-in");
  }
}
```

注意他不是最后突然消失出现，做了优化

# keyframe 细节：

没有 cascade，按照最后一个
但是内部出现相同百分比值 出现级联，覆盖现象

# animation 同样支持事件函数：

animation-timing-function
注意正对的是每一段，而不是总体

# shorthand:

延迟时间出现在持续时间之后，其余顺序无所谓
.box {
animation: grow-and-shrink 2000ms ease-in-out infinite alternate;
animation-delay: 500ms;
}

# 另外注意的一点。

animation 的属性一旦时间结束就会结束。
解决方法，在普通属性中加入结束值。
或者：
animation-fill-mode: forwards;

# 添加 animation-delay 同样可能导致提前出现问题：

使用 backward。理解方法：fill 根据动画值 向动画出现前填充，之后填充。
或者 both 双向填充

# 为什么 keyframe 优先使用

规范规定的。据说有 8 论比较。

# 可以配合变量

# a11y:

https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-the-web-content-accessibility-guidelines-wcag
https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-semantic-html

# nav footer aside

主要内容 header main

# use button instead of div

语义 + 聚焦功能
div 可以通过添加 tagindex 获得聚焦功能
tabindex:
正整数：tabindex="1"、tabindex="2" 等，数字越大，焦点越早获得。当用户按 Tab 键时，元素会依次获得焦点，数字越小的元素会优先获得焦点。
但是不推荐，推荐重组 dom
0：tabindex="0" 表示元素按默认顺序获得焦点，这通常用于那些可以获得焦点的元素，如 <a> 或 <button> 等。
负数：tabindex="-1" 使元素不能通过 Tab 键获得焦点，但仍然可以通过 JavaScript 或其他方式设置焦点。
隐藏内容记得加上这个 tabindex=-1
或者使用 display:none;
visibility:hidden

# 使用的链接形式最好是：

```html
<!-- Example 1: Now the user is aware that this link will open or download a PDF file. -->
<a href="...">2021 Sign Up Statistics (PDF, 1MB)</a>

<!-- Example 2: And now the user knows this link opens in a new tab! -->
<a href="...">GitHub (opens in new tab)</a>
```

保证语义

# 可以 focus 可以 tab 切换上去并且勇敢键盘操作

tab 顺序取决于 DOM 与 CSS 无关。造成奇怪的顺序情况

# 保留 或者 替换 焦点样式

# ARIA 人工语义元素：

Always use native HTML elements and attributes over ARIA when possible.
尽可能使用原生 HTML 元素和属性而不是 ARIA。

Never change native semantics, unless you have no other choice.
永远不要改变本机语义，除非你别无选择。

All interactive ARIA controls must be usable with a keyboard.
所有交互式 ARIA 控件都必须可通过键盘使用。

Never use role='presentation' or aria-hidden='true' on focusable elements.
切勿在可聚焦元素上使用 role='presentation'或 aria-hidden='true' 。

All interactive elements must have an accessible name.
所有交互元素都必须有一个易于访问的名

# aria-label:

常用于 button label.
注意 div span 无效
让屏幕阅读器读出来这个。

# aia-labelledby

覆盖 label + aira labelledby/
连接多个有 id 的标签的语义，同一个不能多次传入，不同的可以

```html
h2 id='label'>Shirts</h2>

<!-- And here's the labeled element. Note the order of the ID references passed in -->
<button type='button' id='shop-btn' aria-labelledby='label shop-btn'>Shop Now</button>
```

发音是连接的：
shirts shop Now。
类似 label 中的 for id 组合。
没有 focus 功能，同时支持隐藏元素的输出

# aria-describedby

屏幕阅读器主要读两部分，Name description
这个就是修改 description 的

```html
<label
  >Password:
  <input type="password" aria-describedby="password-requirements" />
</label>

<!-- Meaningful text + ARIA! -->
<span id="password-requirements"
  >Password must be at least 10 characters long.</span
>
```

# aria-hidden:

不会读出的部分内容。

```html
<!-- Example 1 -->
<button type="button">
  <span class="material-icons">add</span>
  Add Book
</button>

<!-- Example 2 -->
<button type="button">
  <span class="material-icons" aria-hidden="true">add</span>
  Add Book
</button>
```

父类遮掩子类
https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-accessibility-auditing

# x 响应式设计：

默认 html 就是响应式的
首先加上这个：

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

这个保证网页初始宽度设置为设备宽度。防止手机浏览器自行调整。

## 避免使用固定大小：

px 是不好的。
使用 max-width 代替传统的 width 和 height
太小的时候：max-width 自动缩小以适应。太大的时候不会超出
min-height:字体过大的时候防止溢出的

### Avoid heights altogether 完全避免高度

转而使用填充。

### 固定 width 不好说 一般而言 小的比较合适

# 不用百分比默认也可以获得一定的 responseive：

https://codyloyd.com/2021/percentages/

如果使用百分比： margin 两侧会发生变换。
例子：文章中的 padding 定死了，从而在缩小的时候导致 margin 也会发生变换。
默认去掉 width 的效果也不错。
注意区别于 2100%width。原因是 有的是 content box 你这样设置会导致超出。 如果是 border-box 那也无所谓 一样的。

# 图像响应式

不要同时设置宽度高度，使用一个 auto
另一种： resolution swicth + art direction:
前者根据设备分辨率和屏幕尺寸加载不同版本
后者根据屏幕进行裁剪上面的不同版本
根据尺寸调整的例子：

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="Elva dressed as a fairy"
/>
```

srcset 格式 文件名+空格+宽度
注意是 w 单位，固有宽度 intrinsic width

sizes 条件：
media 选择+空格+图像宽度。注意排序，以及默认选项的位置

## 分辨率切换的例子：

```html
<img srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg
2x"//可供选择的版本 src="elva-fairy-640w.jpg"//默认选择 alt="Elva dressed as a
fairy" />
```

后面的倍率是一种分辨率指示器:

在 <img> 标签的 srcset 属性中，1x 和 1.5x 是 像素密度描述符（Pixel Density Descriptors），用于告诉浏览器这些图片适合不同的屏幕像素密度（也叫设备像素比，Device Pixel Ratio，简称 DPR）。

1. 什么是像素密度描述符？
   1x：表示图片适合 标准屏幕（DPR = 1）的设备。
   1.5x：表示图片适合 DPR = 1.5 的屏幕，例如一些中分辨率屏幕。
   2x：表示图片适合 高分辨率屏幕（DPR = 2），例如 Retina 屏幕。
2. 设备像素比 (DPR)
   设备像素比是设备实际像素与 CSS 像素的比值。不同的设备可能有不同的 DPR：

DPR = 1：1 个 CSS 像素等于 1 个物理像素（标准屏幕）。
DPR = 2：1 个 CSS 像素等于 2 个物理像素（如 Retina 屏幕）。
DPR = 3：1 个 CSS 像素等于 3 个物理像素（如一些高端手机屏幕）。

## 提供不同裁剪版本呢：

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva" />
</picture>
```

# 整个 body 弄个 display

里面的 grid 可能出现问题

# 制作中间布局，推荐用 margin 而不是 padding:

制作边框内嵌 文字使用 padding

# clip-path 制作 div 形状喵喵工具：

https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

# float:https://internetingishard.netlify.app/html-and-css/floats/#after-a-float

float:left right 浮动父元素的左右测，后续元素会上来
多个 float 会叠加。注意 float 会删除文件流。

# 如何避免元素围绕浮动？：

claer:both;
清除左右。
或者仅仅清楚一边。

# 如果一个容器内所有元素都是浮动的 高度为 0.为此可以通过添加 overflow:hidden,恢复实际高度。

典型结构：
nav
content
具体内容
footer

# 不要使用浮动+ flexbox;

transform 等变换动作 都是在 flex 浮动 出现之后的

# 使用 object position 和 fit 要小心：

.work img.projectimage {
height:100%;
width: 100%;
object-fit: cover;
object-position: center;
overflow: hidden;
}
如果没有指定本省的 size 无效

# React Part:

React 组件必须要大写.
React 的语法：

1. 多组件不可以，必须一个组件： <>叫做 fragment 片段

```jsx
function App() {
  // Could replace <></> with <div></div>
  return (
    <>
      <h1>Example h1</h1>
      <h2>Example h2</h2>
    </>
  );
}
```

2. 必须显示关闭标签：
   即使是 img input
3. 使用驼峰命名,而不是破折号：

```jsx
function App() {
  return (
    <div className="container">
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
    </div>
  );
}
```

由于历史原因， aria-*和 data-*属性的编写方式与 HTML 中一样，带有破折号.
另外 className === class 4. 转换器
https://transform.tools/html-to-jsx

## 一些语法：

- 内容不需要引号
  属性需要。like html.
- 变量值：需要用{}
  任何 JavaScript 表达式都可以在大括号之间工作
  - 注意 标签不行。<{tag}>不行
- 对象双括号（临时对象的情况下如 style={{red=123}}），别忘记仍然是驼峰法。

# React has the ability to render Arrays:

```jsx
function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}
```

the code is the same if we change "{...map}" to a speific Array {Array}.
**NOTE**:note that we add key to the li tag. that is important if we want the list to be dynamic.

# how to pass argument:

```jsx
function ListItem(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function App() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```

the name of the attirbute is not opnonated,you can change it.
but as we use "prop.animals " in List we need to define it "animals".
**Key**: the the prop argument is the dict of all the attribute in html tag.

# conditional render:

&&:
in js, if the let value is false, the whole expr is false.
Otherwise,it return the right value.
**React won't render false,null undefined.**
**Don’t put numbers on the left side of &&.**
this is because it will render 0.

# add guard to component:

```jsx
function List(props) {
  if (!props.animals) {
    return <div>Loading...</div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }

  return (
    <ul>
      {props.animals.map((animal) => {
        return <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}
```

# JSX context should be wrapped in branket!

(
JSX
);

# JSX can contain multiline of bracket in one tag:

```jsx
function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance != 0 && " "}
      {importance != 0 && importance}
    </li>
  );
}
```

# arrow function review:

()=>returnvalue;
()=>{return returnvalue}
you must write return explicitly if your => is followed by a curly brace!

# if you want to render multiline at one time :

The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:
**Fragment won't show in the final DOM**

# rule of the key:

constant.
unique.
Another Things need to concern:
**Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.**
KEY WONT BE PASSED

# sth from doc:

```JSX
import { recipes } from './data.js';

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <Recipe {...recipe} key={recipe.id} />
      )}
    </div>
  );
}

```

note where add key.
you have a array of Recipe. SO you need add it out.
{...recipe} is a shortcut for passing all property

# remember:add key in the ~~outest~~ "Array"opponenet

outermost innermost NOT outest

```jsx
import { Fragment } from "react";

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}
```

# 键值创建的方便函数：

crypto.randomUUID() function 。
使用键值的好处：只会在键值发生变换的时候渲染变化部分
注意，不要即时渲染，也就是不要：key={生成随机 ID}

# key 的使用时机：

适用场景：
重新渲染时：只有在列表重新渲染时，key 才会被用来匹配元素。初次渲染时，key 并不起作用。
邻近元素的同类型：当一组“同类型”的元素（如多个 <li>、多个 <div>）在列表中并排存在时，key 用于区分它们。
这种胶片做平坦列表

平坦的列表：强调“平坦的列表”是因为嵌套结构的处理稍微复杂一些（嵌套时需要对子元素递归分配 key）。

# re render 具体流程：

1. 如果 key 存在，使用。
2. 如果不再，使用默认 index

删除所有移除的 key
安装新的 key 新建之前不存在 key 的项目

保留旧的项目（根据 key 保留）
https://www.developerway.com/posts/react-key-attribute
如果使用 index 进行重新排序，相当于每个 tag 原地重新渲染。
如果使用独特 id 那么相当于交换位置。

# 使用 index 比较合适的时机：

分页器。如果每个物品不同 id 那么每次换页都是重新渲染所有
反之，如果只使用 index 那么指示渲染部分

# react 渲染算法 reconition:

```jsx jsx这样的对象 经过React就像是：
const Input = () => {
 return (
   <>
     <label htmlFor={id}>{label}</label>
     <input type="text" id={id} />
   </>
 );
};
[
 {
   type: 'label',
   ... // other stuff
 },
 {
   type: 'input',
   ... // other stuff
 }
]
```

如果是生层次组件：

```jsx
{
 type: Input, // reference to that Input function we declared earlier
 ... // other stuff
}
```

会迭代调用=>
const Component = () => {
return (

<div>
<Input placeholder="Text1" id="1" />
<Input placeholder="Text2" id="2" />
</div>
);
};
最终返回这个树：

```jsx
{
  type: 'div',
  props: {
    // children are props!
    children: [
      {
        type: Input,
        props: { id: "1", placeholder: "Text1" }
      },
      {
        type: Input,
        props: { id: "2", placeholder: "Text2" }
      }
    ]
  }
}
```

## 重新渲染的时候：

从变动状态的地方开始遍历。
首先比较 type 如果 type 相同，那么就是之前所说的更新。
如果不同，那么就是卸载+删除 unmount.

## 奇怪的反转问题：

https://www.developerway.com/posts/reconciliation-in-react
原因就是 type 相同，从而使用了同一个 input 只更新了一下内容而已.

## 解决方式

数组，这里指的是：
React 的 JSX 语法允许在 <></> 或任何容器组件（比如 <div>）中放置多个子元素。虽然我们在编写代码时直接写成多个 JSX 标签，React 在内部会将这些标签转换成一个包含这些元素的数组。这样，React 就可以对这些子元素进行遍历、渲染以及更新。
这种情况下会遍历过去，然后检查前后属性，按照前面规则，更新还是重载。

### 使用数组可以解决

### 另一个解决方式：key

为什么要用 key 的原因也在这里：
jsx 数组树会返回这样一个对象
[
{ type: Input }, // "2" data item now, but React doesn't know that
{ type: Input }, // "1" data item now, but React doesn't know that
];
为了区分哪一个哪一个素以要 key
[
{ type: Input, key: '2' }, // "2" data item, React knows that because of "key"
{ type: Input, key: '1' }, // "1" data item, React knows that because of "key"
];

### 通过数组创建的是动态的 而外面的不是，可以区分

```

  // the entire dynamic array is the first position in the children's array
  [
    { type: Input, key: 1 },
    { type: Input, key: 2 },
  ],
  {
    type: Input, // this is our manual Input after the array
  },
];

```

# 不能在 component 内部定义 component:

https://www.developerway.com/posts/reconciliation-in-react
原自于函数比较始终是 false

# 参数化组件：

```jsx
function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

export default function App() {
  return (
    <div>
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </div>
  );
}
```

解耦格式 更简单

## 提供默认值有两种格式：

1. 参数默认值。
2. 外置一个 defaulProps

```jsx
function Button({ text, color, fontSize }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
  };

  return <button style={buttonStyle}>{text}</button>;
}

Button.defaultProps = {
  text: "Click Me!",
  color: "blue",
  fontSize: 12,
};

export default function App() {
  return (
    <div>
      <Button />
      <Button text="Don't Click Me!" color="red" />
      <Button fontSize={20} />
    </div>
  );
}
```

## 传递函数 固定的好说，传递遍历即可

带参数的？
传递闭包(curry)
function curry(parameter){
return ()=>{
func(parameter);
}
}

## 传递组件作为参数。注意这个组件属性叫做 children

```jsx
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
```

# React 实现组件变化的机制：

注意，组件本省并不可辨，只是传递的属性变了

# State:

代码格式

```jsx
const [stateValue, setStateValue] = useState(initialValue);

// adapted for our use case:
const [backgroundColor, setBackgroundColor] = useState(initialColor);
```

# re-render and reconciliation:

https://www.theodinproject.com/lessons/node-path-react-new-introduction-to-state

# 关于闭包在 React 中的亮点说明：

Local variables don’t persist between renders.
When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
传统闭包无效。整个函数重新调用
对局部变量的更改不会触发渲染。
React 没有意识到它需要使用新数据再次渲染组件。

# Use State 两个返回值的意义。

1. 在渲染之间保存的值。
2. 触发渲染

# 使用 from official doc:

import { useState } from 'react';

# use l 类函数称之为 hook

仅在渲染时候可用。
Hooks（以 use 开头的函数）只能在组件或您自己的 Hooks 的顶层调用。
您不能在条件、循环或其他嵌套函数内调用 Hook。挂钩是函数，但将它们视为有关组件需求的无条件声明会很有帮助。您可以在组件顶部“使用”React 功能，
类似于在文件顶部“导入”模块的方式

# 把 hook 的用法看成是导入 XXX 始终在 component 顶部使用 不要再循环或者 if 中使用

请记住，必须无条件调用 Hook，并且始终以相同的顺序调用！

# state 内部机理：

```js
let componentHooks = [];
let currentHookIndex = 0;
// How useState works inside React (simplified).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // This is not the first render,
    // so the state pair already exists.
    // Return it and prepare for next Hook call.
    currentHookIndex++;
    return pair;
  }

  // This is the first time we're rendering,
  // so create a state pair and store it.
  pair = [initialState, setState];

  function setState(nextState) {
    // When the user requests a state change,
    // put the new value into the pair.
    pair[0] = nextState;
    updateDOM();
  }

  // Store the pair for future renders
  // and prepare for the next Hook call.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}
```

注意 state 是每个组件私有的

# React 内部渲染：

https://medium.com/javarevisited/react-reconciliation-algorithm-86e3e22c1b40
通过操作虚拟 DOM 整个中间层很好的优化了性能.

# 使用 STATE 注意事项：

如果操作的是对象。想要 set 能够触发出 rerender:

```jsx
function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // BAD - Don't do this!
  const handleIncreaseAge = () => {
    // mutating the current state object
    person.age = person.age + 1;
    setPerson(person);
  };

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    **注意这里的这种更新方式 ...展开，然后覆写**
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

```

必须传递新对象，否则根据 object.is 无法触发 rerender.

# Set 之后马上渲染吗？

不是，queue

# State 在单个 render 的处理：

调用函数，函数返回 JSX 片段，React 会处理（下一次 render）.
核心就是：
Setting state only changes it for the next render.
这就是所谓 state is a snapshot 的核心含义。
状态值在一个已经 render 好的 component 里是不会变得。

## 如果想要改变呢？

使用 state updater:
具体而言 就是传入回调。

```jsx
const handleIncreaseAge = () => {
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
  setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
};
```

回调参数就是那个 hook variable。

### 注意 就算是这样 React 也会替我们尽力合并成单次。

人为获取 input 值得实时方式：

```jsx
function CustomInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}
```

# State 原则：

## 尽量分组。

## 不要出现矛盾情况。如果某两个是同方向或者反方向，尽量放到一个变量里，避免出现之变动一个

另一个忘记变了。

## 不要复制 prop 值到 State

```jsx
function Message({ initialColor }) {
  // The `color` state variable holds the *first* value of `initialColor`.
  // Further changes to the `initialColor` prop are ignored.
  const [color, setColor] = useState(initialColor);
```

要搞清楚，状态变量的初始值只会在第一次调用的时候有用。

## 不要重复状态。

这样的话要同时修改两个 很麻烦。

### 不要记录 object 记录 id

否则 === 容易出错

## 避免嵌套。使用子数组的方式扁平化：

https://react.dev/learn/choosing-the-state-structure。

## is missing in prop validation

查一下怎么搞

# FUCK YOU VITE

逆天 VITE 服务器不报错，在浏览器的 console 才报错。
有些错误要去 console

# 动画是进入的时候播放一次 transition

# CSS 导入问题 子文件导入 CSS 会影响夫文件吗：

与 JavaScript 不同，CSS 是通过文件引入的，且如果一个 CSS 文件 A 被 B 导入了，文件 A 中的样式会被添加到文件 B 的样式中。但父文件并不会自动得到子文件中 @import 的文件的样式。并且是子文件优先?先加载夫文件,在加载子文件（GPT）

# Another hook function:effect:

useEffect 有连个个参数：
绑定者，依赖者，析构函数（绑定这返回）
绑定者会在第一次 render 后运行。
默认情况下，每次 render 都会启用一次 effect
除非我们指定第二个参数依赖数组，可以在这些依赖项变动的时候重新启动
析构函数：两个运行时机：组件写在，或者下一个 effect 产生之前。

# effect:

```jsx
Effects let you specify side effects that are caused by rendering itself, rather than by a particular event. Sending a message in the chat is an event because it is directly caused by the user clicking a specific button. However, setting up a server connection is an Effect because it should happen no matter which interaction caused the component to appear. Effects run at the end of a commit after the screen updates. This is a good time to synchronize the React components with some external system (like network or a third-party library).
```

effect 处理的是组件的出现（render 引起的副作用）
do sth impure which cant be do in render

## 不需要的场景：

渲染期间就可以得出结果。

# 组件的生命周期：

添加的时候安装（mount）
state 被设置 或者 new prop 传入会更新 (update)
组件移除 被卸载（unmount）

# effect 作用机理

每次渲染查看依赖项数组
代码中的每个效果都应该代表一个单独且独立的同步过程。
如果为[]那么就是 mount 一次，demount 一次 update 不变
但是 如果是 development 不一定，可能有多次。如 strictMode 的一次检查（在 devekop 过程中，React 总是重新安装每个组件一次。）。

# reactive value:

渲染期间变动值。

# 哪些值不能作为 react dependecy:

全局变量，以及通过全局变量访问

# effect 存在的意义：

一个组件已经产生了，仍然需要运行一些代码

# React effect TIPS:

1. Don't transform data which is used to update component in effect.
   DIRECTYLY IN component code to solve it.
   Because: it runs twice! first,it run due to prop or state change. then it run because the effect!

```jsx
function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);
  // ...
}
```

A way to measure time:

```jsx
console.time("filter array");
const visibleTodos = getFilteredTodos(todos, filter);
console.timeEnd("filter array");
```

2. if you want to cache expensive calculation:
   the best way is to use **useMem** instead of effect.
   the inner func won't rerun until the dependency array'selement changed.
3. reseting state when prop change.
   dont use effect. there is a easier way to solve this:
   use a key which is the same to the prop.
   **By passing a diffrent a key,it will be seen as two diffrent components.Thus,all the state will be cleaned**
   the upper occasion can be concluded: dont change state in effect. ALWAYS:reset by key.and cal during rendering.
   if you want to change state :

```jsx
When you update a component during rendering, React throws away the returned JSX and immediately retries rendering. To avoid very slow cascading retries, React only lets you update the same component’s state during a render. If you update another component’s state during a render, you’ll see an error. A condition like items !== prevItems is necessary to avoid loops. You may adjust state like this, but any other side effects (like changing the DOM or setting timeouts) should stay in event handlers or Effects to keep components pure.
```

通过这种方式，setSelection 是在渲染时直接调用的。React 会在 return 语句执行后立即重新渲染 List，此时 React 尚未渲染子组件或更新 DOM，因此子组件可以跳过渲染旧的 selection 值。
React 渲染流程：
计算函数： React 执行组件代码，生成虚拟 DOM。
返回 JSX： React 将 JSX 转换为虚拟 DOM。
Diff 比较： React 比较新旧虚拟 DOM，找出差异。
更新 DOM： React 更新真实 DOM，并运行副作用代码。
因此 如果在函数中途触发新 render 不会进行 DOM 更新。取而代之的是，如果你在 effect 中触发，那么会进行 DOM 更新。 4. run once:
just use a top variable to follow this.

5. dont pass data from child to parent
6. useignoreTo ignore:

```jsx
function SearchResults({ query }) {
  const [page, setPage] = useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(`/api/search?${params}`);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json);
        }
      });
    return () => {
      ignore = true; // 清理过时的请求
    };
  }, [url]);

  return data;
}
```

例如，当您快速输入 "hello" 时，query 会依次变为 "h", "he", "hel", "hell", 和 "hello"，这会触发多次数据获取。由于无法保证请求的响应顺序，可能会出现 "hell" 的响应晚于 "hello" 的响应，最终显示的结果可能是错误的。

# 无线 effect 避免：

1. 使用 ref
   const ref = useRef(0)
   ref.current++;不会 update 组件
2. 使用 primitive:
   使用 object 导致对象每次都不一样.

# React 环境搭建：

npm create vite@latest . -- --template react

# strict 模式执行两次造成的问题

注意 strict 模式的重复执行 导致回调出现多次。为此使用 ignore。
先运行渲染阶段的 jsx 再运行 effect.

# ref

ref 是一个 escape hatch
{
current: initial
}
example:

```jsx
import { useState, useRef } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}
```

ref store the IntervalId and when the stop is pressed,it clear by the id

# diffrence between ref and state:

- ref is mutable while state is immutable and you must change it by its set function.
- ref is a varible that dosnt involve render.
  so you shouldnt operate it while render.
  state is the oppsite. you can operate it but it is a snapshot of every render.

```jsx
import { useRef } from "react";

export default function Counter() {
  let countRef = useRef(0);

  function handleClick() {
    // This doesn't re-render the component!
    countRef.current = countRef.current + 1;
  }

  return (
    <button onClick={handleClick}>You clicked {countRef.current} times</button>
  );
}
```

hey you use ref here.and the ref wont re-render so the val wont change.

# when to use ref:

interval ID.
DOMS

# two key rules:

- dont use ref too much.
- dont use it during rendering.

# note that ref is a escape hatch,it is diffrent from state:

it is not a snap shot. it changed immediately.

# React render:

三个步骤：
trigger
render（run code）
commit to dom

## trigger:

2 resons:
initial trigger，
component's ancestor's or itself's state changed.

### root's initial render,thus render every thing:

```jsx
import Image from "./Image.js";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(<Image />);
```

### when state chanegd.

the render queued.

## specified render:

run code:
recursively:
if the component return otehr component,React keeps render the component,until there is nothing.

### TIPS:

render func should be pure func.
dont cause side effect. dont change global var.
**this is why STrict Mode executes twice: to find some impure function.**

# future READ:https://legacy.reactjs.org/docs/optimizing-performance.html

for better performance

# commit to DOM.

hey mention here is virtual dom. react will choose the most minimal way to change DOM tree.
there is a pitfall:dom tree includes component's type if type dosen'tchange,it will remain the state of the old component

# the browser painting the website. finally

# 批处理（batch process）

only when all then code of the render solved,will the ul changed.
however multi click isnt the smae

thinking it as a queue:(all the state change store in a queue`)
including state updater(must be pure)

# PITFALL of effect:

The behaviors without the dependency array and with an empty [] dependency array are different:

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either a or b have changed since the last render
}, [a, b]);
```

# strictMode 运行两次 effect 的解决：

是如何修复效果，而不是避免运行两次
通常是实现清理函数接口。

## 对于普通器具：

比较好处理，对于网络请求：

```jsx
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

ignore 解决。

# 只执行一次 可以在全局写：

```jsx
if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

# ignore 无法解决的，买两次物品。

使用 event 逻辑

# 基于类的 component:老式代码：

```jsx
import { Component } from "react";

class ClassInput extends Component {
  // Some code goes here
}

/*
  This can also be written as:

  import React from 'react';
  class ClassInput extends React.Component {}
  export default ClassInput;

  instead of destructuring the `Component` during import
*/

export default ClassInput;
```

## 构造函数：别忘记 super 传递：

```jsx
  constructor(props) {
    super(props);
  }
    constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
    };
  }
```

另外，state 也要在这个地方设置.
除此之外，事件监听器也要在这里绑定：

```jsx
   this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }
```

## render 方法：具体渲染组件：

```jsx
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" name="task-entry" />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul></ul>
      </section>
    );
  }
}
```

# todoLists 中的一个解决：

要求 edit 现存任务。
切换状态不难满足，创建一个 state 来决定渲染什么类型的框。
使用 autoFocus+一个状态配合，来 autoFocus,但是这有一个问题，无法输入中文，会被打断
原因是受控组件，下放 state 是否能够解决？

## 更好的解决方案：

子组件保存状态。从而不会重新渲染。

```jsx
function MyInput({ todo, deleteClick, setState, oldState, index }) {
  let [inputVal, setInputVal] = useState(todo);

  return (
    <>
      <li key={todo}>
        {
          <input
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
        }
        <button onClick={deleteClick}>Delete</button>
        <button
          onClick={() => {
            let newTodos = [...oldState.todos];
            newTodos[index] = inputVal;
            let newEdit = [...oldState.edit];
            newEdit[index] = false;
            setState({ ...oldState, todos: newTodos, edit: newEdit });
          }}
        >
          Submit
        </button>
      </li>
    </>
  );
}
```

# effect 的实质是在某些阶段回调函数：

https://www.theodinproject.com/lessons/node-path-react-new-component-lifecycle-methods

# component 生命周期：mount update unmount

# render 是一些生命周期做的事情：触发 render 执行 render commit

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
什么时候 render？ 初始化，uodate 的时候 uu

# react 环境搭建：

```shell
npm create vite@latest . -- --template react
```

# react 测试环境 搭建

```shell
npm install vitest --save-dev
```

加一个 test 脚本

```
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "test": "vitest"
  },
```

安装 React 测试库：

```shell
npm install jsdom --save-dev
npm install @testing-library/react @testing-library/jest-dom --save-dev
npm install @testing-library/user-event --save-dev
```

React 提供 react 访问基础工作
jest-dom 一共一些断言函数
user-event 模拟用户交互时间。

## 添加一个 setup 文件，自动在每个测试前导入：

setup 文件：

```js
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

vite 配置

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
```

## React Test 详解：

```jsx
// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
```

例子。
getBy 查询：如果没找到或者找到多个 抛出错误。
queryBy 如果没找到 null 多个抛出错误
findBy 返回一个 promise 如果在 1000ms（默认值） 内找到元素，那么 resolve,反之则拒绝。
以上都是单个元素
如果要多个元素那么就 XXAllBy

### best practice:

https://testing-library.com/docs/dom-testing-library/cheatsheet/
https://testing-library.com/docs/queries/about/
getByRole。
最后选择：
https://testing-library.com/docs/queries/bytestid/

#### 什么是 Role：

这个 role 貌似是一种 tag 自带的属性

getByLabelText 表单
getByPlaceholderText
getByTextxx

再一个测试的例子：

```jsx
// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
```

### snapshot 的说明： 第一次运行会产生一个快照文件

以后每次修改会导致错误。

# 测试说明

不要测试实现：

```jsx
test("setOpenIndex sets the open index state properly", () => {
  const wrapper = mount(<Accordion items={[]} />);
  expect(wrapper.state("openIndexes")).toEqual([0]);
  wrapper.instance().setOpenIndex(1);
  expect(wrapper.state("openIndexes")).toEqual([1]);
});
```

如过 state 名称变动，测试会失败。

# 测试的更多历次 mock 函数：

```jsx
// CustomButton.test.jsx

import { vi, describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  it("should render a button with the text 'Click me'", () => {
    render(<CustomButton onClick={() => {}} />);

    const button = screen.getByRole("button", { name: "Click me" });

    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<CustomButton onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Click me" });

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = vi.fn();
    render(<CustomButton onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
```

注释：推荐在 render 之前 测试本生中调用 const user = userEvent.setup()。或者在 seup 函数https://www.theodinproject.com/lessons/node-path-react-new-mocking-callbacks-and-components
component 也可以 mock 用到的时候再看。

# 组件测试中碰到 effect 的问题：

effect 在 expect resolve 之后才运行 https://github.com/mrdulin/react-act-examples/blob/master/sync.md。
为此在测试中使用 act：

```jsx
it("should render 1", () => {
  const el = document.createElement("div");
  act(() => {
    ReactDOM.render(<App />, el);
  });
  expect(el.innerHTML).toBe("1"); // this passes!
});
```

保证 effect 在断言之前执行完毕。
然而 遇到事件呢：
例子：加上 act 反而报错？？

### 事件示例

我们来看另一个例子，这次是关于事件的：

```javascript
function App() {
  let [counter, setCounter] = useState(0);
  return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}
```

我认为这非常简单：一个按钮，用于增加计数器。你可以像以前一样将其渲染到浏览器中。

**一个按钮被点击的动画，内容从 0 增加到 10。**

到目前为止，一切都很顺利。现在让我们为它编写一个测试。

```javascript
it("should increment a counter", () => {
  const el = document.createElement("div");
  document.body.appendChild(el);
  // 我们将元素附加到 document.body，以确保事件能够生效
  ReactDOM.render(<App />, el);
  const button = el.childNodes[0];
  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
  expect(button.innerHTML).toBe("3");
});
```

这段代码“按预期”工作。对于由“真实”事件处理程序调用的 `setState`，不会触发警告，并且从所有目的上看，这段代码实际上是没问题的。

但你开始怀疑，并且因为 Sunil 提醒过你，所以你对测试做了一些调整：

```javascript
act(() => {
  for (let i = 0; i < 3; i++) {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  }
});
expect(button.innerHTML).toBe(3); // 测试失败，结果实际上是 "1"！
```

测试失败了，`button.innerHTML` 显示的结果竟然是 `"1"`！  
嗯，糟糕吧？一开始这看起来让人很烦恼。但 `act` 在这里揭示了一个潜在的问题——如果事件处理程序的调用间隔很短，处理程序可能会使用**过时的数据**，从而导致错过一些增量操作。

修复方法很简单：我们将 `setState` 的调用改为使用更新器形式，例如：

```javascript
setCounter((x) => x + 1);
```

然后测试就能通过了。  
这展示了 `act` 的价值：通过分组和执行交互，它能够帮助我们写出更“正确”的代码。  
耶！谢谢你，`act`！

# 解决程序中的记时事件 promise 等待：。。。

https://github.com/mrdulin/react-act-examples/blob/master/sync.md

# 这 B 测试看的我头昏眼花恹恹欲睡，几把以后估计也不会写多少。

# Prop types 检查程序：

注意：报错是在 console 而不是 vscode 中
默认值 defaultProps 也受约束。另外只在生产环境起作用.

# 和 ts 的区别是这个是运行时

```npx
npm install --save prop-types

```

## Example

```jsx
import PropTypes from "prop-types";

const RenderName = (props) => {
  return <div>{props.name}</div>;
};

RenderName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RenderName;
```

## 可以传递 default prop

优先于 js 自带

```
RenderName.defaultProps = {
  name: 'Zach',
};
```

注意：如果配合函数组件 export 不能写在声明里。要放在最后，prop 之后
关于更多类型限制：https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
自定义 prop:
https://blog.logrocket.com/validate-react-props-proptypes/

# 客户端路由：

切换页面+URL 但是不刷新页面的技术
路由库：

```
npm install react-router-dom
```

客户端路由的好处：不会清空页面而是在此基础之上进行修改，可以添加过长动画，因为不需要请求新的文档+CSS
配置路由的第一步：
main.jsx 配置路由：
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
主程序换成路由器：
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>, // 配置根元素
  },
]);
<>
<RouterProvider router="{router}" />
</>
```
## 错误页面元素添加
```jsx
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
```
# 配置其他路由，往列表里加入字典：
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,（基于跟路径，如果访问出错）
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
```
# 配合OutLet实现上面的 不用清空父页面的所有元素，而是更新：
使用OutLet组件
```jsx
import { Outlet } from "react-router-dom";
export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
```
而且要配置为children 路由（嵌套路由）：
如果要配置默认：
可以这样的：
```jsx
  { index: true, element: <DefaultProfile /> },
```
```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```
使用Link 确保不请求新的文档
# 路由中的动态段：
```jsx
  {
    path: "profile/:name",
    element: <Profile />,
  },
```
组件可以这样获取：
import { useParams } from "react-router-dom";
  const { name } = useParams();
# Outlet数据处理：
outlet 有一个 context的prop 父组件传递后，子组件可以使用：
 const { name, age, occupation } = useOutletContext();
 来获取
 # navigae:
 绑定到事件或者副作用上的自动导航：
 ```jsx
 import { useNavigate } from "react-router";

export function LoginPage() {
  let navigate = useNavigate();

  return (
    <>
      <MyHeader />
      <MyLoginForm
        onSuccess={() => {
          navigate("/dashboard");
        }}
      />
      <MyFooter />
    </>
  );
}
 ```
 # TODO:https://blog.webdevsimplified.com/2022-07/react-router/
 # 请求的处理：
 先处理response.status 是否有404 外部挂一个error state 作为渲染时候处理错误用
 ```jsx
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].url))
    .catch((error) => setError(error));
}, []);
 ```
 进一步升级，还可以设置一个loading 状态：
 ```jsx
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].url))
    .catch((error) => setError(error));
}, []);
 ```
 # waterfall requests请求瀑布
 如果子父都有请求，那么子的请求会额外等待父的请求结束
 需要注意的是试图调换顺序是不行的：
 ```jsx
 const Parent = () => {
  // set loading to true initially
  const [isLoading, setIsLoading] = useState(true);

  // child is now here! before return
  const child = <Child />;

  if (isLoading) return 'loading';

  return child;
};
 ```
 解决方法：提升：
 ```jsx
 useEffect(async () => {
  const [sidebar, issue, comments] = await Promise.all([
    fetch('/get-sidebar'),
    fetch('/get-issue'),
    fetch('/get-comments'),
  ]);
}, []);
或者分布等待，使用老式的then:

 ```
 # 自定义狗子：
 useXXX 函数，内部调用effect。
 React只允许 狗子调用狗子，或者component
 ```jsx
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("server error");
      }
      return response.json();
    })
    .then((response) => setImageURL(response[0].url))
    .catch((error) => setError(error));
}, []);
 ```
 # 终止异步请求：
 注意不同于ignore  这种是完全制止
 ```jsx
 useEffect(() => {
  const controller = new AbortController();

  const fetchSinglePost = async () => {
    try {
      const postData = await getRequestWithNativeFetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        controller.signal
      );
      // ...
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Aborted');
        return;
      }
      // ...
    } finally {}
  };

  fetchSinglePost();

  return () => controller.abort();
}, [postId]);
 ```
 https://blog.logrocket.com/modern-api-data-fetching-methods-react/
 free API:https://jsonplaceholder.typicode.com/

 # TODO:https://www.developerway.com/posts/how-to-fetch-data-in-react#part5