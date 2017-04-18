var url = require('url');

module.exports = function(req){
	Object.assign(req, url.parse(req.url));
}