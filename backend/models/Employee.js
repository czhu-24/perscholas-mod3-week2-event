const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
	{
		firstName: {type: String, required: true},
		lastName: {type: String, required: true},
		role: {type: String, required: true},
		dateHired: {type: Date},
		pay: {type: Number}
	},
	{
		timestamps: true
	}

);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;