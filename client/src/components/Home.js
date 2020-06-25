import React from 'react';
import MediaCard from './MediaCard.jsx';
import Writing from './writing.jsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    MediaCard: {
        display:'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        marginTop: '5%'
    }
  }));

const Home = () => {
    const classes = useStyles();
    return (
    <div>
        <div>
            <Writing/>
        </div>
        <div className={classes.MediaCard}>
            <MediaCard 
            image = {require('../risk.png')}
            choice="I took a risk"
            description="You took a risk and you’re wondering if you got HIV. Don’t panic and tell us everything"
            />
            
            <MediaCard
            image= {require('../plan.png')}
            choice="I want to plan a test"
            description="We’re here to help you to find a doctor in order to test you and accompany you during the process"
            />

            <MediaCard
            image={require('../taking.png')}
            choice="I’m taking Prep or PEP to prevent HIV"
            description="You’re taking a prevention treatment such like PEP or PREP. Timing is crucial in order to stop HIV!! Use our tool to plan and manage your treatment."
            />

            <MediaCard
            image={require('../follow.png')}
            choice="I follow a triple therapy"
            description="You follow a triple therapy. We can help you to manage your treatment efficiently on time wherever you are."
            />
        </div>
    </div>
    )
}

export default Home;