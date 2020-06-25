import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalPEP from './ModalPEP';

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
  button: {
    cursor: 'pointer',
  }
}));

const ModalTreatment = ({ choice }) => {
  const classes = useStyles();
  const [openFirst, setOpenFirst] = React.useState(false);

  const handleOpen = () => {
    setOpenFirst(true);
  };

  const handleClose = () => {
    setOpenFirst(false);
  };

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
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            <ModalPEP
                setOpenFirst={setOpenFirst}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalTreatment;