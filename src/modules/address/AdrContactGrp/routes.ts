import { listContactSchema, deleteContactSchema, getOneContactSchema } from './schema';

export default function adrContactGrpHandler(server, options, next) {
	server.get(
		'/',
		{ schema: listContactSchema },
		async (req, res) => {
			req.log.info('list contacts from db');
			const contact = await server.db.AdrContactGrp.find();
			res.send(contact);
		}
	);

	server.get(
		'/:__id',
		{ schema: getOneContactSchema },
		async (req, res) => {
			req.log.info('get one contact from db');
			const contact = await server.db.AdrContactGrp.findOne(req.params._id);
			res.send(contact);
		}
	);

	server.post('/', async (req, res) => {
		req.log.info('Add contact to db');
		const contact = await server.db.AdrContactGrp.save(req.body);
		res.status(201).send(contact);
	});

	server.put('/:_id', async (req, res) => {
		req.log.info('Update contact to db');
		const _id = req.params._id;
		const contact = await server.db.AdrContactGrp.save({ _id, ...req.body });
		res.status(200).send(contact);
	});

	server.delete(
		'/:_id',
		{ schema: deleteContactSchema },
		async (req, res) => {
			req.log.info(`delete contact ${req.params._id} from db`);
			const contact = await server.db.AdrContactGrp.findOne(req.params._id);
			await server.db.AdrContactGrp.remove(contact);
			res.code(200).send({});
		}
	);

	next();
};