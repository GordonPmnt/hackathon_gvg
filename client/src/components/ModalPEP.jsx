import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import styled from 'styled-components';
import colors from '../colors';

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

const ModalPEP = ({ setOpenFirst, events, setEvents }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setOpenFirst(false)
    handleClose();
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
            <h2 id="modal-pep-title">Transition modal</h2>
            <p id="modal-pep-description">react-transition-group animates me.</p>
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