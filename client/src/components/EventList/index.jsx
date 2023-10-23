import axios from "axios";
import { useEffect } from "react";

const EventList = ({ events, setEvents }) => {


	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios('/server/events');
				setEvents(response.data);
			} catch (error) {
				console.error('Error fetching events:', error);
			}
		};
		fetchEvents();
	}, []);

	const handleDelete = async (eventId) => {
		// 1) go to MongoDB and delete from DB
		let response = await axios({
			method: "DELETE",
			// url will  be "localhost:3000/events/eventId"
			// ONLY USE COLONS (/events/:eventID) WHEN DEFINING PATHS FOR ROUTES
			url: `/server/events/${eventId}`
		});
		// 2) deleted event is still inside the events state variable! it's still visible in the UI!

		if (response.status === 200) {
			// setting events state var to filtered version of current events where the event's id is NOT eventId (keep every event whose id doesn't match that of clicked on event's id)

			// 3) so, set state without this event
			setEvents(events.filter(event => event._id !== eventId));
		}

	}

	return (
		<div className="event-list">
			<h1>My List Of Events</h1>
			{events.length > 0 ? (
				events.map((event) => (
					<div key={event._id} className="event-item">
						<button onClick={() => handleDelete(event._id)}>Delete</button>
						<h2>{event.title}</h2>
						<p>Date: {event.date}</p>
						<p>Location: {event.location}</p>
						<p>Description: {event.description}</p>
						<div className="organizer">
							<strong>Organizer:</strong>
							<p>Name: {event.organizer.name}</p>
							<p>Role: {event.organizer.role}</p>
						</div>
					</div>
				))
			) : (
				<p>No events yet</p>
			)}
		</div>
	);
};

export default EventList;