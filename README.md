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


