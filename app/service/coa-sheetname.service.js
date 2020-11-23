const COASheetname = require('../models/coa-sheetname.model');

const COASheetnameService = {
    FindAll: (req) => {
        return COASheetname.find();
    }
}

module.exports = COASheetnameService;