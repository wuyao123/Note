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

```ja
