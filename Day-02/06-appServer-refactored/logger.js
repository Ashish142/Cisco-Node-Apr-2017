var chalk = require('chalk');
module.exports = function(req, res, next){
	console.log(chalk.bold.blue(req.method) + '\t' + chalk.red(req.pathname));
	next();
};