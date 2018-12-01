var express = require('express');
var router = express.Router();

// Chat route
router.get('/',(req, res, next)=> {
  res.render('chat', { title: 'Chat Route' });
});

module.exports = router;
