var http = require('http');
var getindex = require('./models/getIndex'),
    staticFile = require('./models/staticFile'),
    reachPublic = require('./models/reachPublic'),
    data = require('./models/data'),
    blog = require('./models/blogs'),
    showIndex = require('./models/showIndex'),
    like = require('./models/like'),
    removeBlog = require('./models/removeBlog'),
    comment = require('./models/comment');

var mongoose = require('mongoose'),
    url = 'mongodb://localhost:27017/chen';
mongoose.connect(url, { useNewUrlParser: true }, function (err) {
    if (err) {
        console.error(err)
    } else {
        console.log('连接成功');
    }
})
var server = http.createServer((req, res) => {

    reachPublic(req, res);
    staticFile(req, res);
    data(req, res);
    blog(req, res);
    showIndex(req, res);
    getindex(req, res);
    comment(req, res);
    like(req, res);
    removeBlog(req, res);
});
server.listen(9000, function () {
    console.log(new Date() + 'running');
})
