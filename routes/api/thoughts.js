const express = require('express');
const router = express.Router()
const path = require("path");
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController')

// api/thoughts
    //get all thoughts
    //get a single thought by _id
    //post create a new thought, push the created thought's _id to the associated user's thought's array 
    //put to update a thought by its _id
    //delete a thought by its _id


router.route("/").get(getAllThoughts).post(createThought)

router.route("/:_id").get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById)

// api/thoughts/:thoughtId/reactions
    //POST to create a reaction stored in a single thought's reactions array field
    //DELETE to pull and remove a reaction by the reaction's reactionId value


router.route("/:thoughtId/reactions").post(createReaction).delete(deleteReaction)

    module.exports = router