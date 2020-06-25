import React from 'react';
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Ticket from './Ticket';
import colors from '../colors';
import "./agenda.scss";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
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

const Agenda = ({ events, setEvents }) => {

    const [eventId, setEventId] = React.useState();

    const handleView = () => {

    };

    const avatarLogo = require('../prep.png')

    return(
        <Container>
            <PillsContainer>
                <Title />
                <Ticket
                    title={"PEP"}
                    range={"+/- 1h"}
                    datetime={"Monday 6th June 3:15 pm"}
                    avatar={avatarLogo}
                />
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