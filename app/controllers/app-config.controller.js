const AppConfigService = require('../service/app-config.service');

exports.findAll = (req, res) => {
    AppConfigService.FindAll()
        .then(appconfigs => {
            res.send(appconfigs);
        })
}

exports.validationThreshold = (req, res) => {
    AppConfigService.validationThreshold().then(masterValues => {
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