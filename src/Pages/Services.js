import React from 'react';
import {db} from '../firebase';
import { collection, addDoc } from "firebase/firestore"; 


function Services() {
  const handleCheckOut=async()=>{
    const Haircut = "Haircut";
    const docRef = await addDoc(collection(db, "Booknow"), {
      name: "Annah Awuor",
      title:Haircut,
      Description:'Professional haircut by experienced stylists',
      price:'$30'
    });
    console.log("Document written with ID: ", docRef.id);
  }
  const services = [
    {
      id: 1,
      title: 'Haircut',
      description: 'Professional haircut by experienced stylists',
      price: '$30',
    },
    {
      id: 2,
      title: 'Hair Color',
      description: 'Expert hair coloring for a vibrant look',
      price: '$60',
    },
    {
      id: 3,
      title: 'Manicure',
      description: 'Nail care and polish for beautiful hands',
      price: '$25',
    },
    {
      id: 4,
      title: 'Pedicure',
      description: 'Foot care and nail treatment for happy feet',
      price: '$35',
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-gray-800 font-semibold">{service.price}</p>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4"
             onClick={handleCheckOut}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
