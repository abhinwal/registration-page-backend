const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:4200"
}));

app.listen(9992, function(err) {
    if (err) {
        console.log("error");
    } else {
        console.log("started");
    }
});

// Updated mongoose connection method using Promises
mongoose.connect("mongodb://localhost:27017/gbs")
    .then(() => console.log("Successfully connected to DB"))
    .catch((error) => console.log("Error connecting to DB:", error));

app.use(express.json());
app.use(routes);
