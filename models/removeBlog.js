var schema = require('./schema'),
    url = require('url');

module.exports = function (req, res) {
    if (/\/remove/.test(req.url)) {
        var newData = url.parse(req.url, true);
        var id = newData.query.id.replace(/\"/g, '');

        schema.deleteOne({ _id: id }, function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('删除成功');
            }
        })
    }
}