var querystring = require('querystring'),
    url = require('url'),
    schema = require('./schema');

module.exports = function (req, res) {
    if (/\/like/.test(req.url, true)) {
        var newUrl = url.parse(req.url, true);
        var id = newUrl.query.id.replace(/\"/g, '');
        schema.findOne({ _id: id }).then((doc) => {
            doc.like++;

            doc.save();
            return doc;
        }).then((doc) => {
            var html = JSON.stringify(doc)
            res.writeHead(200, { 'content-type': 'application/json' });
            res.write(html);
            res.end();

            return doc;
        }).catch((err) => {
            console.error(err);
        })
    }
}