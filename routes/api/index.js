const express= require("express")
const router = express.Router()
const userRoutes = require("./users")
const thoughtRoutes = require("./thoughts")
const path = require("path");

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router