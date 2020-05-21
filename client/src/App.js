import React, { useContext } from "react";
import Welcome from "./Welcome.js";
import Tweets from "./Tweets";
import Profile from "./Profile";
import styled from "styled-components";
import { Switch, Route, Link } from "react-router-dom";
import { UserContext } from './context/UserProvider'


const Navbar = styled.nav`
    width: 100%;

    position: fixed;
`;

function App() {
    // const { token, logout } = useContext(UserContext)
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Welcome/>
                </Route>
              
                <Route path='/Tweets'>
                    <Navbar>
                        <Link to='/'>sign in</Link>
                        <Link to='/Tweets'>tweets</Link>
                        <Link to='/Profile'>Profile</Link>
                    </Navbar>
                    <Tweets />
                </Route>
                <Route path='/Profile'>
                    <Navbar>
                        <Link to='/'>sign in</Link>
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
