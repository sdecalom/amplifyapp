import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
    return (
        <div className="App">
            <div><h1>TOTO</h1></div>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
            </header>
            <AmplifySignOut />
        </div>
    );
}

export default withAuthenticator(App);