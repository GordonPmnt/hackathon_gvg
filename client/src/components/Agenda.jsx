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

const TitleContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Logo = styled.img`
    margin-right: 20px;
    width: 40px;
`

const Header = styled.h2`
    color: ${colors.textBlue};
`

const Title = () => {
    const logo = require('../hiv_logo.png')
    return (
        <TitleContainer>
            <Logo src={logo} alt="logo" />
            <Header>MY NEXT TREATMENTS</Header>
        </TitleContainer>
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