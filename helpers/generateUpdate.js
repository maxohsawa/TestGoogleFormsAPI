const processRequests = require('./processRequests');

function generateUpdate(formId) {
      
    const { insertionOrderedRequests, moveItemRequests } = processRequests();

    const update = {
        requests: [
            ...insertionOrderedRequests,
            ...moveItemRequests
        ]
    };

    return update;
            
}
        
module.exports = generateUpdate
/*
    {
        "includeFormInResponse": boolean,
        "requests": [
            {
                "updateFormInfo": {
                    object (UpdateFormInfoRequest)
                },
                "updateSettings": {
                    object (UpdateSettingsRequest)
                },
                "createItem": {
                    "item": {
                        "itemId": string,
                        "title": string,
                        "description": string,

                        // Union field kind can be only one of the following:
                        "questionItem": {
                            object (QuestionItem)
                        },
                        "questionGroupItem": {
                            object (QuestionGroupItem)
                        },
                        "pageBreakItem": {
                            object (PageBreakItem)
                        },
                        "textItem": {
                            object (TextItem)
                        },
                        "imageItem": {
                            object (ImageItem)
                        },
                        "videoItem": {
                            object (VideoItem)
                        }
                    },
                    "location": {
                        object (Location)
                    }
                },
                "moveItem": {
                    object (MoveItemRequest)
                },
                "deleteItem": {
                    object (DeleteItemRequest)
                },
                "updateItem": {
                    object (UpdateItemRequest)
                }
            }
        ],
        "writeControl": {
            object (WriteControl)
        }
    }
*/