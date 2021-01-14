const TemplateTypeService = require('../service/templateTypes.service');

exports.find = (req, res) => {
    TemplateTypeService.find().then(templateTypes => {
        res.status(200).json({
            status: 'success',
            data: templateTypes,
            error: null,
        });
    }).catch(error => {
        res.status(400).json({
            status: 'error',
            data: null,
            error,
        });
    });
};
