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