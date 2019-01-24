var schema = require('./schema');
var url = require('url'),
    template = require('art-template');

module.exports = (req, res) => {
    if (/\/acticle\//.test(req.url)) {
        var newUrl = url.parse(req.url, true);
        var id = newUrl.query.id;
        schema.findOne({
            _id: id
        }).then((doc) => {
            var html = template(__dirname + '/art-template/blog', doc);
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(html);
            res.end();

            return doc;
        }).catch((err) => {
            throw err;
        })
    }
}