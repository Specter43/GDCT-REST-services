const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const MasterValueModel = mongoose.Schema({
    submission: {
      _id: { type: ObjectId, ref: 'Submission' },
      name: { type: String },
    },
    sheet: {
      _id: { type: ObjectId, ref: 'Sheet' },
      name: { type: String },
    },
    reportingPeriod: { type: ObjectId, ref: 'ReportingPeriod' },
    program: {
      _id: { type: ObjectId, ref: 'Program' },
      name: { type: String },
    },
    org: {
      id: { type: Number, ref: 'Org' },
      name: { type: String },
    },
    templateType: {
      _id: { type: ObjectId, ref: 'TemplateType' },
      name: { type: String },
    },
    template: {
      _id: { type: ObjectId, ref: 'Template' },
      name: { type: String },
    },

    COATreeId: { type: String },
    CategoryId: { type: String },
    AttributeId: { type: String },

    value: { type: String },
}, {collection: 'MasterValue'});

module.exports = mongoose.model('MasterValue', MasterValueModel);