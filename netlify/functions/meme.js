// netlify/functions/memes.js
const fetch = require('node-fetch'); // Pastikan untuk menginstal node-fetch

exports.handler = async (event, context) => {
  try {
    const response = await fetch('https://meme-api.com/gimme/okbuddyretard+shitposting+deepfriedmemes/15');
    const memes = await response.json();
    
    return {
      statusCode: 200,
      body: JSON.stringify(memes), // Kirimkan meme dalam bentuk JSON
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch memes' }),
    };
  }
};
