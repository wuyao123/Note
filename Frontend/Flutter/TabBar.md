### TabBar

**参数**
```js
const TabBar({
    Key key,
    @required this.tabs, // item
    this.controller, //控制器
    this.isScrollable = false, //是否可以滑动
    this.indicatorColor, //指示器的颜色
    this.indicatorWeight = 2.0,
    this.indicatorPadding = EdgeInsets.zero,
    this.indicator,//自定义指示器
    this.indicatorSize,
    this.labelColor, // 选中文字颜色
    this.labelStyle, // 
    this.labelPadding, // 文字的内边距
    this.unselectedLabelColor, // 未选中文字颜色
    this.unselectedLabelStyle,
    this.dragStartBehavior = DragStartBehavior.start, 
    this.onTap,// 点击事件
  })
```

### TabBarView
 
**参数**
```js
 const TabBarView({
    Key key,
    @required this.children, // 每页的view
    this.controller, // 控制器
    this.physics,
    this.dragStartBehavior = DragStartBehavior.start,
  })

```
> 这两个用的时候，必须关联起来，否则报错