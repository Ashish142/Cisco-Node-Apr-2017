var fs = require('fs');

fs.readFile('./sample.txt', { encoding : 'utf8'}, function(err, contents){
	if (err){
		console.log(err);
		return;
	}
	console.log(contents);	
	console.log('-------------------------  EOF --------------------------');
});
