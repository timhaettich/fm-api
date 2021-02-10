import 'reflect-metadata';
import fp from 'fastify-plugin';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Address } from '../modules/address/entity';
import { AdrContactGrp } from '../modules/address/AdrContactGrp/entity';

export default fp(async server => {
	try {
		const connectionOptions = await getConnectionOptions();
		Object.assign(connectionOptions, {
			options: { encrypt: true },
			entities: [Address, AdrContactGrp]
		});

		const connection = await createConnection(connectionOptions);
		console.log('database connected');

		server.decorate('db', {
			Address: connection.getRepository(Address),
			AdrContactGrp: connection.getRepository(AdrContactGrp),
		});
	} catch (error) {
		console.log(error);
		console.log('make sure you have set .env variables - see .env.sample');
	}
});
