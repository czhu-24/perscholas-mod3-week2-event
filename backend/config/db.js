const mongoose = require('mongoose');

const password = process.env.MONGO_PASS;

const database = "Project"

let connectionString = `mongodb+srv://blueinkstains:${password}@cluster0.z1lshiz.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})


mongoose.connection.once('open', () => {
	console.log('connected to database');
})