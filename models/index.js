const User = require("./users")
const Thought = require("./thoughts")


User.create({username: "Akshata", email: "akshata@gmail.com"})
User.create({username: "Mike", email: "mike@hotmail.com"})
User.create({username: "Heman", email: "heman@gmail.com"})
User.create({username: "Emily", email: "emily@gmail.com"})

module.exports = {User, Thought}