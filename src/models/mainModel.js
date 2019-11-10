const { Schema, model } = require('mongoose');

const mainModel = new Schema({
	name: String,
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
