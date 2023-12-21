// App.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import AdminDashboard from "./components/AdminDashboard";
import CreateAccount from "./components/Admin/CreateAccount";
import InviteUsers from "./components/Admin/InviteUsers";
import UpgradeDowngrade from "./components/Admin/UpgradeDowngradePermission";
import CreateInternProfile from "./components/Admin/CreateInternProfile";
import CreateEvaluationForm from "./components/Admin/CreateEvaluationForm";
import EvaluatorDashboard from "./components/Evaluator/EvaluatorDashboard";
import InternDashboard from "./components/Intern/InternDashboard";


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />

        {/* Evaluator Routes */}
        <Route path="/evaluator-dashboard" component={EvaluatorDashboard} />

        {/* Intern Routes */}
        <Route path="/intern-dashboard" component={InternDashboard} />
        
        {/* Admin Routes */}
        <Route path="/admin-create-account" component={CreateAccount} />
        <Route path="/admin-invite-users" component={InviteUsers} />
        <Route path="/admin-create-intern" component={CreateInternProfile} />
        <Route path="/admin-upgrade-downgrade" component={UpgradeDowngrade} />
        <Route path="/admin-evaluation-form" component={CreateEvaluationForm} />
        <Route path="/" component={AdminDashboard} />
      </Switch>
      <Footer />
    </div>
  );
}
;
export default App;
