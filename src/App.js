import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/SignUp';
import LifeStyle from './Components/pages/LifeStyle';
import AboutUs from './Components/pages/AboutUs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/SignUp' component={SignUp} />
      <Route path='/LifeStyle' component={LifeStyle} />
      <Route path='/AboutUs' component={AboutUs} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
