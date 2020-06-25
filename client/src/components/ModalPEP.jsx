import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import colors from '../colors';
import { useState } from 'react';

const Validate = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    left: 50px;
    color: white;
    font-size: 1rem;
    padding: 5px 20px;
    border-radius: 15px;
    text-align: center;
    background: ${colors.youtubeRed};
    cursor: pointer;
`
const prep = require('../prep.png')
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
}));

const ModalPEP = ({ setOpenFirst, events, setEvents, treatment, createEvents }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [firstDate, setFirstDate] = useState("2020-06-26T10:30");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpenFirst(false)
    handleClose();
    createEvents(treatment, firstDate)
    history.push('/agenda')
  }

  let history = useHistory();

  return (
    <div>
      <Validate 
        onClick={handleOpen}
    >
        NEXT
      </Validate>
      <Modal
        aria-labelledby="modal-pep-title"
        aria-describedby="modal-pep-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{padding: '0px 66px 24px', alignItems: 'center'}} className={classes.paper}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '50px'}}>
              <img style={{height: '50px', marginRight: '15px', borderRadius: '100%'}} src={prep} alt="logo" />
              <h2 style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="modal-pep-title">{treatment}</h2>
            </div>
            <p style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="modal-pep-description">The first pill is planed on</p>
            <TextField
                style={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(233,240,248)', marginBottom: '8px', borderRadius: '5px'}}
                id="datetime-local"
                label="Pick a date and a time"
                type="datetime-local"
                value={firstDate}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={event => setFirstDate(event.target.value)}
            />
            <Validate
                onClick={handleSubmit}
            >
                VALIDATE
            </Validate>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalPEP;