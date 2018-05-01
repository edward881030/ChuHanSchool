/**
 *
 Create by huangwenqing on 2018/4/1.
 */

var restify = require('restify'),
    path    = require('path');

var server = restify.createServer();


server.use(restify.plugins.queryParser({mapParams: true}))
    .use(restify.plugins.bodyParser({mapParams: false}))
    .get(/^\/[a-zA-Z0-9]((.*)(\.)(.+))*$/, restify.plugins.serveStatic({directory: path.join(__dirname, '../views')}));


module.exports = {
    server: server
};