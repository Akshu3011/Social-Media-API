const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
       //insert validator here
       match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Invalid Email" ]
    },

    thoughts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'thought'
        }],

    friends:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }]
},
{
    toJSON: {
      virtuals: true,
    },
    id: false,
  })

userSchema.virtual('FriendListLength')
  .get(function () {
    return this.friends.length;
  })


const User = mongoose.model('user', userSchema);



module.exports = User