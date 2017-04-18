var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	Object.assign(req, url.parse(req.url));
	req.query = querystring.parse(req.query);
	if (req.method === 'POST'){
		var rawData = '';
		req.on('data', function(chunk){
			rawData += chunk;
		});

		req.on('end', function(){
			req.body = querystring.parse(rawData);
			next();
		})
	} else {
		next();
	}
}