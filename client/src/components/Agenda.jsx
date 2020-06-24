import React from 'react';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Ticket from './Ticket'
import axios from 'axios';
import colors from '../colors';
import "./agenda.scss";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    padding: 0 30px;
`

const AgendaContainer = styled.div`
    margin: 3%;
    width: 70%;
`

const PillsContainer = styled.div`
    margin: 3%;
    width: 30%;
`

const Title = () => {
    const logo = require('../hiv_logo.png')
    return (
        <div>
            <img src={logo} alt="logo" />
            <h2>MY NEXT TREATMENTS</h2>
        </div>
    )
}

const Agenda = () => {

    const [events, setEvents] = React.useState([]);
    const [eventId, setEventId] = React.useState();

    const handleView = () => {

    };

    return(
        <Container>
            <PillsContainer>
                <Title />
                <Ticket />
            </PillsContainer>
            <AgendaContainer>
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
                    aspectRatio={1.5}
                    events={events}
                    eventClick={(info) => {
                        setEventId(info.event.id)
                        handleView();
                    }}
                />
            </AgendaContainer>
        </Container>
    )
};

export default Agenda;