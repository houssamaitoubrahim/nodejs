//include http module 
var http = require('http');

http.createServer(function(req,res){
	//store URL in variable q_string

	var q_string = req.url;
	switch(q_string) {
		case '/':
                        	res.writeHead(200, { 'Content-Type': 'text/plain' });
                        	res.write('Welcome To Tecmint.com!')
                        	res.end();
                        	break;
                	case '/Casablanca':
                		res.writeHead(200, { 'Content-Type': 'text/plain' });
                        	res.write('Morocco');
                        	res.write('\n\n');
                        	res.write('The biggest economic city in Morocco');
                        	res.write('\n');
                        	res.end('Welcome to Morocco');
                        	break;
                	case '/Rabat':
                        	res.writeHead(200, { 'Content-Type': 'text/plain' });
                        	res.write('The capital of Morocco');
                        	res.write('\n\n');
                        	res.end('The empire of Morocco');
                        	break;
                	default:
                       		res.writeHead(404, { 'Content-Type': 'text/plain' });
                       		res.end('Not Found');
                        	break;
	}
}).listen(3333);
console.log('Server started on localhost:3333; press Ctrl-C to terminate....');
