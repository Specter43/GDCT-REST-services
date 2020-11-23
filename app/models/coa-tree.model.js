const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const CoaTreeModel = mongoose.Schema({
    nodeId: {
        type: ObjectId
    },
    categoryId: [{
        type: String
    }],
    parentId:{
        type: ObjectId
    },
    categoryGroup: {
        type: ObjectId
    },
    sheet: {
        
    }
}, {collection: 'CategoryTree'});

module.exports = mongoose.model("COATree", CoaTreeModel);