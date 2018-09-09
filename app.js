/**
 *
 Create by huangwenqing on 2018/4/1.
 */

require('app-module-path').addPath(__dirname);
var server = require('app/restifyServer').server;


server.listen(8080, function () {
    console.log('server running...');
});
