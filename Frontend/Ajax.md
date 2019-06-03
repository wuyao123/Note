```
var xhr = new XHttpRequest()
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
   if () {}
  }
}

xhr.open('get', 'example.text', false)
xhr.send(null)
```

readyState:
- 0 : 未初始化
- 1 : 启动。已经调用open()方法，但尚未调用send()方法
- 2 : 发送。已经调用send()方法，但尚未接收到响应
- 3 : 接收。已经接收到部分响应数据
- 4 : 完成。已经接受到全部响应数据