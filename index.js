const express = require('express');
const mongoose = require('mongoose');
const app = express();
const User = require('./user');

const DB = 'mongodb+srv://ayushguptahestabit:hestabit%40123@cluster0.iifac.mongodb.net/hestabit01?retryWrites=true&w=majority';

mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
})

app.get('/', (req, res) => {
    res.send('Welcome');
})

User.find({}, (err, user) => {
    if (err) {
        console.warn(err);
    } else {
        console.log(user);
    }
})

app.get('/users', (req, res) => {
    var data = User.find().then((data)=>{
        res.json(data);
    })
})

app.listen(3000, () => {
    console.log('Server Running on port 3000')
});