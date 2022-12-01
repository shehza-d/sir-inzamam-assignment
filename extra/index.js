"use strict";
exports.__esModule = true;
var express_1 = require("express");
var path_1 = require("path");
var cors_1 = require("cors");
var app = (0, express_1["default"])();
var port = process.env.PORT || 5001;
app.use((0, cors_1["default"])());
app.get('/abc', function (req, res) {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
});
app.get('/weather', function (req, res) {
    console.log("request ip: ", req.ip);
    res.send({
        temp: 30,
        min: 26,
        max: 31,
        humidity: 72,
        serverTime: new Date().toString()
    });
});
app.get('/time', function (req, res) {
    console.log("request ip: ", req.ip);
    res.send('Hello World! ' + new Date().toString());
});
var __dirname = path_1["default"].resolve();
app.use('/', express_1["default"].static(path_1["default"].join(__dirname, './web/build')));
app.use('*', express_1["default"].static(path_1["default"].join(__dirname, './web/build')));
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
