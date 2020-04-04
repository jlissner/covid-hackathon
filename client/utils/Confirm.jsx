import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

function Confirm({
  Component,
  onConfirm,
  text,
  title,
  ...props
}) {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  function confirm() {
    close();
    onConfirm();
  }

  return (
    <>
      <Component {...props} onClick={() => setOpen(true)} />
      <Dialog
        open={open}
        onClose={close}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText component="div">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button color="primary" onClick={confirm} variant="contained">Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

Confirm.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]).isRequired,
  text: PropTypes.node,
  title: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
};

Confirm.defaultProps = {
  title: 'Are you sure?',
  text: 'Are you sure you want to continue?',
};

export default Confirm;
