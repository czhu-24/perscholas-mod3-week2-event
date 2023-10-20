// REMEMBER: we install cors, morgan, and express for the BACKEND

const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
// adds standard security to server
const helmet = require('helmet');
require('dotenv').config();

const PORT = 3000;

// bring mongodb file into this server file
require('./config/db.js');

const app = express();

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

app.post("/events", (req, res) => {
	// 1) get data that was sent from front-end
	// we're sending over eventData as the data for the POST request
	// and eventData is an object
	const eventData = req.body.eventData; 
	// also let {eventData} = req.body;
	// 2) Model.create(eventData)
})

// END OF ROUTES // 

app.listen(PORT, () => {
	console.log(`Server is LIVE on port ${PORT}`);
})