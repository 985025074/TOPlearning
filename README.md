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
