[<<Flutter 实战>>](https://book.flutterchina.club)

# 文本、字体样式

## Text
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

## TextStyle
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
