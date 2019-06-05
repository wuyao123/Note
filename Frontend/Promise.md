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
- 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给p的回调函数。
- 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

**`Promise.resolve()`**

将现有的对象转为 `Promise` 对象
