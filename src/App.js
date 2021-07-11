import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containners/Home';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ContactUs from './components/ContactUs';
import FindYourStyle from './components/FindYouStyle/FindYourStyle';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/how-it-works" component={HowItWorks} />
      <Route exact path="/contact-us" component={ContactUs} />
      <Route exact path="/find-your-style" component={FindYourStyle} />
      <Route exact path="/" component={Home} />
      
    </BrowserRouter>

  );
}

export default App;
