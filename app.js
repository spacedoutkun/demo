const express = require('express');
const app = express();
const port = 8000;

//to serve index file
app.use(express.static("app"));

app.listen(port, () => {
    console.log(`app started on ${port}`);
});