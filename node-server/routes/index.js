const fs = require('fs');

//export all the modules at single place
module.exports = (app) => {
	fs.readdirSync('routes/api/').forEach((file) => {
		require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
	})
}