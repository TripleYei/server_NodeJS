const http = require('http')
http.createServer((request, response) => {

	response.writeHead(200, {

		'Content-Type': 'text/plain'

	});
	
	response.write('Bienvenido al servidor HTPP \n');	
	response.write('Hola Mundo \n');
	response.write('Hola NodeJS');
	response.end();



}).listen(3000);