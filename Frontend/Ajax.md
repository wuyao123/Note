```
var xhr = new XHttpRequest()
xhr.open('get', 'example.text', false)
xhr.send(null)
```

readyState:
- 0 : 未初始化
- 1 : 启动。已经调用open()方法，但尚未调用send()方法
- 2 : 发送。已经调用send()方法，但尚未接收到响应
- 3 : 