[Webpack打包流程细节源码解析](https://www.jianshu.com/p/1b1291be8d6c)

[细说webpack之流程篇](https://www.cnblogs.com/yxy99/p/5852987.html)

[UMD规范的代码推演](https://bbs.huaweicloud.com/blogs/112659)

[webpack的面试题总结](https://blog.csdn.net/duyujian706709149/article/details/97299339)

[Webpack揭秘——走向高阶前端的必经之路](https://imweb.io/topic/5baca58079ddc80f36592f1a)

[Webpack 原理浅析](https://www.cnblogs.com/o2team/p/13398432.html)

[webpack 实战问题解析](https://www.yuque.com/u1113084/dsregg/nolwsb#17HsH)

[Webpack面试](https://github.com/george-wq/StudyNotes/issues/16)

![](https://img.alicdn.com/tps/TB1GVGFNXXXXXaTapXXXXXXXXXX-4436-4244.jpg)

loader 用来处理不同的文件
plugin 用来扩展 webpack 的功能

glup和grunt需要开发者将整个前端构建过程拆分成多个task，并合理控制所有 task 的调用关系
webpack需要开发者找到入口，并需要清楚对于不同的资源应该使用什么loader做何种解析和加工

webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用webpack提供的api改变webpack的运行结果

热更新
![](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9waWMzLnpoaW1nLmNvbS84MC92Mi00MGZmN2YyZTUxOGU0YjQ2OTU3NzdkNTE2MGEzNDA2ZV9oZC5qcGc)

![](https://img2020.cnblogs.com/other/1992869/202007/1992869-20200729173015951-1581116104.png)


ES6模块 和 CommonJS模块的差异

1. CommonJS模块输出的值是值的拷贝，ES6模块输出的是值的引用
2. CommonJS在运行时加载，ES6模块是编译的时输出接口