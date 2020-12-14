const AppConfig = require('../models/app-config.model');

const AppConfigService = {
    FindAll: (req) => {
        return AppConfig.find();
    },
    validationThreshold: () => {
        return AppConfig.findOne(
        {
            key: 'Validation Threshold'
        
        },
        {
            value: 1,
        });
    },
}

module.exports = AppConfigService;