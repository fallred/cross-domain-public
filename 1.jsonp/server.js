let express = require('express');
let app = express();
app.get('/say', function(req, res){
    let {wd, cb} = req.query;
    console.log(wd);
    // 取出客户端请求参数，解析出回调函数，执行。
    res.end(`${cb}('我不带你')`);
});
app.listen(3000);