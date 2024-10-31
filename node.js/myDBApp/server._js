// require('../utils/utils.js')

require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const pinoLogger = require('./logger');

const connectToDatabase = require('./models/db');
// const {loadData} = require("./util/import-mongo/index");


// const bodyParser = require("body-parser");


const port = 3060;

const app = express();
app.use("*",cors());

// Connect to MongoDB; we just do this one time
connectToDatabase().then(() => {
    // pinoLogger.info('Connected to DB');
    console.log("Conneced to dadtabase.");
})
    .catch((e) => console.error('Failed to connect to DB', e));

app.use(express.json());

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.get("/",(req,res)=>{
    res.send("Inside the server");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});