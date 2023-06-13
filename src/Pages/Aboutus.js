import React from 'react';
import Navbar from '../Components/Navbar';

function Aboutus() {
  return (
    <div className="container mx-auto p-8">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-600 mb-6">
        Welcome to our website! We are a team of dedicated professionals committed to providing exceptional services to our valued customers.
      </p>
      <p className="text-gray-600 mb-6">
        Our mission is to create an enjoyable experience for every client. We strive to deliver outstanding results and exceed expectations.
      </p>
      <p className="text-gray-600 mb-6">
        With years of expertise and a passion for what we do, we are confident in our ability to meet your needs and leave you satisfied.
      </p>
    </div>
  );
}

export default Aboutus;

