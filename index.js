const fs = require('fs')
const followRedirects = require('follow-redirects')
const FormData = require('form-data')
const axios = require('axios')

//Increase max size of request
followRedirects.maxRedirects = 10;
followRedirects.maxBodyLength = 500 * 1024 * 1024 * 1024; // 500 GB

const URL = "http://localhost:5000/serve"

const f1 = fs.createReadStream("./samples/001.dcm")
const f2 = fs.createReadStream("./samples/002.dcm")
const f3 = fs.createReadStream("./samples/003.dcm")
const f4 = fs.createReadStream("./samples/004.dcm")

// FAke MRN
const MRN = '11111111'
// Fake Accession
const ACCESSION = '2222222'

// const METADATA = {'mrn':MRN, 'accession': ACCESSION}
/*
    Example risk factors file in samples_data.
    Documentation explaining this file format is available at docs/RISK_FACTORS.md
*/
// Demo of how to use MIRAI. Note, this is applicable for all MIRAI applications.

// 1. Load dicoms. Make sure to filter by view, MIRAI will not take responsibility for this.
const form = new FormData()
form.append('mrn', MRN)
form.append('accession', ACCESSION)
form.append('dicom',f1)
form.append('dicom',f2)
form.append('dicom',f3)
form.append('dicom',f4)

/*
1.5. Load risk factor metadata in case of models that also condition on
traditional risk factor information like MIRAI v0.2 (i.e. hybrid DL)
*/

/*
 2. Send request to model at /serve with dicoms in files field, and any metadata in the data field.
 Note, form should contain a dicoms as above:
 [ ('dicom': bytes), '(dicom': bytes)', ('dicom': bytes) ].
Deviating from this may result in unexpected behavior.
*/

axios.post(URL, form, {'headers': {'Content-Type':`multipart/form-data; boundary=${form.getBoundary()}`}}).then(
  function(response) {
    console.log(response.data)
  }).catch(
  function(err) {
    console.log(err)
  })
