import React from 'react';
import NavigationBar from './NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InsightPage from './InsightsPage';
import SettingsPage from './SettingsPage';
import CreateUserPage from './CreateUserPage';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path = "/" component = { LoginPage }/>
          <Route path = "/home" component = { HomePage }/>
          <Route path = "/insights" component = {InsightPage}/>
          <Route path = "/settings" component = {SettingsPage}/>
          <Route path = "/createAccount" component = {CreateUserPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
