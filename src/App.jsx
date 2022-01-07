import './App.css';
import Auth from './views/Auth'
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Login from './views/Login';
import Home from './views/Home';


function App() {
  return (
    <div>
     <Header />
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/signup">
            <Auth />
          </Route>
          <Route exact path="/login"> 
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
