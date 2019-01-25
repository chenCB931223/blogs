var schema = require('./schema'),
    querystring = require('querystring');

module.exports = function (req, res) {
    if (/\/comment/.test(req.url)) {
        var body = '';

        req.on('data', function (chunk) {
            body += chunk;
        })
        req.on('end', function () {
            var data = querystring.parse(body);
            var id = data.id.replace(/\"/g, '');

            var comment = data.comment;
            var newDate = new Date();
            var date = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate() + ' '
                + newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds();
            schema.findOne({ _id: id }).then((doc) => {
                commentInfo = {
                    text: comment,
                    date: date

                }
                doc.comment.unshift(commentInfo);

                return doc.save();
            }).then((result) => {
                var newData = JSON.stringify(result.comment[0]);
                res.writeHead(200, { 'content-type': 'application/json' });
                res.write(newData);
                res.end();

                return result;
            }).catch((err) => {
                console.error(err);
            })
        })
    }
}