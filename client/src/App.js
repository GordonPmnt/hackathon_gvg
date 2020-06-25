import React, { useState } from 'react';
import Agenda from './components/Agenda.jsx';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";


const App = () => {
  const [events, setEvents] = useState([])
  const createEvents = (treatment, firstDate) => {
    let newEvents = events
    let dateTime = firstDate
    for(let i=1; i<=30; i++) {
      newEvents = [
        ...newEvents,
        { 
          id: i,
          treatment,
          dateTime,
        }
      ]
    };
    setEvents(newEvents);
  }

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
              createEvents={createEvents}
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
