var path = require('path'),
	fs = require('fs')


var staticExtns = ['.html', '.css', '.js', '.xml', '.jpg', '.png', '.ico', '.json'];

function isStatic(resource){
	var extn = path.extname(resource);
	return staticExtns.indexOf(extn) !== -1;
}

function isValid(resourcePath){
	return isStatic(resourcePath) && fs.existsSync(resourcePath);
}

module.exports = function(publicResourcePath){
	return function(req, res, next){
		var resourcePath = path.join(publicResourcePath, req.pathname);
		if (isValid(resourcePath)){
			var stream  = fs.createReadStream(resourcePath)
			stream.pipe(res);
			stream.on('end', function(){
				next();
			});
		} else {
			next();
		}
	}
}