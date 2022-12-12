const { Console } = require("console");
const { MongoClient } = require("mongodb");
require('dotenv').config();

// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE_LOCAL);

 console.log('process success')
const name='hello World';
module.exports={client,name}