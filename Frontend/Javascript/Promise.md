```javascript
class Promise {
  constructor(executor) {
    this.status = 'pendding'
    this.value = undefined
    this.reason = undefined

    let resolve = (data) => {
      if(this.status === 'pendding') {
        this.status = 'resolve'
        this.value = data
      }
    }

    let reject = (data) => {
      if(this.status === 'pendding'){
        this.status = 'reject'
        this.reason = data
      }
    }

     try{
       executor(resolve, reject)
     }catch(e){
       reject(e)
     }
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

### 参考文章：
1. [Promise原理讲解 && 实现一个Promise对象 (遵循Promise/A+规范)](https://juejin.im/post/5aa7868b6fb9a028dd4de672)