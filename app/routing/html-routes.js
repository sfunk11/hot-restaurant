const path = require("path");

module.exports = function (app){
    app.get('/tables', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/view.html"));
      });
    app.get('/reserve', function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/make.html"));
      });
    app.get( "/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
      });
}

