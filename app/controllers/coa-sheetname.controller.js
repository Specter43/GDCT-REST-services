const COASheetnameService = require('../service/coa-sheetname.service');

exports.findAll = (req, res) => {
    COASheetnameService.FindAll()
        .then(coasheetname => {
            res.send(coasheetname);
        })
}