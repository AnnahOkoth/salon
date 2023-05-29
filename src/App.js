import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import AboutUs from './Pages/Aboutus';

function App() {
  return (
    <div className="ml-[5%] mr-[5%] flex flex-col overflow-hidden gap-5 justify-center">
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <AboutUs />
    </div>
  );
}

export default App;
