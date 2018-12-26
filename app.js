var http = require('http');
var fs = require('fs');
var getindex = require('./models/getIndex'),
    staticFile = require('./models/staticFile'),
    reachPublic = require('./models/reachPublic');


var server = http.createServer((req, res) => {
    getindex(req, res);

    reachPublic(req, res);
    staticFile(req, res);
    /*  var urls = req.url;
     console.log('当前的请求是:' + urls);
     if (urls === '/') {
         res.writeHead(200, { 'Content-Type': 'text/html' })
         fs.readFile('./view/index.html', 'utf-8', function (err, data) {
             if (err) {
                 console.error(err);
             }
             res.end(data);
         })
 
     }
     else if (/\.css$/.test(urls)) {
         res.writeHead(200, { 'Content-Type': 'text/css' })
         fs.readFile(`./${urls}`, function (err, data) {
             if (err) {
                 console.error(err);
             }
             res.end(data);
         })
     } else if (/\.js$/.test(urls)) {
         ;
         res.writeHead(200, { 'Content-Type': 'application/x-javascript' });
         fs.readFile(`./routes${urls}`, function (err, data) {
             if (err) {
                 throw err;
             }
             res.end(data);
         });
     } else if (/\.gif$/.test(urls)) {
         res.writeHead(200, { 'content-type': 'text/gif' });
         fs.readFile(`.${urls}`, function (err, data) {
             if (err) {
                 console.error(err);
             } else {
                 console.log(data);
             }
         })
     }
  */


});
server.listen(9000, function () {
    console.log('running');
})

// server.on('request', function (req, res) {

// });
