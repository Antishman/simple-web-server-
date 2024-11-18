const express = require('express');
const app = express();
const port = 3000;

// Route: /name
app.get('/name', (req, res) => {
    res.status(200).send('Anteneh');
});

// Route: /hobby
app.get('/hobby', (req, res) => {
    res.status(200).json({ hobby: 'meditation' });
});

// Route: /dream
app.get('/dream', (req, res) => {
    res.status(200).send('To feel whole, to be alive');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});