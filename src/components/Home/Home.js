import React, {Component} from 'react';
import logo from './muscle.png';
// import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignupButton from './SignupButton.js';
import LoginButton from './LoginButton.js';
class Home extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>ŪNDO</h2>
                </div>
                <p className="App-intro">
                    MoSho's and Killa Kev's Home.
                    <code>src/App.js</code>
                </p>
                <MuiThemeProvider>
                    <SignupButton/>
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <LoginButton/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Home;