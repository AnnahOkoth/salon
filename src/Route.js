import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '/Components/Home';
import Services from './Pages/Services';
import AboutUs from './Pages/Aboutus';
import Contact from './Pages/Contact';

ReactDOM.render(<App />, document.getElementById('root')); {
  return (
    <Router>
      <Switch>
        <Route exact="/" component={<App />} />
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/Aboutus" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Route;
