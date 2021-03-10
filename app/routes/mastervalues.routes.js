module.exports = (app) => {
    const mastervalues = require('../controllers/mastervalues.controller.js');
    //'https://gdctrest.azurewebsites.net', 'http://localhost:3000', 'http://localhost:3003'
    app.use((req, res, next) => {
        console.log(req.headers.host)
        res.set('Access-Control-Allow-Origin', ['http://localhost:3000']);
        next();
    });

    app.get('/mastervalues', mastervalues.find);

    app.get('/mastervalues/:organization/:category/:attribute', mastervalues.findByParams);

    app.post('/mastervalues/all', mastervalues.findAll);

    app.get('/mastervalues/all', mastervalues.findGetAll);

}