const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.get('/data', async (req, res) => {
    try {
        const response = await fetch('https://pastebin.com/raw/SwjNyKCV');
        const data = await response.text();
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
