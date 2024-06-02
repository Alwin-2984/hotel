import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function CartCard({cartCardOpen, handleCartCardClose}) {

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleCartCardClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCartCardClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={cartCardOpen}
        autoHideDuration={6000}
        onClose={handleCartCardClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}