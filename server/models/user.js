var mongoose = require('mongoose');

// Create the collection model and restrictions on its fields:
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true //cut pre and post blanks
    }
});

module.exports = {User};