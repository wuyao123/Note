JSONP 由两部分组成：回调函数和数据

```
function handleResponse () {
	
}

var script = document.createElement("script")
script.src = "http://baidu.com?callback=handleResponse"
document.body.insertBefore(script, document.body.firstChild)
```