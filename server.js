// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/memes', async (req, res) => {
  try {
    const fetch = await import('node-fetch');

    // Ambil 10 meme random dari meme-api.com
    const response = await fetch.default('https://meme-api.com/gimme/okbuddyretard+shitposting+deepfriedmemes/30');
    const json = await response.json();

    const memes = json.memes.map(meme => ({
      title: meme.title,
      image: meme.url,
      permalink: meme.postLink
    }));

    res.json(memes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Gagal mengambil data dari Meme API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
