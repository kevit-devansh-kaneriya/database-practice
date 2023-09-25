const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000; 

const uri = 'mongodb://127.0.0.1:27017/task-manager-api';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
});

