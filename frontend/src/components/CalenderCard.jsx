import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = ({ events }) => {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-slate-600 dark:text-slate-100 grid-rows-auto1">
      <div className="grid gap-4 md:gap-6 lg:gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="flex-none bg-white dark:bg-slate-800 shadow-xl w-1/4 shadow-slate-200 dark:shadow-slate-800 rounded-lg"
          >
            <div className="p-3 shadow bg-indigo-500 text-indigo-50 uppercase grid place-items-center rounded-t-lg">
              <h3>{event.title}</h3>
            </div>
            <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
              <div className="grid gap-1">
                <p className="text-slate text-sm">Date: {event.date}</p>
                <p className="text-slate text-sm">Time: {event.time}</p>
                <p className="text-slate text-sm">Club: {event.club}</p>
                <p className="text-slate text-sm">Venue: {event.venue}</p>
                <p>Description: {event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddEventForm = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  const loggedIn = !!user;

  const [eventData, setEventData] = useState({
    date: "",
    time: "",
    title: "",
    description: "",
    club: "",
    venue: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data);
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage("Failed to fetch events");
    }
  };

  const handleInputChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/events",
        eventData
      );
      console.log(response.data); // Optionally, log the response data
      // Clear the form after successful submission
      setEventData({
        date: "",
        time: "",
        title: "",
        description: "",
        club: "",
        venue: "",
      });
      fetchEvents(); // Update the event list after adding a new event
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage("Failed to add event");
    }
  };

  return (
    <div>
      <h1>Eventstest</h1>
      <h1>{console.log(loggedIn)}</h1>
      <EventList events={events} />
      <h2>Add Event</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-600">Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Time:</label>
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Description:</label>
          <input
            type="text"
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Club:</label>
          <input
            type="text"
            name="club"
            value={eventData.club}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="text-gray-600">Venue:</label>
          <input
            type="text"
            name="venue"
            value={eventData.venue}
            onChange={handleInputChange}
            className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="col-span-2 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
