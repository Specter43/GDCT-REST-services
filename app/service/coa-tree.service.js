const COA = require('../models/coa.model');
const COATree = require('../models/coa-tree.model');
const COAGroup = require('../models/coa-group.model');
const COASheetname = require('../models/coa-sheetname.model');

var exclude = {
    __v: false,
};

const COATreeService = {
    FindAll: (res) => {
        var ret = [];
        COATree.find({}, exclude, (err, trees) => {
            var len = 0; // length of documents
            trees.forEach(tree => {
                tree = JSON.parse(JSON.stringify(tree))

                // Find the category group assosiated with the tree
                // COAGroup = CategoryGroup (in database)
                COAGroup.findOne({ _id: tree.categoryGroupId }, exclude, (err, group) => {
                    // COATree = CategoryTree (in database)
                    COATree.findOne({ _id: tree.parentId }, exclude, (err, parent) => {
                        var ParentNode = parent
                        ParentNode = JSON.parse(JSON.stringify(ParentNode))
                        if (ParentNode) {
                            delete ParentNode['categoryId']
                            delete ParentNode['sheetNameId']
                        }

                        var categoryGroup = group
                        var categoryIdsNames = []
                        tree.categoryId.forEach((coa) => {
                            // COA = Category (in database)
                            COA.find({ id: coa }, exclude, (err, category) => {
                                if (category.length > 0) {
                                    var temp = category[0]; // whole json object
                                    temp.categoryGroupId = categoryGroup._id;
                                    categoryIdsNames.push(temp);
                                }
                            })
                        })
                        
                        var sheetName = new Object;
                        COASheetname.findOne({ _id: tree.sheetNameId }, exclude, (err, sheetname) => {
                            // sheetname = null if there are sheetNameIds exist in CategoryTree Collection, 
                            // but not for Sheetname Collection itself.
                            if (sheetname) {
                                // COASheetname = SheetName (in database)
                                sheetName._id = tree.sheetNameId;
                                sheetName.id = sheetname.id;
                                sheetName.name = sheetname.name;
                                sheetName.isActive = sheetname.isActive;
                                sheetName.templateTypeId = sheetname.templateTypeId;
                            }
                        })

                        // Construction of a Tree node
                        ret.push({
                            nodeId: tree._id,
                            parentId: ParentNode,
                            categoryGroup: categoryGroup,
                            sheet: sheetName,
                            categoryIds: categoryIdsNames
                        })

                        // Loop condition //////////////////////////////////////////////////////////////////////////////
                        if (++len === trees.length) {
                            setTimeout(() => {
                                res.send(ret);
                            }, 1000)
                        }
                    })
                })
            })
        })
    }
}

module.exports = COATreeService;
