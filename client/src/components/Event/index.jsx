import axios from 'axios';
import React, { useState } from 'react';

const Event = ({ event, handleDelete, setEvents }) => {

	const [show, setShow] = useState(false);
	const [newDescription, setNewDescription] = useState(event.description);

	const handleEventChange = () => {
		// axios call to our PUT route, including id as param, and also include new event we need to change the event to
		// PUT /events/eventId
		const response = axios({
			url: `/server/events/${event._id}`,
			method: "PUT",
			data: { description: newDescription }
		}).then((response) => {
			console.log(response);
			setEvents((prevEvents) => {
				return prevEvents.map((prevEvent) => {
					// check if the current event's _id matches that of the updated event
					if (prevEvent._id === event._id) {
						// replace old event with updated one
						return { ...prevEvent, description: newDescription };
					} else {
						// otherwise, keep events as they are
						return prevEvent;
					}
				})
			})
		})


	}

	return (
		<div key={event._id} className="event-item">
			<button onClick={() => handleDelete(event._id)}>Delete</button>
			<button onClick={() => setShow(!show)}>Edit</button>
			<h2>{event.title}</h2>
			<p>Date: {event.date}</p>
			<p>Location: {event.location}</p>
			<p>Description: {event.description}</p>
			<div className="organizer">
				<strong>Organizer:</strong>
				<p>Name: {event.organizer.name}</p>
				<p>Role: {event.organizer.role}</p>
			</div>
			{show ? <form onSubmit={(e) => e.preventDefault()}>
				<input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
				<button onClick={handleEventChange} type="submit">Update event</button>
			</form> : <></>}
		</div>
	);
};

export default Event;
