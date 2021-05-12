const mongoose = require('mongoose');
const config = require('./config');
module.exports = ()=>{
    
    mongoose.connect( config.mongodb,{useNewUrlParser:true});
    
    var db = mongoose.connection; 
    db.on('error', console.error.bind(console, 'connection error：'));
    db.once('open', (callback) => {
        console.log('MongoDB Connected！！');
    });
    return db;
}
