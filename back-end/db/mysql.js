var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'cici'
});
var db = {};


db.query = function(sql, callback){
	if(!sql){
		callback();
		return false;
	}
	connection.query(sql, function(err, rows, fields){
		if(err){
			console.log(err);
			callback(err, null);
			return false;
		}
		callback(null, rows, fields);
	});
}


module.exports = db;