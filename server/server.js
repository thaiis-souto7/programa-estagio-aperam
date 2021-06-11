const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
const hostname = 'localhost';
const port = 3333;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

