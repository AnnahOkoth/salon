import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Aboutus from './Pages/Aboutus';


function App() {
  return (
    <div className="ml-[5%] mr-[5%] flex flex-col overflow-hidden gap-5 justify-center">
      <Navbar />
      <Home />
      <Aboutus/>
    </div>
  );
}

export default App;
