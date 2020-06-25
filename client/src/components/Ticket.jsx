import React from 'react';
import styled from 'styled-components';
import ModalCheck from './ModalCheck';
import colors from '../colors';

const Container = styled.div`
    padding: 5%;
    margin-top: 5%;
    width: 100%;
    border-radius: 15px;
    background: ${colors.lightBlue};
    display: flex;
    flex-direction: row;
    align-content: center;
`
const Title = styled.h4`
    margin: 0;
    font-size: 1rem;
`

const ComfortRange = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const DateTime = styled.p`
    margin: 0;
    font-size: 0.8rem;
`

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 20px;
    border-radius: 100%;
`

const Label = styled.div`
    display: flex;
    flex-direction: column;
`

const Button = styled.div`
    position: relative;
    top: 35px;
    height: 25px;
    left: 100px;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 15px;
    background: ${colors.youtubeRed};
    cursor: pointer;
`

const Ticket = ({ id, title, range, start, avatar }) => {
    let displayedDate = new Date(start)
    return (
        <Container>
            <Avatar src={avatar} alt="avatar" />
            <Label>
                <Title>{`${title} (1 pill)`}</Title>
                <DateTime>{"Day: "} {displayedDate.toLocaleDateString()}</DateTime>
                <DateTime>{"Time: "} {displayedDate.toLocaleTimeString()}</DateTime>
            </Label>
            <Button>
                <ModalCheck />
            </Button>
        </Container>
    )
}

export default Ticket;