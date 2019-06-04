```
var a = 1
function foo () {
  console.log(this.a)
}
foo()
```
对于直接调用的 `foo` 来说，不管 `foo` 函数放在了什么地方，`this` 一定是 `window`

```
const obj = {
  a: 2,
  foo: foo
}
obj.foo()
```
对于 `obj.foo()` 来说，谁调用了函数，谁就是 `this`，所以 `foo` 函数中的 `this` 就是 `obj` 对象
```
const c = new foo()
```
对于 `new` 的方式来说，`this` 被永远绑定在了 `c` 上面，不会被任何方式改变 `this`

**箭头函数**
