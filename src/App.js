import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containners/Home';
import HowItWorks from './components/HowItWorks/HowItWorks';
import ContactUs from './components/ContactUs';
import FindYourStyle from './components/FindYouStyle/FindYourStyle';
import ArtDetail from './components/ArtDetail/ArtDetail';
import { I18nextProvider, Trans } from 'react-i18next';

import i18n from './i18n';
import ArtDetailStepTwo from './components/ArtDetail/ArtDetailStepTwo';
import ArtDetailStepThree from './components/ArtDetail/ArtDetailStepThree';

function App() {
  return (

    <BrowserRouter>
        <Route exact path="/how-it-works" component={HowItWorks} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/find-your-style" component={FindYourStyle} />
        {/* <Route exact path="/make-your-youniq/:id" component={ArtDetail} /> */}
        <Route exact path="/make-your-youniq/:id" render={(props) => <ArtDetail {...props} /> } />
        <Route exact path="/make-your-youniq-2/:id" render={(props) => <ArtDetailStepTwo {...props} /> } />
        <Route exact path="/make-your-youniq-3/:id" render={(props) => <ArtDetailStepThree {...props} /> } />
        <Route exact path="/" component={Home} />
    </BrowserRouter>
  

  );
}

export default App;
