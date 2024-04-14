import { Client , Storage } from 'node-appwrite';

const client = new Client();
const storage = new Storage(client);


client
    .setEndpoint('https://cms.itexpertnow.com/v1')
    .setProject('66158c1e000f88577e01')
    .setKey('f9f2aecebec9de276c5e9a75301664b3f06f6f73725a033bc44260ae60428065dc6ef18fba082232f84064502c4fa7eddf8067f8eb8076c2d122dcc16f6c570bcb33c5ba6eb71177b7adcbe680075b3894d0240980f918d0c33aff9e6fb23eaf21b25529221941f148455c61d91242a37bc7f06ceddd19f18c738ac98b8140fc'); // Your secret API key



// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  

  // The `req` object contains the request data
  if (req.method === 'GET') {
    const vcf = storage.getFileDownload(
      '661970c40027f908ba28',
      'd5132d6d-34f9-4e19-a4bc-a318df3b8ff6',
  );
  console.log(vcf)
  return res.send(vcf);
    



  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
