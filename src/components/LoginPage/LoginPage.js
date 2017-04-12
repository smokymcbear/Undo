import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginForm from './LoginForm';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <LoginForm />
                </MuiThemeProvider>
            </div>
        );
    }
}
