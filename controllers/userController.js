const { User } = require("../models")

module.exports = {
    //api/users
    //get all users
    getAllUsers(req, res) {
        User.find()
            .select('-__v')
            .populate("thoughts")
            .populate('friends')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err))
    },
    // api/users/:_id -> get a single user by _id and populated thought and friend data
    getUserById(req, res) {
        User.findOne({ _id: req.params._id })
            .select('-__v')
            .populate("thoughts")
            .populate('friends')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err))
    },
    //post a new user
    createUser(req, res) {
        User.create({ username: req.body.username, email: req.body.email })
            .then((createdUser) => res.json(createdUser))
            .catch((err) => res.status(500).json(err));
    },
    //Put to update a user by its _id
    updateUser(req, res) {
        User.findOneAndUpdate({ _id: req.params._id }, { username: req.body.username, email: req.body.email })
            .then((updatedUser) => res.json(updatedUser))
            .catch((err) => res.status(500).json(err));
    },
    //delete to remove a user by its _id
    deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params._id })
            .then((deletedUser) => res.json(deletedUser))
            .catch((err) => res.status(500).json(err));
    },

    ///api/users/:userId/friends/:friendId
    //post to add a new friend to a user's friend list

    addFriend(req, res) { 
        User.findOneAndUpdate({_id:req.params.userId},  {$addToSet:{ friends: req.params.friendId }})
        .then((user) => {
            console.log(user)
            return User.findOneAndUpdate({_id:req.params.friendId},  {$addToSet:{ friends: req.params.userId }})
            .then(res.status(200).json("Friend successfully added!"))
        }).catch((err) => res.status(500).json(err));
    },
        
    deleteFriend(req, res){ 
        User.findOneAndUpdate({_id:req.params.userId},  {$pull:{ friends: req.params.friendId }})
        .then((user) => {
            console.log(user)
            return User.findOneAndUpdate({_id:req.params.friendId},  {$pull:{ friends: req.params.userId }})
            .then(res.status(200).json("Friend successfully removed!"))
        }).catch((err) => res.status(500).json(err));
    },
}