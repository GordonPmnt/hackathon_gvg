import React from 'react';
import Agenda from './components/Agenda.jsx';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Agenda from "./components/Agenda"

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Agenda" component={Agenda} />
      </Switch>
    </div>
  );
}

export default App;
