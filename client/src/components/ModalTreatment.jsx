import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalPEP from './ModalPEP';
import Select from '@material-ui/core/Select';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    "&:focus": {
      outline: 'none'
    },
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px'
  },
  button: {
    cursor: 'pointer',
    backgroundColor: 'rgb(197, 42, 34)',
    color: 'white',
    border: 'none',
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    marginBottom: '12%',
  }
}));

const prep = require('../prep.png')

const ModalTreatment = ({ choice, events, setEvents, createEvents }) => {
  const classes = useStyles();
  const [openFirst, setOpenFirst] = React.useState(false);
  const [treatment, setTreatment] = useState('PEP')

  const handleOpen = () => {
    setOpenFirst(true);
  };

  const handleClose = () => {
    setOpenFirst(false);
  };

  const handleChange = (event) => {
    setTreatment(event.target.value)
  }

  return (
    <div>
      <button 
        type="button" 
        onClick={handleOpen}
        className={classes.button}
    >
        {choice}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openFirst}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFirst}>
          <div className={classes.paper}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img style={{height: '50px', marginRight: '15px'}} src={prep} alt="logo" />
              <h2 style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="transition-modal-title"> Record the treatment</h2>
            </div>
            <p style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="transition-modal-description">Choose your treatment</p>
            <Select
                style={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(233,240,248)', marginBottom: '8px', borderRadius: '5px'}}
                native
                value={treatment}
                onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >
              <option aria-label="None" value="" />
              <option value={"PEP"}>PEP</option>
              <option value={"PrEP"}>PrEP</option>
            </Select>
            <ModalPEP
                setOpenFirst={setOpenFirst}
                events={events}
                setEvents={setEvents}
                treatment={treatment}
                createEvents={createEvents}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalTreatment;