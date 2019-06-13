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


## state 生命周期

widget是immutable的，发生变化的时候需要重建，所以谈不上状态。StatefulWidget 中的状态保持其实是通过State类来实现的。State拥有一套自己的生命周期，下面做一个简单的介绍。

|名称|状态|
|-|-|
|initState|插入渲染树时调用，只调用一次|
|didChangeDependencies|state依赖的对象发生变化时调用|
|didUpdateWidget|组件状态改变时候调用，可能会调用多次|
|didUpdateWidget|插入渲染树时调用，只调用一次|
|build|构建Widget时调用|
|deactivate|当移除渲染树的时候调用|
|dispose|组件即将销毁时调用|

生命周期状态图如下：

![title](https://i.loli.net/2019/06/13/5d0211b1309df29039.png)

### 几个注意点

- didChangeDependencies有两种情况会被调用。

  - 创建时候在initState 之后被调用

  - 在依赖的InheritedWidget发生变化的时候会被调用

- 正常的退出流程中会执行deactivate然后执行dispose。但是也会出现deactivate以后不执行dispose，直接加入树中的另一个节点的情况。

- 这里的状态改变包括两种可能：1.通过setState内容改变 2.父节点的state状态改变，导致孩子节点的同步变化