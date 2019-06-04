**参考文献**
- [CSS 布局](https://brianway.github.io/2017/05/18/css-layout-classical-problems/)


**经典布局**
- 两栏自适应布局
  - `float + overflow: hidden`


- 圣杯：父盒子中的三个子盒子 `float: left`
  - 中间的盒子 `width: 100%`，独占一行
  - 左边的盒子 `margin-left:-100%`，把最左边的盒子拉上去
  - 右边的盒子 `margin-left: -右边盒子的宽度`，把右边的盒子拉上去
  - 父盒子设置左右 `padding`
  - 对左右盒子设置**相对定位**来占据 `padding` 所产生的空白，避免中间盒子的内容被覆盖


- 双飞翼：父盒子中的三个子盒子 `float: left`，在中间盒子中再添加一个子盒子
  - 中间的盒子 `width: 100%`，独占一行
  - 左边的盒子 `margin-left:-100%`，把最左边的盒子拉上去
  - 右边的盒子 `margin-left: -右边盒子的宽度`，把右边的盒子拉上去
  - 父盒子中的子盒子设置左右 `margin`，给左右盒子留位置