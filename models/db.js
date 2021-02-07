const mongoose = require('mongoose');
const url=process.env.MONGO_URL || 'mongodb://localhost/employee'
mongoose.connect(url, {useNewUrlParser: true,  useCreateIndex:true, useUnifiedTopology:true}, (err) => {
    if(!err) { console.log('mongodb connect...')}
    else{ console.log("error : ", + err)}
});

require('./employee.model');