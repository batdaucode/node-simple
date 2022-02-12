const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('ok');
})

console.log('Hello world!!!!!!!');

app.listen(4000, '0.0.0.0', () => {
    console.log('Server running');
})