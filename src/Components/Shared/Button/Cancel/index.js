import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles(() => ({
  cancelbutton: {
    marginTop: 30,
  },
}));
export const CancelButton = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.cancelbutton}
      variant="contained"
      color="secondary"
      onClick={onClick}
    >
      Cancel
    </Button>
  );
};
