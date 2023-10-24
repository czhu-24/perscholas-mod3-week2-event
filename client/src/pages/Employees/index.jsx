import React from 'react'
import ViewEmployees from '../ViewEmployees';
import AddEmployee from '../AddEmployee';
import { Link, Route, Routes } from 'react-router-dom';
import './index.css'

const Employees = () => {
	return (
		<>

			{/* nav bar with links */}
			<nav className="flex">
				<Link to="/employees/view">See all employees</Link>
				<Link to="/employees/add">Add employee</Link>
			</nav>
			{/* routes here */}

		</>

	)
}

export default Employees;