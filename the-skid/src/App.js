import React from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Intent,
//   Route,
//   Link
// } from "react-router-dom";
import Intent from './components/Intent'

function App() {
  return (
    // <Router>
      <div>
      <header className="App-header">
          <div>WELL of INTENT</div>
          <div>SEARCH</div>
          <div>LOGIN</div>
        </header>
        <div className="title">

        </div>
        <Intent />
        {/* <nav className="nav">
          <ul>
            <li>
              <Link to="/intent">WELL of INTENT</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/wine">Wine</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route path="/intent">
            <Intent />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/wine">
            <Wine />
          </Route>
        </Switch> */} 
      </div>
    //</Router>
  );
}

export default App;
