var fs = require('fs');
var schema = require('./schema');
var url = require('url'),
    template = require('art-template');

module.exports = function (req, res) {
    // if (req.url === '/') {
    //     fs.readFile('./view/index.html', function (err, data) {
    //         if (err) {
    //             console.error(err);
    //         }
    //         res.end(data);
    //     })
    // }
    if (req.url === '/index') {

        var newUrl = url.parse(req.url, true);
        var page_num = newUrl.query.page_num || 1;
        schema.find().sort({ _id: -1 }).then((docs) => {
            var limit = 3;
            var list = docs.slice(limit * (page_num - 1), limit * page_num);
            var pages = Math.ceil(docs.length / limit);

            var data = {
                limit: limit,
                list: list,
                pages: pages,
                docs: docs.length,
                page_num: page_num

            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
            return docs;
        }).catch((err) => {
            console.log(err);
        })

    }
}