const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: 'This field is required'
    },
    email: {
        type: String,
        required:'This field is required'
    },
    mobile: {
        type:  Number,
        required:'This field is required'
    },
    city : {
        type: String,
        required: 'This field is required'
    }
});


// employeeSchema.path('email').validate((val) => {
//     emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ 
//     return emailRegex.test(val);
// }, 'Invalid Email');

mongoose.model('Employee', employeeSchema);
