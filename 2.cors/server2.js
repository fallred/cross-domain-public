let express = require('express');
let app = express();
let whiteList = ['http://localhost:3000'];
app.use(function(req, res, next){
    let origin = req.headers.origin;
    // 设置哪个源可以访问我
    if (whiteList.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
        res.setHeader('Access-Control-Allow-Headers', 'name');
        res.setHeader('Access-Control-Allow-Methods', 'PUT');
        res.setHeader('Access-Control-Max-Age', 6000);
        if (req.method === 'OPTIONS') {
            // OPTIONS请求不做任何处理
            res.end();
        }
    }
    next();
});
app.put('/getData', function(req, res){
    console.log(req.headers);
    res.end('我不爱你');
});
app.get('/getData', function(req, res){
    console.log(req.headers);
    res.end('我不爱你');
});
app.use(express.static(__dirname));
app.listen(4000);