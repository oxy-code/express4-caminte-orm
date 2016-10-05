module.exports = function (app) {

    //routes
    var home = require('../app/controllers/home');

    app.get('/home', home.index);

    // when the requested uri is not found
    app.use(function(req, res) {
        res.status(404).send('Sorry, your request could not be found!');
    });

};