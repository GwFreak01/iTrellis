const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const inventoryRoutes = require('./routes/inventories');

const app = express();

// mongoose.connect("mongodb+srv://gwfreak01:" + process.env.MONGO_ATLAS_PW + "@cluster0-s32lv.mongodb.net/tl-sms")
//   .then(() => {
//     console.log('Connected to cloud database!');
//   })
//   .catch(() => {
//     console.log('Connection failed!');
//   });

mongoose.connect('mongodb://localhost:27017/itrellis_db')
  .then(() => {
    console.log('Connected to local database!');
  })
  .catch(() => {
    console.log('Connection failed!');
  });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  // res.header()

  next();
});

app.use('/api/inventory', inventoryRoutes);
module.exports = app;

