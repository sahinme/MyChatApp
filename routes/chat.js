var express = require('express');
var router = express.Router();

// Chat route
router.get('/',(req, res, next)=> {
  res.render('chat', { user:req.user });
    console.log(req.user);
});

module.exports = router;
