import { Client , Storage } from 'node-appwrite';

const client = new Client();
const storage = new Storage(client);


client
    .setEndpoint('https://cms.itexpertnow.com/v1')
    .setProject('66158c1e000f88577e01')


// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  

  // The `req` object contains the request data
  if (req.method === 'GET') {
    const vcf = storage.getFileDownload(
      '661970c40027f908ba28',
      'd5132d6d-34f9-4e19-a4bc-a318df3b8ff6',
  );
    return vcf;



  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
