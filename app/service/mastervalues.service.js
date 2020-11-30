const Master = require('../models/master-value.model');

const MasterValueService = {
    find: ({ organization, category, attribute, templateType }) => {
        if(!organization && !category && !attribute && !templateType) {
            return Master.find();
        }
        if (templateType) {
            return Master.find(
                {
                    'org.id': organization,
                    CategoryId: category,
                    AttributeId: attribute,
                    'templateType.name': templateType,
                },
                {
                    org: 1,
                    templateType: 1,
                    value: 1,
                    CategoryId: 1,
                    AttributeId: 1,
                }
            );
        }
        return Master.find(
        {
            'org.id': organization,
            CategoryId: category,
            AttributeId: attribute,
        },
        {
            org: 1,
            templateType: 1,
            value: 1,
            CategoryId: 1,
            AttributeId: 1,
        });
    },
    findMasterValuesByJson: ({ organization, categories, attributes }) => {
        return Promise.all(categories.map((category, idx) => MasterValueService.find({organization, category, attribute: attributes[idx]})));
    }
}

module.exports = MasterValueService;