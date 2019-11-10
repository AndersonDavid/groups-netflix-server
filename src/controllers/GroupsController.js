const mainModel = require('./../models/mainModel');

const GroupsController = {
	async findAll(req, res) {
		const data = await mainModel.find();
		res.json(data)
	},

	async findOne(req, res) {
		const _id = req.params.id;
		const data = await mainModel.find({ _id });
		res.json(data)

	},

	async createGroup(req, res) {
		const data = req.body;
		const addItem = await mainModel.create(data)
		console.log(req.body)
		return res.json({ addItem })
	},

	async updateOneGroupInfo(req, res) {
		const { name, login } = req.body;
		const _id = req.params.id;
		const action = await mainModel.updateOne(
			{ _id },
			{ $set: { name, login } },
			{ upsert: true }
		)
		res.json(action)
	},

	async deleteGroup(req, res) {
		const _id = req.params.id;
		const action = await mainModel.deleteOne({ _id })
		return res.json(action)
	},

	/** To dev only **/
	async deleteAllGroups(req, res) {
		const action = await mainModel.deleteMany()
		return res.json(action)
	},

}

module.exports = GroupsController;
