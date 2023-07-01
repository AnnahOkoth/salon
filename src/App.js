import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
      <div className="ml-[5%] mr-[5%] flex flex-col overflow-hidden gap-5 justify-center">
        <Navbar />
        <Home />
      </div>
  );
}

export default App;
