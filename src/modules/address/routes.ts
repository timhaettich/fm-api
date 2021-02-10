import { listAddressSchema, deleteAddressSchema, getOneAddressSchema } from './schema';

export default function addressHandler(server, options, next) {
	server.get(
		'/',
		{ schema: listAddressSchema },
		async (req, res) => {
			req.log.info('list addresses from db');
			const address = await server.db.Address.find({relations: ['AdrContactGrp']});
			res.send(address);
		}
	);

	server.get(
		'/:__id',
		{ schema: getOneAddressSchema },
		async (req, res) => {
			req.log.info('get one address from db');
			const address = await server.db.Address.findOne(req.params._id);
			console.log(address);
			res.send(address);
		}
	);

	server.post('/', async (req, res) => {
		req.log.info('Add address to db');
		const address = await server.db.Address.save(req.body);
		res.status(201).send(address);
	});

	server.put('/:__id', async (req, res) => {
		req.log.info('Update address to db');
		const _id = req.params._id;
		const address = await server.db.Address.save({ _id, ...req.body });
		res.status(200).send(address);
	});

	server.delete(
		'/:__id',
		{ schema: deleteAddressSchema },
		async (req, res) => {
			req.log.info(`delete address ${req.params._id} from db`);
			const address = await server.db.Address.findOne(req.params._id);
			await server.db.Address.remove(address);
			res.code(200).send({});
		}
	);

	next();
};