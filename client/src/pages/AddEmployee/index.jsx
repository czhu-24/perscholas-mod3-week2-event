import axios from 'axios';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddEmployee = () => {

	const [startDate, setStartDate] = useState(new Date());
	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		role: "ceo",
		dateHired: startDate,
		pay: 0
	})

	const handleForm = async () => {
		// axios call to do a PUT request
		// to make a new employee
		// TODO: START HERE!!! 
	}


	return (
		<>
			<div>AddEmployee</div>
			<form onSubmit={handleForm}>
				<label htmlFor="firstName">First Name:</label>
				<input type="text" name="firstName" id="firstName" />
				<br />

				<label htmlFor="lastName">Last Name:</label>
				<input type="text" name="lastName" id="lastName" />
				<br />

				<label htmlFor="role">Role:</label>
				<select id="role" name="role">
					<option value="ceo" selected>CEO</option>
					<option value="manager">Manager</option>
					<option value="senior">Senior</option>
					<option value="contributer">Contributer</option>
				</select>
				<br />

				<label htmlFor="dateHired">Date Hired:</label>
				<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
				<br />

				<label htmlFor="pay">Pay:</label>
				<input type="number" name="pay" id="pay" />
				<br />

				<button type="submit">Add employee</button>
			</form>
		</>
	)
}

export default AddEmployee