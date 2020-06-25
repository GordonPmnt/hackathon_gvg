import React from 'react';
import MediaCard from './MediaCard.jsx';
import Writing from './Writing.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    MediaGeneral:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

       marginLeft: "22%",
       marginRight: "22%",
    },
    MediaWritte:{
        textAlign: "center",
        color: "rgb(65, 149, 216)",
    },

    MediaCard: {
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        marginTop: '5%'
    }
  }));

const Home = ({ events, setEvents }) => {
    const classes = useStyles();
    return (
    <div>
        <div className={classes.MediaGeneral}>
            <img src={require('../hiv_logo.png')} width="100px"></img>
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
            />
            
            <MediaCard
              image= {require('../plan.png')}
              choice="I want to plan a test"
              description="We’re here to help you to find a doctor in order to test you and accompany you during the process"
              events={events}
              setEvents={setEvents}
            />

            <MediaCard
              image={require('../taking.png')}
              choice="I’m taking Prep or PEP to prevent HIV"
              description="You’re taking a prevention treatment such like PEP or PREP. Timing is crucial in order to stop HIV!! Use our tool to plan and manage your treatment."
              events={events}
              setEvents={setEvents}
            />

            <MediaCard
              image={require('../follow.png')}
              choice="I follow a triple therapy"
              description="You follow a triple therapy. We can help you to manage your treatment efficiently on time wherever you are."
              events={events}
              setEvents={setEvents}

            <MediaCard
                image="https://s3-alpha-sig.figma.com/img/2b5c/e1d9/5d257941d9ec951cf4059e27df3efa0c?Expires=1593993600&Signature=QlH73XKB-PD4axF2UCIVz84XFN5H-kZGXPBsP9uyxiH~DRDh286HfgC6jD7E4lNwxrE4ax7ZPycNatb4Qjhrn6TS4oc-yfMZ~YB9IV8lRQdE7kVYxYdYrzywEfs30zcgpUwpMXO3P7hur3xJQn2HGxf84V1g4ZoNc5rJE8rDSU8r96g~cU53yxkX4sRNfkkAqGKXrPkpCXW4ay3IpLvW1PN2tDUxZRKhHtDm-Fn9hlNBfJwzwIFZp4XT~TeUab0sYoviipx5V7iOtfSwiaVZrPnzDk-erGV33iE9T~tnKVDRuruHP63SRqHhG3Xw8s13pbNuwQorigGcl-Horg~Npg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                choice="I follow a triple therapy"
                description="You follow a triple therapy. We can help you to manage your treatment efficiently on time whereever you are."
                setEvents={setEvents}
            />
        </div>
    </div>
    )
}

export default Home;