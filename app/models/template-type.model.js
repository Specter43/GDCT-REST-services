const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const TemplateTypeModel = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    templateWorkflowId: { type: ObjectId, ref: 'Workflow' },
    submissionWorkflowId: { type: ObjectId, ref: 'Workflow' },

    programIds: [{ type: ObjectId, ref: 'Program' }],

    isApprovable: { type: Boolean },
    isReviewable: { type: Boolean },
    isSubmittable: { type: Boolean },
    isInputtable: { type: Boolean },
    isViewable: { type: Boolean },
    isReportable: { type: Boolean },
    isActive: { type: Boolean },
}, {collection: 'TemplateType'});

module.exports = mongoose.model("TemplateType", TemplateTypeModel);