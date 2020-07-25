import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Intent from './components/Intent';
import Us from './components/Us';
import Users from './components/Users' 

function App() {
  return (
    <Router>
      <div>
      <header className="App-header">
        <div>Inspiring   the   Burnout   in   All  of   Us</div>
        <div className="linkin">
          <div><Link to="/us">US</Link></div>
          <div><Link to="/intent">WELL of INTENT</Link></div>
          <div><Link to="/u">U</Link></div>
        </div>

        </header>
        <div className="title">

        </div>
         
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}
         <Switch>
          <Route path="/intent">
            <Intent />
          </Route>
          <Route path="/us">
            <Us />
          </Route>
          <Route path="/u">
            <Users />
          </Route>
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
