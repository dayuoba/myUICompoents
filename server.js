const http = require('http');
const app = require('./server/app.js');
const VERSION = '1.0.0';

http.Server(app)
	.listen(9902, () => {
		console.log(`Server started! Version is: ${VERSION}`);
	});
