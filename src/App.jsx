import './App.css';
import Auth from './views/Auth'
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './components/Header';


function App() {
  return (
    <div>
     <Header />
      <Router>
        <Switch>
          <Auth />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
