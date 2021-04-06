[一文搞懂 flex 属性](https://juejin.cn/post/6844904079529869326)
[写给自己看的display: flex布局教程](https://www.zhangxinxu.com/wordpress/2018/10/display-flex-css3-css/)

容器存在两根轴：水平主轴（main axis）和 垂直交叉轴（cross axis）
容器上的属性：
```css
flex-direction: row | row-reverse | column | column-reverse

flex-wrap: nowrap | wrap | wrap-reverse

flex-flow: flex-direction 和 flex-wrap 简写

justify-content: flex-start | flex-end | center | space-between | space-around 主轴对其方式

align-item: flex-start | flex-end | center | baseline | stretch 交叉轴对其方式

align-content: flex-start | flex-end | center | space-between | space-around | stretch 多根轴线的对其方式

```

项目上的属性
```css
order: 项目排列顺序

flex-grow: 放大比例

flex-shrink: 缩小比例

flex-basic: 再分配多余空间之前，项目占据的主轴空间

flex: flex-grow | flex-shrink | flex-basic 简写

align-self: 单个项目的对其方式

```