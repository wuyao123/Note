```javascript
const promise = new Promise(function(resolve, reject) {
  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
})

promise.then(function(value) {
  // success
}, function(error){
  // failure
})
```

**`.then()`**
**`.catch()`**
**`.finally()`** 不管 `Promise` 对象的状态如何，都会执行


**`Promise.all()`**

```javascript
const p = Promise.all([p1, p2, p3])
```
- 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
- 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。