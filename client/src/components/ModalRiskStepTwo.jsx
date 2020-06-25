import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
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
    margin-top: 20px;
    margin-bottom: 20px;
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

const ModalRiskStepTwo = ({ riskDate, handleCloseFirst }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  let now = new Date();
  let risk = new Date(riskDate)
  let timing =  Math.floor(Math.abs(now - risk) / 36e5);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    handleCloseFirst()
  };

  return (
    <div>
      <Validate 
        onClick={handleOpen}
    >
        NEXT
      </Validate>
      <Modal
        aria-labelledby="modal-riskOne-title"
        aria-describedby="modal-riskOne-description"
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
            <h2 style={{display: 'flex', justifyContent: 'center', color: '#5694D3'}} id="modal-pep-title">Keep calm and get PEP</h2>
            <p id="modal-pep-description">You're under 72h delay and you can stop HIV! But you need to act quickly.</p>
            <p id="modal-pep-description">You still have <span style={{ color: colors.youtubeRed, fontWeight: 'bold' }}>{timing}hours</span> to take a Post-Exposure-Treatment and stop HIV.</p>
            <p id="modal-pep-description">More you wait and less the treatment is efficient, so go to the nearest hospital as quick as possible, explain the situation and ask for a post-exposure-treatment (PEP).</p>
            <p id="modal-pep-description">Come back to us once you got your PEP.</p>
            <Validate
                onClick={handleClose}
            >
                I GO TO HOSPITAL
            </Validate>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalRiskStepTwo;