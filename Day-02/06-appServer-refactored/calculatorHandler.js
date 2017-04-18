var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.pathname === '/calculator'){
		var data = req.method === 'POST' ? req.body : req.query;
		var op = data.op,
			n1 = parseInt(data.n1),
			n2 = parseInt(data.n2);
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
		next();
	} else {
		next();
	}
}