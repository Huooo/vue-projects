var express = require('express');
var router = express.Router();

var db = require('../db/mysql.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  	res.send('respond with a resource');
});

/* --- GET users lists --- */
router.get('/lists', function(req, res, next){
	let sql = 'SELECT * FROM users';
	db.query(sql, function(err, rows, fields){
		if(err){
			res.send(err);
			return false;
		}
		res.json(rows);
	});
});



module.exports = router;
