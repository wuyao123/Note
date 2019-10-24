```javascript
Promise.all = function(promises) {
  let arr = []
  let i = 0
  function processData(index, data) {
    arr[index] = data
    i++
    if(i === promises.length) {
      
    }
  }
}

```