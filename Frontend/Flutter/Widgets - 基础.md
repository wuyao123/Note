[<<Flutter 实战>>](https://book.flutterchina.club)

## 文本、字体样式

### Text
```js
Text("Hello world",
  textAlign: TextAlign.center,
);

Text("Hello world! I'm Jack. "*4,
  maxLines: 1,
  overflow: TextOverflow.ellipsis,
);

Text("Hello world",
  textScaleFactor: 1.5,
);
```
- `textAlign`
- `maxLines`、`overflow`
- `textScaleFactor`

### TextStyle
```js
Text("Hello world",
  style: TextStyle(
    color: Colors.blue,
    fontSize: 18.0,
    height: 1.2,  
    fontFamily: "Courier",
    background: new Paint()..color=Colors.yellow,
    decoration:TextDecoration.underline,
    decorationStyle: TextDecorationStyle.dashed
  ),
);
```
### TextSapn
```js
Text.rich(TextSpan(
    children: [
     TextSpan(
       text: "Home: "
     ),
     TextSpan(
       text: "https://flutterchina.club",
       style: TextStyle(
         color: Colors.blue
       ),  
       recognizer: _tapRecognizer
     ),
    ]
))
```
### DefaultTextStyle
```js
DefaultTextStyle(
  //1.设置文本默认样式  
  style: TextStyle(
    color:Colors.red,
    fontSize: 20.0,
  ),
  textAlign: TextAlign.start,
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      Text("hello world"),
      Text("I am Jack"),
      Text("I am Jack",
        style: TextStyle(
          inherit: false, //2.不继承默认样式
          color: Colors.grey
        ),
      ),
    ],
  ),
);
```

## 按钮

### RaisedButton 漂浮按钮

```js
RaisedButton(
  child: Text("normal"),
  onPressed: () => {},
);
```

### FlatButton 扁平按钮

```js
FlatButton(
  child: Text("normal"),
  onPressed: () => {},
)
```

### OutlineButton 带边框

```js
OutlineButton(
  child: Text("normal"),
  onPressed: () => {},
)
```