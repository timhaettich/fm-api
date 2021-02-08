export const addressSchema = {
	__id: { type: 'number' },
	__createdAt: { type: 'string', format: 'date-time' },
	__updatedAt: { type: 'string', format: 'date-time' },
	__deletedAt: { type: 'string', format: 'date-time' },
	AdrForenameTxt: { type: 'string' },
	AdrSurnameTxt: { type: 'string' },
	AdrTitleTxt: { type: 'string' },
	AdrStreetTxt: { type: 'string' },
	AdrStreetNumberTxt: { type: 'string' },
	AdrCityTxt: { type: 'string' },
	AdrPLZTxt: { type: 'string' },
	AdrNotesClb: { type: 'string' },
};

export const listAddressSchema = {
	summary: 'address',
	description: 'List of all Addresses',
	response: {
		200: {
			type: 'array',
			items: {
				properties: addressSchema
			}
		}
	}
};

export const getOneAddressSchema = {
	summary: 'get one address',
	description: 'get one address by id',
	params: {
		type: 'object',
		required: ['__id'],
		properties: {
			_id: { type: 'number' }
		}
	},
	response: {
		200: {
			type: 'array',
			items: {
				properties: addressSchema
			}
		}
	}
};

export const deleteAddressSchema = {
	summary: 'delete address',
	description: 'delete address',
	params: {
		type: 'object',
		required: ['__id'],
		properties: {
			_id: { type: 'number' }
		}
	},
	response: {
		200: {
			type: 'boolean'
		}
	}
};
