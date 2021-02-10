export const contactSchema = {
	__id: { type: 'number' },
	__createdAt: { type: 'string', format: 'date-time' },
	__updatedAt: { type: 'string', format: 'date-time' },
	__deletedAt: { type: 'string', format: 'date-time' },
	TextTxt: { type: 'string' },
};

export const listContactSchema = {
	summary: 'contacts',
	description: 'List of all Contacts',
	response: {
		200: {
			type: 'array',
			items: {
				properties: contactSchema
			}
		}
	}
};

export const getOneContactSchema = {
	summary: 'get one contact',
	description: 'get one contact by itemNo',
	params: {
		type: 'object',
		required: ['__itemNo'],
		properties: {
			__itemNo: { type: 'number' }
		}
	},
	response: {
		200: {
			type: 'object',
			properties: contactSchema,
		}
	}
};

export const deleteContactSchema = {
	summary: 'delete contact',
	description: 'delete contact',
	params: {
		type: 'object',
		required: ['__itemNo'],
		properties: {
			__itemNo: { type: 'number' }
		}
	},
	response: {
		200: {
			type: 'boolean'
		}
	}
};
