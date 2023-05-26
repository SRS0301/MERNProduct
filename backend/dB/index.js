const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://salih:salih123@cluster0.5agiy0y.mongodb.net/')
.then(()=>{
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
})