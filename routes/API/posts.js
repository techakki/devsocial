const express = require('express');

const router = express.Router();

/*
  @route GET /api/posts/test
  @description testing route for posts router
  @access Public
*/
router.get('/test', (request, response) => response.json({msg: 'posts working..!'}));

module.exports = router;
