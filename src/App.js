import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import PrivacyPage from './pages/Privacy';
import HomePage from './pages/Home';
import { APPLICATION_ROUTES } from './constants/routes';

function App() {
  return (
    <Router>
        <div>
            <Switch >
              <Route path={APPLICATION_ROUTES.PRIVACY}>
                <PrivacyPage></PrivacyPage>
              </Route>
              <Route path={APPLICATION_ROUTES.HOME}>
                <HomePage></HomePage>
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
