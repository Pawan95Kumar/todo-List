//require mongoose
const mongoose = require('mongoose');
//connecting to the db
mongoose.connect('mongodb://localhost:27017/tododb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log('Successfully connected to DB');
});
module.exports=db;