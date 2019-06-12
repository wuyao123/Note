> 参考文章：
> 1. [Flutter 核心概念详解： Widget、State、Context 及 InheritedWidget](https://juejin.im/post/5c768ad2f265da2dce1f535c#heading-16)
> 2. [Flutter部件内部状态管理小结](https://juejin.im/post/5cff0e3d6fb9a07eab6876a8#heading-5)

`Widget`分为两种：无状态 `widget` 和有状态 `widget`

### 无状态 `widget`
无状态是指成员变量不可改变，创建无状态组件步骤：
1. 创建一个类继承 `StatelessWidget`
2. 实现 `build` 方法

### 有状态 `widget`
有状态则是指该 widget 内部的成员变量可以不使用final修饰符，并通过setState()方法改变成员变量的值时，引起 widget 的状态改变并重绘

有状态 `widget` 通过实现 `StatefulWidget` 和 `State` 两个子类实现，步骤：
1. 创建一个 `Widget` 类，继承 `StatefulWidget`
2. 创建一个继承 `State` 的类
3. 在 `State` 类里创建状态（成员变量），并实现 `build` 方法




