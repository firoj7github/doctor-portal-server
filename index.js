const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const app = express()
const port =process.env.PORT ||5000;
// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv:${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2exwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log('mongodb connected');

app.get('/', (req, res) => {
  res.send('Doctor Doctor')
})

app.listen(port, () => {
  console.log(`doctor server running ${port}`)
})