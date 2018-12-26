var fs = require('fs');

module.exports = function (req, res) {
    var urls = req.url;
    console.log(urls);
    if (/\/routes/.test(urls)) {
        if (/\.css$/.test(urls)) {
            res.writeHead(200, { 'content-type': 'text/css' })
            fs.readFile(`./${urls}`, function (err, data) {
                if (err) {
                    throw err;
                }
                res.write(data);
                res.end();
            })
        } else if (/\.js$/.test(urls)) {
            ;
            res.writeHead(200, { 'Content-Type': 'application/x-javascript' });
            fs.readFile(`./${urls}`, function (err, data) {
                if (err) {
                    throw err;
                }
                res.end(data);
            });
        } else if (/\.gif$/.test(urls)) {
            res.writeHead(200, { 'content-type': 'text/gif' });
            fs.readFile(`./${urls}`, function (err, data) {
                if (err) {
                    throw err;
                }
                res.write(data);
                res.end();

            })
        } else {
            res.writeHead(200, { 'content-type': 'text/ico' })
            fs.readFile(`./${urls}`, function (err, data) {
                if (err) {
                    throw err;
                }
                res.write(data);
                res.end();
            })
        }
        return;
    }

}