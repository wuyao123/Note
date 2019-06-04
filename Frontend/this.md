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
```
