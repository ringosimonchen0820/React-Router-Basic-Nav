import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from 'react-router-dom';
const App = () => (
  <div>
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/about'><About /></Route>
        <Route path='/contact'><Contact /></Route>
      </Switch>
    </div>
  </div>
);

export default App;
