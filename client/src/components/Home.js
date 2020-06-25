import React from 'react';
import MediaCard from './MediaCard.jsx';
import Writing from './NewWriting';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';

const useStyles = makeStyles(() => ({
    MediaGeneral:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

       marginLeft: "21%",
       marginRight: "21%",
       marginTop: "3%",
    },
    MediaWritte:{
        fontSize: "20px",
        textAlign: "center",
        color: "rgb(65, 149, 216)",
    },

    MediaCard: {
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center',
        marginBottom: "10%",
    }
  }));

const Home = ({ events, setEvents, createEvents }) => {
    const mobile = useMediaQuery(
      json2mq({
        maxWidth: 600,
      }),
    );
    const classes = useStyles();
    return (
    <div>
        <div className={classes.MediaGeneral}>
            <img src={require('../hiv_logo.png')} width="75px" style={mobile ? { margin: '25px' } : { marginRight: '30px' }} ></img>
            <div className={classes.MediaWritte}>
               <Writing/>
            </div>
        </div>
        <div className={classes.MediaCard}>
            <MediaCard 
              image = {require('../risk.png')}
              choice="I took a risk"
              description="You took a risk and you’re wondering if you got HIV. Don’t panic and tell us everything"
              events={events}
              setEvents={setEvents}
              createEvents={createEvents}
              risk
            />
            
            <MediaCard
              image= {require('../plan.png')}
              choice="I want to plan a test"
              description="We’re here to help you to find a doctor in order to test you and accompany you during the process"
              events={events}
              setEvents={setEvents}
              createEvents={createEvents}
            />

            <MediaCard
              image={require('../taking.png')}
              choice="I’m taking PrEP or PEP to prevent HIV"
              description="You’re taking a prevention treatment such like PEP or PrEP. Timing is crucial in order to stop HIV!! Use our tool to plan and manage your treatment."
              events={events}
              setEvents={setEvents}
              createEvents={createEvents}
            />

            <MediaCard
              image={require('../follow.png')}
              choice="I follow a triple therapy"
              description="You follow a triple therapy. We can help you to manage your treatment efficiently on time wherever you are."
              events={events}
              setEvents={setEvents}
              createEvents={createEvents}
            />
          
        </div>
    </div>
    )
}

export default Home;