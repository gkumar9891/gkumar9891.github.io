const express = require('express');
const port = process.env.port || 8080;

const app = express();

app.get('/work', (req, res) => {
    res.send(`<h1>Work Page</h1>`)
})


app.listen(port, () => console.log(`server is listening on port ${port}`));


