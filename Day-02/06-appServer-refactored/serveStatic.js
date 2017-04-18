var path = require('path'),
	fs = require('fs')


var staticExtns = ['.html', '.css', '.js', '.xml', '.jpg', '.png', '.ico', '.json'];

function isStatic(resource){
	var extn = path.extname(resource);
	return staticExtns.indexOf(extn) !== -1;
}

module.exports = function(req, res){
	if (isStatic(req.pathname)){
		var resourcePath = path.join(__dirname, req.pathname);
		if (!fs.existsSync(resourcePath)){
			res.statusCode = 404;
			res.end();
			return;
		}
		console.log(resourcePath + ' -> exists!!');
		//fs.createReadStream(resourcePath).pipe(res);
		var stream = fs.createReadStream(resourcePath);
		stream.on('open', function(){
			console.log('[@serveStatic] file opened for serving');
		});
		stream.on('data', function(chunk){
			console.log('[@serveStatic] - data event triggered');
			res.write(chunk);
		});
		stream.on('end', function(){
			console.log('[@serveStatic] - end event triggered');
			res.end();
		})
	}
}