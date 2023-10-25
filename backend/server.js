// REMEMBER: we install cors, morgan, and express for the BACKEND

const express = require('express')

const cors = require('cors');
const morgan = require('morgan');
// adds standard security to server

const helmet = require('helmet');
const Event = require('./models/Event.js');
require('dotenv').config();

// EDIT BELOW
const path = require("path");

const PORT = 3000;

// serve static files from dist folder
const distPath = path.join(__dirname, '../client/dist');

const app = express();

// Serve static files from the 'dist' folder
app.use(express.static(distPath));



// bring mongodb file into this server file
require('./config/db.js');



// START OF MIDDLEWARE //
// can now use req.body
app.use(express.json());

app.use(cors({
	origin: "*"
}))

app.use(morgan('dev'));

app.use(helmet());
// END OF MIDDLEWARE //

// START OF ROUTES //

app.get('/events', async (req, res) => {
	// you can put an object like {title: "First title"} inside the .find() to specify the search
	let arrayOfEvents = await Event.find(); 
	res.send(arrayOfEvents);
})

app.post("/events", async (req, res) => {
	// 1) get data that was sent from front end
	const eventData = req.body;
	// also let {eventData} = req.body;
	// 2) Model.create(eventData)

	try {
		// DO NOT also name this res
		let response = await Event.create(eventData);
		res.status(201).send(response);
	}catch(err){
		console.error(err);
	}
})

app.delete("/events/:eventId", async(req, res) => {
	// .findByIdAndDelete() mongoose method, there are others
	const eventId = req.params.eventId; 
	let response = await Event.findByIdAndDelete(eventId);
	console.log(response);
	res.send("deleted event!");
})

app.put("/events/:eventId", async(req, res) => {
	const eventId = req.params.eventId;
	const updatedData = req.body;
	// q: is req.body ALWAYS a string? can you do the opposite of JSON.stringify on it if it's always a string
	// the last argument tells mongoose to return the new... updated... object?
	let response = await Event.findByIdAndUpdate(eventId, updatedData, {new: true});
	res.send("updated event!");
})

// END OF ROUTES // 

app.listen(PORT, () => {
	console.log(`Server is LIVE on port ${PORT}`);
})
