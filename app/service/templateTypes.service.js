const TemplateType = require('../models/template-type.model');

const TemplateTypeService = {
    find: () => {
        return TemplateType.find({},
        {
            name: 1,
            description: 1,
        });
    },
}

module.exports = TemplateTypeService;