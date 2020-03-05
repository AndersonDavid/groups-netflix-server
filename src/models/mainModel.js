const { Schema, model } = require('mongoose');

const mainModel = new Schema({
	name: String,
	dateToPay: Number,
	login: String,
	clients: [
		{
			name: String,
			OBS: String,
			payment: []
		},
		{
			name: String,
			OBS: String,
			payment: []
		},
		{
			name: String,
			OBS: String,
			payment: []
		},
		{
			name: String,
			OBS: String,
			payment: []
		},
		{
			name: String,
			OBS: String,
			payment: []
		}
	]
})

module.exports = model('MainModel', mainModel);
