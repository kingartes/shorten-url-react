import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation/Navigation';
import PrivacyPage from './pages/Privacy';
import HomePage from './pages/Home';
import { APPLICATION_ROUTES } from './constants/routes';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch >
            <Route path={APPLICATION_ROUTES.REGISTER}>
                <RegisterPage />
              </Route>
              <Route path={APPLICATION_ROUTES.PRIVACY}>
                <PrivacyPage />
              </Route>
              <Route path={APPLICATION_ROUTES.HOME}>
                <HomePage />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
