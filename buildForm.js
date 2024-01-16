const fs = require('fs');
const constructForm = require('./helpers/constructForm.js')

async function main() {
    const businessName = process.argv.slice(2).join(' ');
    const response = await constructForm(businessName);

    if (response.status !== 200) {
        console.error('Failed to construct form.')
        return;
    }

    const { formId, responderUri: formUrl } = response.data
    console.log(`${formId},${formUrl}`);
}

main();