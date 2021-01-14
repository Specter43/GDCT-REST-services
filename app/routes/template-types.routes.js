module.exports = (app) => {
    const templateTypes = require('../controllers/templateTypes.controller.js');

    app.get('/templatetypes', templateTypes.find);

}