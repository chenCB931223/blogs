
var schema = require('./schema'),
    queryString = require('querystring');

module.exports = function (req, res) {
    if (req.url === '/api/public' && req.method === 'POST') {
        var data = '';

        req.on('data', function (chunk) {
            data += chunk;
        })

        req.on('end', function () {
            var obj = queryString.parse(data);
            var date = new Date(new Date().getTime());
            var title = obj.title,
                text = obj.content;
            schema.find({
                title: title
            }).then(function (doc) {
                console.log(doc);
                var blog = new schema({
                    title: title,
                    content: text,
                    date: date,
                })

                return blog.save();
            }).then(function (newData) {

                var body = JSON.stringify(newData);
                res.writeHead(200, { 'content-type': 'text/html' });

                res.write(body);
                res.end();

                return newData;
            }).catch(function (err) {
                throw err;
            });
            return;

        })
    }
}