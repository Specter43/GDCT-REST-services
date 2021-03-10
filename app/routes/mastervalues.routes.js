// const cors = require('cors');

// const whitelist = ['http://localhost:3000/',
//                    'https://gdctrest.azurewebsites.net'
//                 ];

// const corsOptions = {
//     origin: 'https://gdctrest.azurewebsites.net',
// } 

// const corsOptions1 = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     },
// }

module.exports = (app) => {
    const mastervalues = require('../controllers/mastervalues.controller.js');
    //'https://gdctrest.azurewebsites.net', 'http://localhost:3000', 'http://localhost:3003'
    app.use((req, res, next) => {
        console.log(req.headers.host)
        // res.set('Access-Control-Allow-Origin', ['http://localhost:3003']);
        res.set('Access-Control-Allow-Origin', [req.headers.host]);
        next();
    });

    app.get('/mastervalues', mastervalues.find);

    app.get('/mastervalues/:organization/:category/:attribute', mastervalues.findByParams);

    app.post('/mastervalues/all', mastervalues.findAll);

    app.get('/mastervalues/all', mastervalues.findGetAll);

}