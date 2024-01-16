const { items } = require('../data/formConstructData.json');
const generateMoveItemRequests = require('./generateMoveItemRequests')

function processRequests() {
    const allRequests = items.map(((item, index) => ({
        createItem: {
            item,
            location: {
                index
            }
        }
    })));
    
    const pageBreakItems = allRequests.filter((request) => request.createItem.item.pageBreakItem);
    const allOtherItems = allRequests.filter((request) => !request.createItem.item.pageBreakItem);

    const insertionOrderedRequests = [...pageBreakItems, ...allOtherItems].map((request, index) => {
        request.createItem.location.index = index;
        return request;
    })
    
    const moveItemRequests = generateMoveItemRequests(items, pageBreakItems.length);
    
    return {
        insertionOrderedRequests,
        moveItemRequests
    };
}

module.exports = processRequests;