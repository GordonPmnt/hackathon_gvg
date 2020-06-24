const mongoose = require('mongoose');
const { DB_URL } = require('../config')

mongoose.connect(DB_URL, 
    { 
        // fix deprecation warnings (cfr doc)
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false,
        keepAlive: true,
    })
    .then(() => console.log(`MongoDB ${DB_URL} connected...`))
    .catch(err => console.log(err));

module.exports = { mongoose };