import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  drawerInput: {
    margin: 20,
  },
}));
export const InputField = ({ label, value, onChange, name, id }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.drawerInput}
      variant="outlined"
      label={label}
      id={id}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
