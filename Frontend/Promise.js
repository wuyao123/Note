const STATUS_PENDING = 'pending'
const STATUS_FULFILLED = 'fulfilled'
const STATUS_REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.status = STATUS_PENDING
    this.value = ''
    this.reason = ''
    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];

    let resolve = value => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_FULFILLED
        this.value = value
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }

    let reject = reason => {
      if (this.status === STATUS_PENDING) {
        this.status = STATUS_REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFulfilled = () => {}, onReject = () => {}) {
    let promise2
    if (this.status === STATUS_FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === STATUS_REJECTED) {
      onReject(this.reason)
    }
    if (this.status === STATUS_PENDING) {
      promise2 = new MyPromise((resolve, reject) => {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              onFulfilled(this.value)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              onRejected(this.reason)
            } catch (error) {
              reject(error)
            }
          }, 0)
        })
      })
    }
  }
  all(promises) {
    let i = 0;
    let result = [];
    function processData (index, data) {
      result[index] = data
      i++
      if (i === promises.length) {
        resolve(result)
      }
    }
    return new MyPromise ((resolve, reject) => {
      for (let i=0; i<promises.length;i++) {
        promises[i].then(data => {
          processData(i, data)
        }, reject);
      }
    })
  }
}

new MyPromise(resolve => {
  console.log('before resolve')
  setTimeout(()=>{
    resolve(1)
  },1000)
}).then(res => {
  console.log(res)
})