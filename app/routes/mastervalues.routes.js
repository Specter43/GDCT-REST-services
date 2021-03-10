module.exports = (app) => {
    const mastervalues = require('../controllers/mastervalues.controller.js');

    app.get('/mastervalues', mastervalues.find);

    app.get('/mastervalues/:organization/:category/:attribute', mastervalues.findByParams);

    app.post('/mastervalues/all', mastervalues.findAll);

    app.get('/mastervalues/all', mastervalues.findGetAll);

}