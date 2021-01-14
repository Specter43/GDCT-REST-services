const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const COASheetnameModel = mongoose.Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    isActive: {
        type: Boolean
    },
    templateTypeId: {
        type: ObjectId
    }
}, {collection: 'SheetName'});

module.exports = mongoose.model("COASheetname", COASheetnameModel);