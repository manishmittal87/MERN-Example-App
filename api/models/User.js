//Require Mongoose
var mongoose = require('mongoose');

// Define schema
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
});

UserSchema.methods.toJSON = function(){
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        _id: this._id
    };
  };

// Compile model from schema
module.exports = mongoose.model('User', UserSchema, 'User');