## 操作 DOM

- getElementById
- getElementsByClassName
- getElementByTagName
- querySeletor
- querySelectorAll
- parentNode
- childNodes
- previousSibling
- nextSibling
- createElement(tagName)
- appendChild(child) 添加到父节点的子节点的最后
- prepend(chiid) 添加到父节点的子节点最前
- insertBefore(newElement, Element)
```bash
insertBefore 方法可以将 newElement 插入到 Element 前面，如果 Element 是 null，则将 newElement 插入到父元素的尾部。

如果 newElement 已经存在文档中的 Dom，insertBefore 则会表现为移动该 Dom
```
- removeChild
  

## 修改 DOM

- innerHTML 获取标签内的所有内容
- innerText 只获取标签内的文字内容
- element.style
- element.className
- element.setAttribute(name, value)
- element.removeAttribute(name)
