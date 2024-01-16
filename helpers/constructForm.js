'use strict';

const path = require('path');
require('dotenv').config();
const google = require('@googleapis/forms');
const {authenticate} = require('@google-cloud/local-auth');
const generateUpdate = require('./generateUpdate')

async function constructForm(businessName) {

  const authClient = await authenticate({
    keyfilePath: path.join(__dirname, '../credentials.json'),
    scopes: 'https://www.googleapis.com/auth/drive',
  });

  const forms = google.forms({
    version: 'v1',
    auth: authClient,
  });

  const newForm = {
    info: {
      title: businessName,
      documentTitle: businessName,
    },
  };

  const freshForm = await forms.forms.create({
    requestBody: newForm,
  });

  const update = generateUpdate();

  const res = await forms.forms.batchUpdate({
    formId: freshForm.data.formId,
    requestBody: update,
  });

  return freshForm

}




module.exports = constructForm;