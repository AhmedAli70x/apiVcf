import { Client } from 'node-appwrite';

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
    return res.json(req.body);   
  }

  // `res.json()` is a handy helper for sending JSON
  // return res.json({
  //   motto: 'Build like a team of hundreds_',
  //   learn: 'https://appwrite.io/docs',
  //   connect: 'https://appwrite.io/discord',
  //   getInspired: 'https://builtwith.appwrite.io',
  // });
};
