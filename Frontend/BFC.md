**BFC的约束规则**
- 内部的Box会在垂直方向上一个接一个的放置
- 垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生重叠（塌陷），与方向无关。）
- 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
- BFC的区域不会与float的元素区域重叠
- 计算BFC的高度时，浮动子元素也参与计算
- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

**BFC 应用**
- 防止 margin 重叠
  - 两个相邻Box垂直方向margin重叠
  - 相邻Box水平方向margin重叠
  - 嵌套元素的margin重叠
- 清除内部浮动
- 自适应多栏布局

**创建 BFC**
- float 的值不是none
- position的值不是static或者relative
- display的为inline-block、table-cell、flex
- overflow的值不是visible

```js
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
  .clearfix{
    *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
  }
```