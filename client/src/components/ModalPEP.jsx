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
    left: 50px;
    color: white;
    font-size: 1rem;
    padding: 5px 20px;
    border-radius: 15px;
    text-align: center;
    background: ${colors.youtubeRed};
    cursor: pointer;
`

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
          <div className={classes.paper}>
            <h2 id="modal-pep-title">{treatment}</h2>
            <p id="modal-pep-description">react-transition-group animates me.</p>
            <TextField
                id="datetime-local"
                label="Pick a date a time"
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