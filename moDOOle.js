var http = require('http');
var url = require('url');
var fs = require('fs');
//var fromIndex = require('./app.js');
var md = require('./moDOOle.js');

exports.log = function () {
    console.log('looool')
};

exports.route = function (routeName, fileName) {
    req = fromIndex.getReq();
    res = fromIndex.getRes();

        if(req.url == routeName){
            md.showHTML(fileName, res);
        }
};

exports.showHTML = function (fileName, res) {
            fs.readFile("./routes/" + fileName, function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
};