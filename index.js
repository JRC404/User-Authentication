const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.port || 4000;

app.get('/', (req, res) => {
    res.json({
        message: "API working"
    })
});

app.listen(PORT, (req, res) => {
    console.log(`Server start at PORT ${PORT}`);
});