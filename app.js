const showRouter = require('./Routes/shows');

const express = require('express');
const app = express();

app.use('/', showRouter);
const mongoose = require('mongoose');

const port = 8000;
const hostname = 'localhost';
const atlasDbUrl = 'mongodb+srv://akreddy:Akreddy3003@cluster0.6qg3gsc.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(atlasDbUrl, {
    useNewUrlParser: true, useUnifiedTopology: true
})

    .then(res => {
        app.listen(port, hostname, () => {
            console.log(`Server is running at ${hostname}:${port}`)
        });
    })
    .catch(err => console.log(err));
