import React from 'react';
import Home from './Home'
import Tweets from "./Tweets"
import Profile from './Profile';
import {Switch, Route, Link} from "react-router-dom"
function App() {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
          <Link to="/Tweets">tweets</Link>
          <Link to="/Profile">Profile</Link>
      </nav>
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
          <Route path="/Tweets">
              <Tweets/>
          </Route>
        <Route path="/Profile">
          <Profile/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
