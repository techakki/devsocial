const express = require('express');

const router = express.Router();

/*
  @route GET /api/users/test
  @description testing route for users router
  @access Public
*/
router.get('/test', (request, response) => response.json({msg: 'users working..!'}));

module.exports = router;
