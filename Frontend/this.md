```
var a = 1
function foo () {
  console.log(this.a)
}
foo()
```
```
const obj = {
  a: 2,
  foo: foo
}
obj.foo()
```
```
const c = new foo()
```
- 对于直接调用的 `foo` 来说，不管 `foo` 函数放在了什么地方，`this` 一定是 `window`
- 
