// App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registration from './components/Registration';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
    <Header/>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/" component={Login} />
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
