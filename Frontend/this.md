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
```
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
```
- 箭头函数中没有 `this`，箭头函数中的 `this` 只取决包裹箭头函数的第一个函数的 `this`

**bind**
```
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => window
```
- `this` 取决于第一个参数，如果参数为空，则 `this` 为 `window`
- 不管给函数 `bind` 几次，`fn` 中的 `this` 永远由第一次 `bind` 决定，所以结果永远是 `window`


**优先级**
1. `new`
2. `bind` 等
3. `obj.foo()`这种调用方式
4. `foo()`这种调用方式
同时，箭头函数的
