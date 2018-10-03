import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./component/Login";
import {SignUp} from "./component/SignUp";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';


const LoginView = () => (
    <Login
    />
);

const SignUpView = () => (
    <SignUp />
);

class App extends Component {

    state = {
        isLoggedIn: false

    };

  render() {

      axios.post('http://localhost:8080/user/login', {
          username: 'xyz',
          password: 'password'
      })
          .then(function (response) {
              console.log(response.data);
          })
          .catch(function (error) {
              console.log(error);
          });

      if(this.state.isLoggedIn){
          return (
              <Router>

                  <div>
                      <Route path="/todo" component={SignUpView}/>
                  </div>

              </Router>
          );
      } else {
          return (
              <Router>
                  <div className="App">
                      <header className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                          <p>
                              Bienvenido a PlazApp!
                          </p>
                          <a
                              className="App-link"
                              href="https://reactjs.org"
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              Esto es un LINK
                          </a>
                      </header>

                      <ul>
                          <li><Link to="/">Login</Link></li>
                          <li><Link to="/todo">SignUP</Link></li>
                      </ul>

                      <br/>

                      <div>
                          <Route exact path="/" component={LoginView}/>
                      </div>
                  </div>
              </Router>
          );
      }
  }

}

export default App;
