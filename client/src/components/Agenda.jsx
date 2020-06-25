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
    flex-direction: column;
`

const Logo = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`

const Header = styled.h2`
    color: ${colors.textBlue};
    margin: 0;
    text-align: center;
`

const ToDoList = styled.div`
    overflow: scroll;
    max-height: 52.5vh;
`


const Title = ({ events }) => {
    const logo = require('../pillbox.png')
    return (
        <TitleContainer>
            <Header>MY PILLS-BOX {`(${events.length} PILLS)`} </Header>
            <Logo src={logo} alt="logo" />
        </TitleContainer>
    )
}

const Agenda = ({ events, setEvents }) => {

    const [eventId, setEventId] = React.useState();

    const handleView = () => {

    };

    const avatarLogo = require('../pep.png')
    return(
        <Container>
            <PillsContainer>
                <Title events={events} />
                <ToDoList>
                    {events.map(event =>                 
                        <Ticket
                            key={event.id}
                            range={"+/- 1h"}
                            avatar={avatarLogo}
                            {...event}
                        />)
                    }
                </ToDoList>
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