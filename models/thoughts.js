const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {
        type: mongoose.Types.ObjectId, 
        default: mongoose.Types.ObjectId
    },

    reactionBody:{
        type: String,
        minLength: 1,
        maxLength: 280
    },

    username:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now,
    }
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    createdAt:{
        type: Date,
        default: Date.now,
    },

    username:{
        type: String,
        required: true,
    },

    reactions:[reactionSchema]

})


    

const Thought = mongoose.model('thought', thoughtSchema);


thoughtSchema.virtual("reactionCount")
    .get(function(){
        return this.reactions.length
    })

module.exports = Thought 