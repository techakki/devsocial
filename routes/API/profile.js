const express = require('express');

const router = express.Router();

/*
  @route GET /api/profile/test
  @description testing route for profile router
  @access Public
*/
router.get('/test', (request, response) => response.json({msg: 'profile working..!'}));

module.exports = router;
