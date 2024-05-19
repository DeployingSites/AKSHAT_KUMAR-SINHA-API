const express = require('express');

const router = express.Router();
const authController = require('../controllers/music-player-controller')



router.route('/getSongs').get(authController.getSongs);
router.route('/authLogin').post(authController.authLogin);
router.route('/authSignUp').post(authController.authSignUp);

module.exports = router