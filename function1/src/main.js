import { Client , Databases, Storage } from 'node-appwrite';
var fs = require('fs');
var vCardsJS = require('vcards-js');

const client = new Client();
const databases = new Databases(client);
const functions = new Storage(client);
var vCard = vCardsJS();

client
    .setEndpoint('https://cms.itexpertnow.com/v1')
    .setProject('66158c1e000f88577e01')
    .setKey('f9f2aecebec9de276c5e9a75301664b3f06f6f73725a033bc44260ae60428065dc6ef18fba082232f84064502c4fa7eddf8067f8eb8076c2d122dcc16f6c570bcb33c5ba6eb71177b7adcbe680075b3894d0240980f918d0c33aff9e6fb23eaf21b25529221941f148455c61d91242a37bc7f06ceddd19f18c738ac98b8140fc'); // Your secret API key


// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    return res.send('Hello, World!');
  }

  if (req.method === 'POST') {
    // Send a response with the res object helpers
    // `res.send()` dispatches a string back to the client
    
    
    //set properties
  vCard.firstName = req.body.firstName;
  vCard.middleName = req.body.middleName;
  vCard.lastName = req.body.lastName;
  vCard.organization = req.body.organization;
  vCard.photo.attachFromUrl('https://1drv.ms/i/s!ArOcLYH4RemJo01S7Hv9NGxomCwC?e=Gg6ffb', 'JPEG');
  vCard.workPhone = req.body.workPhone;
  vCard.title = req.body.title;
  vCard.url = req.body.url;
  vCard.note = req.body.note;

  const promise = storage.createFile(
    '661970c40027f908ba28',
    ID.unique(),
    sdk.InputFile.fromPath("./eric-nesser2.vcf", "eric-nesser2.vcf")
);

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
 
  }

 
};
