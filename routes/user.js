const express = require('express');
const router = express.Router();

const userController = require('../controllers/User');

router.post('/create', userController.create);

router.post('/sign_in', userController.signIn);

module.exports = router;