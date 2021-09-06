const express = require('express');
const passport = require('passport');
const router = express.Router();

router.use('/student', passport.authenticate('jwt', {session: false}), require('./student'));

router.use('/interview', passport.authenticate('jwt', {session: false}), require('./interview'));

router.use('/user', require('./user'));

//router.use('/external_jobs', passport.authenticate('jwt', {session: false}), require('./jobs'));


module.exports = router;