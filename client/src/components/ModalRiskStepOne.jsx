import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ModalRiskStepTwo from './ModalRiskStepTwo';
import colors from '../colors';
import { useState } from 'react';

const Img = styled.img`
  display: block;
  width: 175px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`

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
    width: '100%',
    height: '50px'
  },
}));

const ModalRiskStepOne = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseFirst = () => {
    setOpen(false);
  };

  const [riskDate, setRiskDate] = useState('');

  return (
    <div>
      <button 
        type="button" 
        onClick={handleOpen}
        className={classes.button}
    >
        I've been exposed to HIV'
      </button>
      <Modal
        aria-labelledby="modal-riskOne-title"
        aria-describedby="modal-riskOne-description"
        className={classes.modal}
        open={open}
        onClose={handleCloseFirst}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="modal-pep-title">I took a risk</h2>
            <Img src={require('../listen.png')} alt="listen" />
            <p id="modal-pep-description">Don't panic and tell us when you took the risk.</p>
            <TextField
                id="datetime-local"
                label="Pick a date a time"
                type="datetime-local"
                value={riskDate}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={event => setRiskDate(event.target.value)}
            />
            <ModalRiskStepTwo
              riskDate={riskDate}
              handleCloseFirst={handleCloseFirst}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalRiskStepOne;