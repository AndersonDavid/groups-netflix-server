const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(routes);


const connDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://andersondavid:anderson26337766@cluster0-kmksp.mongodb.net/superdupa?retryWrites=true&w=majority', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		console.log('Banco de Dados conectado.');	
	} catch(err){
		console.log(err);	
	}
}; connDB()



app.listen(process.env.PORT || 3000, () => {
	console.log('Servidor conectado.');
})
