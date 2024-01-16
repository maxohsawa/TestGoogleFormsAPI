function generateMoveItemRequests(items, numberOfPageBreakItems) {

    const moveItemRequests = [];

    let originalLocationCursor = numberOfPageBreakItems;
    let newLocationCursor = 0;

    for (let i = 0; i < items.length; i++) {

        if (items[i].pageBreakItem) {
            newLocationCursor++;
            continue;
        }

        
        moveItemRequests.push({
            moveItem: {
                originalLocation: {
                    index: originalLocationCursor
                },
                newLocation: {
                    index: newLocationCursor
                }
            }
        })

        originalLocationCursor++;
        newLocationCursor++;
    }
    
    return moveItemRequests;
}

module.exports = generateMoveItemRequests