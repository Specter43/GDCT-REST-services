module.exports = (app) => {
    const COASheetName = require('../controllers/coa-sheetname.controller');
    app.get('/sheetname', COASheetName.findAll);
}