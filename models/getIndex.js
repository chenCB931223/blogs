var fs = require('fs');

module.exports = function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('./view/index.html', function (err, data) {
            if (err) {
                console.error(err);
            }
            res.end(data);
        })
    }
}