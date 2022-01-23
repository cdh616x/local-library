var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Local Library' });
});

module.exports = router;

//mongodb connection string: mongodb+srv://cdhprof:Lyr1c@@@@cluster0.7dp8d.mongodb.net/local_library?retryWrites=true&w=majority
