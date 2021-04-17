const express = require('express')
const app = express()

app.use('/admin', function(req, res) {
    console.log(req.originalUrl);
    console.log(req.baseUrl);
    console.log(req.path);
    res.send("你好")
})

app.listen(3333);