import React, { useState } from "react";
// import axios from "axios";

function CalendarComponent() {
  const [events, setEvents] = useState([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEventDate, setNewEventDate] = useState("");
  const [newEventTime, setNewEventTime] = useState("");
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventDescription, setNewEventDescription] = useState("");
  const [newEventClub, setNewEventClub] = useState("");
  const [newEventVenue, setNewEventVenue] = useState("");
  const [eventAmount, setEventAmount] = useState(20);

  const toggleAddEvent = () => {
    setShowAddEvent(!showAddEvent);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      generateEvent();
    }
  };

  const toggleEventDetails = (eventIndex) => {
    setEvents((prevEvents) =>
      prevEvents.map((event, index) =>
        index === eventIndex ? { ...event, showDetails: !event.showDetails } : event
      )
    );
  };

  const generateEvent = () => {
    const newEvent = {
      id: Date.now(),
      date: newEventDate,
      time: newEventTime,
      title: newEventTitle,
      description: newEventDescription,
      club: newEventClub,
      venue: newEventVenue,
      showDetails: false,
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setNewEventDate("");
    setNewEventTime("");
    setNewEventTitle("");
    setNewEventDescription("");
    setNewEventClub("");
    setNewEventVenue("");
    setShowAddEvent(false);
  };

  // Sort the events by date and time
  const sortedEvents = events
    .slice(0, eventAmount)
    .sort((a, b) => {
      const dateA = new Date(`${a.date}T${a.time}`);
      const dateB = new Date(`${b.date}T${b.time}`);
      return dateA - dateB;
    });

  return (
    <div className="bg-slate-50 dark:bg-slate-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-slate-600 dark:text-slate-100 grid-rows-auto1">
      <header className="text-center grid p-4 place-items-center content-center">
        <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">
          My Calendar Events
        </h1>
        <label htmlFor="eventAmt">Events to Show</label>
        <input
          type="range"
          id="eventAmt"
          min="1"
          value={events.length === 0 ? "20" : eventAmount}
          max="20"
          className="accent-blue-600 cursor-grab"
          onChange={(e) => setEventAmount(parseInt(e.target.value))}
        />
      </header>
      <main className="max-w-6xl w-full mx-auto flex flex-col justify-between">
        <section
          className="grid gap-4 md:gap-6 lg:gap-8 items-start grid-cols-cards"
          id="events-container"
        >
          {sortedEvents.map((event, index) => (
            <article
              key={event.id}
              className="bg-white dark:bg-slate-800 shadow-xl shadow-slate-200 dark:shadow-slate-800 rounded-lg"
            >
              <div className="p-3 shadow bg-indigo-500 text-indigo-50 uppercase grid place-items-center rounded-t-lg">
                <div className="text-3xl font-bold">{event.club}</div>
              </div>
              <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
                <div className="grid gap-1">
                  <p className="text-slate text-sm">{event.date}</p>
                  <p className="text-slate text-sm">{event.time}</p>
                  <p className="text-slate text-sm">{event.venue}</p>
                  <p className="text-slate text-sm font-bold">{event.title}</p>
                 
                  <p className="text-slate text-sm"></p>
                  <div className="grid gap-1">
                    <button
                      className="text-slate flex gap-1 items-center cursor-pointer"
                      aria-expanded={event.showDetails}
                      aria-controls={`details-${index}`}
                      onClick={() => toggleEventDetails(index)}
                    >
                      <p className="text-slate pointer-events-none">see details</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-4 h-4 pointer-events-none transition-transform ${
                          event.showDetails ? "transform rotate-180" : ""
                        }`}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    {event.showDetails && (
                      <div
                        className="description-container overflow-auto max-h-40"
                        id={`details-${index}`}
                        aria-labelledby={`btn-${index}`}
                      >
                        <p className="text-slate">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
        <div className="flex justify-center mt-4 md:mt-6 lg:mt-8">
          {showAddEvent ? (
            <div className={`input-container ${window.innerWidth < 720 ? 'flex flex-col gap-4 md:gap-6 lg:gap-8 items-center justify-center' : ''}`}>
              <input
                type="date"
                value={newEventDate}
                onChange={(e) => setNewEventDate(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <input
                type="time"
                value={newEventTime}
                onChange={(e) => setNewEventTime(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <input
                type="text"
                placeholder="Event Title"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <input
                type="text"
                placeholder="Event Description"
                value={newEventDescription}
                onChange={(e) => setNewEventDescription(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <input
                type="text"
                placeholder="Event Club"
                value={newEventClub}
                onChange={(e) => setNewEventClub(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <input
                type="text"
                placeholder="Event Venue"
                value={newEventVenue}
                onChange={(e) => setNewEventVenue(e.target.value)}
                className="border border-black p-2 rounded-md text-black"
                onKeyPress={handleKeyPress}
              />
              <div className="flex justify-center gap-4 md:gap-6 lg:gap-8">
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
                  onClick={generateEvent}
                >
                  Add Event
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
                  onClick={toggleAddEvent}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md"
              onClick={toggleAddEvent}
            >
              Add Event
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default CalendarComponent;
