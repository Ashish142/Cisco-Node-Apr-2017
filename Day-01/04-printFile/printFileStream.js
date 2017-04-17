var fs = require('fs');

var stream = fs.createReadStream('./sample.txt', { encoding : 'utf8'});

/*
	Readable Stream
		- open
		- data
		- end
		- close
		- error

*/

stream.pipe(process.stdout);
stream.on('end', function(){
	console.log('------------------------- EOF -------------------------- ');
	//console.log('operation concluded with ' + readCount + ' reads');
});

/*var readCount = 0;

stream.on('data', function(chunk){
	console.log(chunk);
	++readCount;
});

stream.on('end', function(){
	console.log('------------------------- EOF -------------------------- ');
	console.log('operation concluded with ' + readCount + ' reads');
});

stream.on('error', function(err){
	console.log('something went wrong');
	console.log(err);
});*/