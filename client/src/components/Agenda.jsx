import React from 'react';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from 'axios';
import colors from '../colors';
import "./agenda.scss";
import styled from 'styled-components';

const Container = styled.div`
    margin: 0 5%;
    padding: 0 30px;
`

const Agenda = () => {

    const [events, setEvents] = React.useState([]);
    const [eventId, setEventId] = React.useState();

    const handleView = () => {

    };

    return(
        <Container>
            
          <FullCalendar
              defaultView="timeGridWeek"
              plugins={[timeGridPlugin]}
              firstDay={1}
              weekends={true}
              allDaySlot={false}
              header={{
                  left: '',
                  center: '',
                  right: ''
              }}
              footer={{
                  right: 'prev, next'
              }}
              aspectRatio={2}
              minTime={"04:00:00"}
              maxTime={"23:00:00"}
              events={events}
              eventClick={(info) => {
                    setEventId(info.event.id)
                  handleView();
              }}
          />
        </Container>
    )
};

export default Agenda;