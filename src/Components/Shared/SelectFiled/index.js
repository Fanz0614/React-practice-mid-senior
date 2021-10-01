import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  drawerInput: {
    margin: 20,
  },
}));
export const SelectField = ({
  label,
  value,
  onChange,
  name,
  id,
  currencies,
  SelectProps,
}) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.drawerInput}
      variant="outlined"
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      select
      SelectProps={SelectProps}
    >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option}
        </option>
      ))}
    </TextField>
  );
};
