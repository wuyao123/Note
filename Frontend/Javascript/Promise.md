```
class Promise {
  constructor(executor) {
    this.status = 'pendding'
  }
}

```

```javascript
Promise.all = function(promises) {
  let arr = []
  let i = 0
  function processData(index, data) {
    arr[index] = data
    i++
    if(i === promises.length) {
      resolve(arr)
    }
  }
  return new Promise((resolve, reject) => {
    for(let i=0;i<promises.length;i++){
      promises[i].then(data => {
        processData(i,data)
      }, reject)
    }
  })
}
```