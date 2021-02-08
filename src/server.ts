import fastify from 'fastify';

import db from './plugins/db';
import healthHandler from './modules/health/routes';
import productsHandler from './modules/products/routes';

function createServer() {
	const server = fastify();
	server.register(require('fastify-cors'));

	server.register(require('fastify-oas'), {
		routePrefix: '/docs',
		exposeRoute: true,
		swagger: {
			info: {
				title: 'Filmmanagement API',
				description: 'api documentation',
				version: '0.1.0'
			},
			servers: [
				{ url: 'http://localhost:3000', description: 'development' },
				{
					url: 'https://api.grain-films.com',
					description: 'production'
				}
			],
			schemes: ['https'],
			consumes: ['application/json'],
			produces: ['application/json'],
		}
	});

	server.register(db);
	server.register(healthHandler, { prefix: '/address' });
	server.register(productsHandler, { prefix: '/product' });

	server.setErrorHandler((error, req, res) => {
		req.log.error(error.toString());
		res.send({ error });
	});

	return server;
}

export default createServer;
