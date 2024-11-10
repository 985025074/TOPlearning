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
ctrl+k
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
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}
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