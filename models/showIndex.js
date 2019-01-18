/* var schema = require('./schema'),
    url = require('url'); */
var fs = require('fs'),
    url = require('url');

module.exports = function (req, res) {
    if (req.url === '/') {
        res.writeHead(302, {
            'Location': '/impress/'
        });

        res.end();
    }

    if (/^\/impress\//.test(req.url)) {
        fs.readFile('./view/index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8;' });
            res.write(data);
            res.end();
        })
    }
}