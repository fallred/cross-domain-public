let express = require('express');
let app = express();
app.get('/say', function(req, res){
    let {wd, cb} = req.query;
    console.log(wd);
    res.end(`${cb}('我不带你')`);
});
app.listen(3000);