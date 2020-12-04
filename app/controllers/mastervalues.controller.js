const MasterValueService = require('../service/mastervalues.service');

exports.findGetAll = (req, res) => {
    const { organization, categories, attributes, templateType } = req.query;
    MasterValueService.findAll({
        organization, categories, attributes, templateType
    }).then(masterValues => {
        res.status(200).json({
            status: 'success',
            data: masterValues,
            error: null,
        });
    }).catch(error => {
        res.status(400).json({
            status: 'error',
            data: null,
            error,
        });
    });
}

exports.find = (req, res) => {
    const { organization, category, attribute, templateType } = req.query;
    if ((organization || category || attribute) && (!organization || !category || !attribute)) {
        throw new Error('All fields of organization, category and attribute are required');
    }
    
    MasterValueService.find({
        organization,
        category,
        attribute,
        templateType,
    }).then(masterValues => {
        res.status(200).json({
            status: 'success',
            data: masterValues,
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

exports.findByParams = (req, res) => {
    const { organization, category, attribute } = req.params;
    const { templateType = '' } = req.query;
    MasterValueService.find({
        organization,
        category,
        attribute,
        templateType,
    }).then(masterValues => {
        res.status(200).json({
            status: 'success',
            data: masterValues,
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

exports.findAll = (req, res) => {
    const { categories, attributes } = req.body;
    if (categories.length !== attributes.length) {
        throw new Error('The size of categories and attributes should be the same');
    }
    MasterValueService.findMasterValuesByJson(req.body).then(masterValues => {
        res.status(200).json({
            status: 'success',
            data: masterValues,
            error: null,
        });
    }).catch(error => {
        res.status(400).json({
            status: 'error',
            data: null,
            error,
        });
    })
};