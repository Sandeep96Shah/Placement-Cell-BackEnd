const express = require('express');
const router = express.Router();

const interviewController = require('../controllers/Interview');

router.post('/create', interviewController.create);

router.get('/all', interviewController.all);

module.exports = router;