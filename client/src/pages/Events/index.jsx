import React, { useState } from 'react'
import EventForm from '../../components/EventForm'
import EventList from '../../components/EventList'
import './index.css'

const Events = () => {
	const [events, setEvents] = useState([]);

	return (
		<>
			<EventForm setEvents={setEvents} />
			<EventList events={events} setEvents={setEvents} />
		</>
	)
}

export default Events