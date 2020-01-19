const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://gamma:gamma@omnistack-so0e8.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json()); // Basicamente indica ao Express que ele deve entender JSON
app.use(routes);
app.listen(3333);