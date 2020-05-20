import React from "react";
// import Home from "./Home";
import Welcome from "./Welcome.js";
import Tweets from "./Tweets";
import Profile from "./Profile";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";

const Navbar = styled.nav`
    width: 100%;

    position: fixed;
`;
//routw path Welcome not Tweets
function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Welcome />
                </Route>
                <Route path='/Tweets'>
                    <Navbar>
                        <Link to='/'>Home</Link>
                        <Link to='/Tweets'>tweets</Link>
                        <Link to='/Profile'>Profile</Link>
                    </Navbar>
                    <Tweets />
                </Route>
                <Route path='/Profile'>
                    <Navbar>
                        <Link to='/'>Home</Link>
                        <Link to='/Tweets'>tweets</Link>
                        <Link to='/Profile'>Profile</Link>
                    </Navbar>
                    <Profile />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
