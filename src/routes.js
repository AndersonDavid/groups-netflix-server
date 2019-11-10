const express = require('express');
const routes = express.Router();
const GroupsController = require('./controllers/GroupsController');
const ClientController = require('./controllers/ClientsController');

routes.get('/', (req, res) => {
	res.send('Rota principal.');
})

/*
*		ROTAS PARA MANUPULAÇÃO DOS GRUPOS
*/

routes.get('/findall', GroupsController.findAll);

routes.get('/findone/:id', GroupsController.findOne);

routes.post('/create', GroupsController.createGroup);

routes.post('/updateonegroup/:id', GroupsController.updateOneGroupInfo);

routes.delete('/deleteone/:id', GroupsController.deleteGroup);

routes.delete('/deleteall', GroupsController.deleteAllGroups);

/*
 * 	ROTAS PARA MINIPULAÇÃO DE CLIENTES 
 */

routes.post('/updateclientinfo/:idGroup/:clientId', ClientController.updateOneClientInfo);

routes.post('/updateclientpayment/:idGroup/:clientId', ClientController.updateOneClientPayment);

module.exports = routes;
