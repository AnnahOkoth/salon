import React from 'react';
import Navbar from '../Components/Navbar';

function Contact () {
  return (
    <div className="container mx-auto p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">
        We'd love to hear from you! If you have any questions or inquiries,
        please feel free to reach out to us using the contact information
        below:
      </p>
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-600">
            123 Salon Street, City Name, Country
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-600">info@example.com</p>
        </div>
      </div>
      <p className="text-gray-600">
        Our team will get back to you as soon as possible. We value your
        feedback and are dedicated to providing exceptional customer service.
      </p>
    </div>
  );
}

export default Contact;
