const express = requiere('express')
const controller = require('../controlers/users.controller');
const usersRoutes = express.Router()

usersRoutes.get('/', controller.allUsers)