import {HashRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Add from './components/Add';
import AddReview from './components/AddReview';
import Review from './components/Review';
import Edit from './components/Edit';
import NavigationBar from './components/NavigationBar';
import './App.css';
import { Container } from 'react-bootstrap';
import React, { useState } from "react";


function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  let onLoggedIn = (email) => {
  localStorage.setItem('username', email);
  setUsername(email);
  }

  return (
    <HashRouter>
      <Container fluid>
      <NavigationBar username={username}/>
      <Switch>
        <Route exact path="/" component={Home}>
          <Home />
          </Route>
        <Route path="/login">
        <Login onLoggedIn= {onLoggedIn} />
        </Route>
        <Route path="/add">
        <Add/>
        </Route>
        <Route path="/edit" component={Edit}>
        <Edit/>
        </Route>
        <Route path="/review" component={Review}>
        <Review/>
        </Route>
        <Route path="/addreview" component={AddReview}>
        <AddReview/>
        </Route>
        </Switch>
      </Container>
    </HashRouter>
    );
  };
export default App;


