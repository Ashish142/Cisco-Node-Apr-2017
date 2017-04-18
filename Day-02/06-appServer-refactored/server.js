var http = require('http'),
	path = require('path');

var dataParser = require('./dataParser'),
	logger = require('./logger'),
	serveStatic = require('./serveStatic'),
	calculatorHandler = require('./calculatorHandler'),
	notFoundHandler = require('./notFoundHandler'),
	app = require('./app');


app.use(dataParser); 
app.use(logger);
app.use(serveStatic(path.join(__dirname, '/public')));
app.use(calculatorHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);