var http = require('http');
var url = require('url');
var fs = require('fs');
const doo = require('modoole');

var viewFolder
var reqVar;
var resVar;

exports.setViewFolder = function (folderName = './views') {
    viewFolder = folderName;
};

exports.log = function () {
    req = reqVar;
    res = resVar;
    var q = url.parse(req.url, true);
    console.log('lolol = ' + q.pathname)
};

exports.functTest = function (port = 5000, code = function code(){}){
    code();
};

exports.web = function (port = 5000, code = function code(){}){
    http.createServer(function (req, res) {
        reqVar = req;
        resVar = res;
        code();
      }).listen(port);
};

exports.route = function (fileName, routeName = ''){
    req = reqVar;
    res = resVar;
    var q = url.parse(req.url, true);

    routeName = '/' + routeName;

    if(routeName == q.pathname){
        doo.renderHTML(fileName)
    }
    
};

exports.renderHTML = function (fileName){
    req = reqVar;
    res = resVar;
    fs.readFile(fileName, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};