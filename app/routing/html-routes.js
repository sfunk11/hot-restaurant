const path = require("path");

module.exports = function (app){
    app.get('/tables', function (req, res) {
        res.sendFile(__dirname + "/../public/view.html");
      });
    app.get('/reserve', function (req, res) {
        res.sendFile(__dirname + "/../public/make.html");
      });
    app.use( function (req, res) {
        res.sendFile(__dirname + "/../public/home.html");
      });
}

