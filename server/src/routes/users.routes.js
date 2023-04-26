const express = require('express')
const controller = require('../controller/users.controllers');

const usersRoutes = express.Router()

usersRoutes.get('/', controller.allUsers)
usersRoutes.delete('/', controller.deleteUser )
usersRoutes.patch('/', controller.updateUser)

module.exports = usersRoutes;