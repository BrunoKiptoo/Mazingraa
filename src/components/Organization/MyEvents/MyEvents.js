



import React, { useState } from 'react';

function MyEvents() {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [eventAdded, setEventAdded] = useState(false);
  const [event, setEvent] = useState({
    location:'',
    title:'',
    time: '',
    date: '',
    poster: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent(prevState => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // POST fetch to your database
    fetch('http://localhost:5000/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
      .then(response => response.json())
      .then(data => {
        setEvents(prevState => [...prevState, data]);
        setEvent({
          location:'',
          title:'',
          time: '',
          date: '',
          poster: '',
          description: '',
        });
        handleEventAdded(); // call handleEventAdded here
      })
      .catch(error => console.log(error));
  }
  
  

  const handleEventAdded = () => {
    setEventAdded(true);
    setShowForm(false);
  }
  

  const handleEdit = (id) => {
    // find the event to edit
    const eventToEdit = events.find(event => event.id === id);
    setEvent(eventToEdit);
  }

 



  const handleUpdate = (e) => {
    e.preventDefault();

    // PUT fetch to update the event
    fetch(`http://localhost:5000/events/${event.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event),
    })
      .then(response => response.json())
      .then(data => {
        const updatedEvents = events.map(event => {
          if (event.id === data.id) {
            return data;
          }
          return event;
        });
        setEvents(updatedEvents);
        setEvent({
          location:'',
          title:'',
          time: '',
          date: '',
          poster: '',
          description: '',
        });
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
    <div className="p-6">
      {showForm ? (
        <>
          <form onSubmit={handleSubmit}>
            {/* INPUT FIELDS */}

    <div className="flex flex-col">
       <label htmlFor="time" className="text-lg font-medium leading-6 text-gray-900"> Event Title</label>
     <input
      type="text"
      name="title"
      value={event.title}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the title"
    />
  </div>


  <div className="flex flex-col">
       <label htmlFor="time" className="text-lg font-medium leading-6 text-gray-900">Time</label>
     <input
      type="time"
      name="time"
      value={event.time}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the time"
    />
  </div>
  <div className="flex flex-col mt-4">
    <label htmlFor="date" className="text-lg font-medium leading-6 text-gray-900">Date</label>
    <input
      type="date"
      name="date"
      value={event.date}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the date"
    />
  </div>

  {/* <div className="flex flex-col mt-4">

<label className="text-lg font-medium leading-6 text-gray-900">Date and Time:</label>
<input 
type="datetime-local" 
name="date" 
value={event.date} 

onChange={handleChange} 
className="text-lg font-medium leading-6 text-gray-900" 
placeholder="Enter the date"/>

  </div> */}

 
  <div className="flex flex-col mt-4">
    <label htmlFor="description" className="text-lg font-medium leading-6 text-gray-900">Description</label>
    <textarea
      name="description"
      value={event.description}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter the description"
    ></textarea>
  </div>

  <div className="flex flex-col ">
    <label htmlFor="poster" className="text-lg font-medium leading-6 text-gray-900">Location</label>
    <input
      type="text"
      name="location"
      value={event.location}
      onChange={handleChange}
      className="mt-2 text-lg p-2 border border-gray-300 rounded-md"
      placeholder="Enter event location"
    />

<label className="block mt-4 text-lg font-medium leading-6 text-gray-900">Poster:</label>
<input type="file" name="poster" onChange={handleChange} className="mb-4" />
{event.poster && (
<div className="mt-4">

</div>
)}
  </div>

  


  {/* CLOSE FORM AND SHOW EVENT ADDED BUTTON */}
  <button type="submit" onClick={() => setShowForm(false)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] text-white inline-flex justify-center 
  rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
  {eventAdded ? 'Event Added' : 'Add Event'}
</button>

          </form>
         
        </>
      ) : (
        <button type="button" onClick={() => setShowForm(true)} className="py-2 px-4 bg-gradient-to-r from-[#8f7300] to-[#c4a300] hover:from-[#c4a300] hover:to-[#8f7300] focus:ring-[#8f7300] focus:ring-offset-[#c4a300] 
        text-white inline-flex justify-center rounded-md border border-transparent shadow-sm font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
          Add Event
        </button>
      )}
    </div>
  </div>
);
}

export default MyEvents;




    


