'use strict';

const path = require('path');
const google = require('@googleapis/forms');
const {authenticate} = require('@google-cloud/local-auth');

const formID = process.argv[2];

async function runSample(query) {
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, 'credentials.json'),
    scopes: 'https://www.googleapis.com/auth/forms.responses.readonly',
  });
  const forms = google.forms({
    version: 'v1',
    auth: auth,
  });

  const allResponses = await forms.forms.responses.list({
    formId: formID,
  });
  console.log(allResponses.data);
  const answers = allResponses.data.responses[0].answers
  Object.values(answers).forEach(ans => console.log(ans.textAnswers.answers));

//   const responseId = allResponses.data.responses[0].responseId;

//   const singleResponse = await forms.forms.responses.get({
//     formId: formID,
//     responseId,
//   });
//   console.log(singleResponse.data);
//   return singleResponse.data;
}

if (module === require.main) {
  runSample().catch(console.error);
}
module.exports = runSample;