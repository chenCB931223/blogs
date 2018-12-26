var http = require('http'),
    url = require('url'),
    util = require('util');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/javascript;charset=UTF-8' });

    var parmes = url.parse(req.url, true).query;

    res.write('网站名:' + parmes.name);

    res.write('\n');

    res.write('网站 URL' + parmes.url);

    res.end();
})
server.listen(3000);