JSONP 由两部分组成：回调函数和数据

```
function handleResponse (response) {
  console.log(resopnse)
}

var script = document.createElement("script")
script.src = "http://baidu.com?callback=handleResponse"
document.body.insertBefore(script, document.body.firstChild)
```

`<script>` 和 `<img>` 的 src 都有能力不受限制地从其他域加载资源

缺点：
- 如果其他域不安全，很可能在响应中夹带一些恶意代码
- 要确定JSONP请求是否失败并不容易