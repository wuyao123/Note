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

