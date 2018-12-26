var fs = require('fs');

module.exports = function (req, res) {
    if (req.url === '/public') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.readFile('./view/public.html', function (err, data) {
            if (err) {
                throw err
            }
            res.write(data);
            res.end();
        });
    }
}