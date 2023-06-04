import React from 'react';

function Booknow() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    
    // Perform any necessary actions with the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Service:', service);
  };

  return (
    <div>
      <h1>Book Now</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="service">Service:</label>
        <select id="service" name="service" required>
          <option value="">Select a service</option>
          <option value="Haircut">Haircut</option>
          <option value="Coloring">Coloring</option>
          <option value="Styling">Styling</option>
        </select>
        
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default Booknow;
