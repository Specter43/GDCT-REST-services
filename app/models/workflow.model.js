const mongoose = require('mongoose');

const WorkflowModel = mongoose.Schema({
    name: {
        type: String
    },
}, {collection: 'Workflow'});

module.exports = mongoose.model("Workflow", WorkflowModel);