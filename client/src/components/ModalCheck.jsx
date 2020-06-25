import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    "&:focus": {
      outline: 'none'
    },
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px'
  },
}));

const ModalCheck = ({ updateEvents, id, start, displayedDate, title }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  let startDate = new Date(start)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    updateEvents(id, takenDate)
    handleClose();
  }

  const [takenDate, setTakenDate] = useState('');

  return (
    <div>
      <p
        style={{ margin: 0 }} 
        onClick={handleOpen}
    >
        I took my pill
      </p>
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
          <h2 style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="modal-pep-title">{title} - {displayedDate.toLocaleDateString()}</h2>
            <TextField
                style={{display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(233,240,248)', marginBottom: '8px'}}
                id="datetime-local"
                label="Pick a date a time"
                type="datetime-local"
                value={takenDate}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={event => setTakenDate(event.target.value)}
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

export default ModalCheck;