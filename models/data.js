
var schema = require('./schema'),
    queryString = require('querystring');

module.exports = function (req, res) {
    if (req.url === '/public/api' && req.method === 'post') {
        var data = '';

        req.on('data', function (chunk) {
            data += chunk;
        })

        req.on('end', function () {
            var obj = queryString.parse(data);

            schema.find({
                title: obj.title
            }).then(function (doc) {
                var blog = new schema({
                    title: obj.title,
                    content: obj.text,
                    date: new Date()
                })

                return blog.save();
            }).then(function (newData) {
                var body = JSON.stringify(newData);
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(body);

                return newData;
            }).catch(function (err) {
                console.error(err);
            })
        })
    }
}