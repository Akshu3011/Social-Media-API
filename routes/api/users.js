const express = require('express');
const router = express.Router()
const path = require("path");
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController')

router.route("/").get(getAllUsers).post(createUser)

router.route("/:_id").get(getUserById).put(updateUser).delete(deleteUser)

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend)

module.exports = router