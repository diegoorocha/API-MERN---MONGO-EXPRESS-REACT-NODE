const express = require('express')

const router = express.Router()

const userController = require('../controllers/userController')


router.post('/create', userController.createNewUser)
router.get('/list', userController.listUser)
router.get('/list/:id', userController.listUserId)
router.post('/update/:id', userController.updateUserId)
router.get('/delete/:userId', userController.deleteUser)

module.exports = router