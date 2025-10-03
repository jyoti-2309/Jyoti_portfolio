require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const db = require('./db');
app.use(express.json());
const cors = require('cors');
app.use(cors())

const chatModel = require('./models/chat')

app.post('/chats', async (req,res) => {
    try{
        const {name, email, message} = req.body;
        const newChat = new chatModel({name, email, message});
        const response = await newChat.save();
        console.log('menu data saved successfully');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'});
    }
})


const PORT = process.env.PORT;

app.listen(PORT || 2000, () => {
  console.log(`Server running on port ${PORT}`);
});