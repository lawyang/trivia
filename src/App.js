import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Landing from './components/page/Landing/Landing';
import Trivia from './components/page/Trivia/Trivia';
import Header from './components/global/Header/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#475c87',
      light: '#7589b7',
      dark: '#18335a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#772424',
      light: '#aa514c',
      dark: '#470000',
      contrastText: '#ffffff',
    },
  },
});

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <MuiThemeProvider theme={theme}>
          <div>
            <Router>
              <div>
              <Header />
                <Switch>
                  <Redirect exact from="/" to="/home" />
                  <Route 
                    path="/home"
                    component={Landing}
                    className='appFrame'
                  />
                  <Route 
                    path="/trivia"
                    component={Trivia}
                    className='appFrame'
                  />
                  <Route render={() => <h1>404</h1>} />
                </Switch>
              </div>
            </Router>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
