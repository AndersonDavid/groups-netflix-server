const mainModel = require('./../models/mainModel');

const ClientsControllers = {

	async updateOneClientInfo(req, res) {
		const { name, OBS } = req.body;

		const _idGroup = req.params.idGroup;
		const _clientId = req.params.clientId;

		const action = await mainModel.updateOne(
			{ "_id": _idGroup, "clients._id": _clientId },
			{
				$set: {
					"clients.$.name": name,
					"clients.$.OBS": OBS,
			 }
			},
		)
		res.json(action)
	},

	async updateOneClientPayment(req, res){
		const { payment } = req.body;

		const _idGroup = req.params.idGroup;
		const _clientId = req.params.clientName;

		const action = await mainModel.updateOne(
			{ "_id": _idGroup, "clients._id": _clientId },
			{
				$set: {
					"clients.$.payment": payment,
			 }
			},
		)
		res.json(action)
	}

}

module.exports = ClientsControllers;