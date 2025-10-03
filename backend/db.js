require('dotenv').config();
const mongoose = require('mongoose');
const mongoUrl = process.env.local_mongo_url;
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database connected with Server');
})

db.on('disconnected', () => {
    console.log('Database disconnected from Server');
})

db.on('error', (err) => {
    console.log('database connection error : ',err);
})

module.exports = db;