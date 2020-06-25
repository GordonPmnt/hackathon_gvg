import React, { useState } from 'react';
import Agenda from './components/Agenda.jsx';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";


const App = () => {
  const [events, setEvents] = useState([])

  return (
    <div>
      <Header />
      <Switch>
        <Route 
          exact 
          path="/" 
          render={props => 
            <Home
              {...props}
              events={events}
              setEvents={setEvents}
            />
          } 
        />
        <Route 
          path="/agenda" 
          render={props => 
            <Agenda
              {...props}
              events={events} 
              setEvents={setEvents} 
            />
          } 
        />
      </Switch>

      
    </div>
  );
}

export default App;
