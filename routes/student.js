const express = require('express');
const router = express.Router();

const studentController = require('../controllers/Student');

router.post('/create', studentController.create);

router.post('/update', studentController.update);

router.get('/all', studentController.all);

module.exports = router;