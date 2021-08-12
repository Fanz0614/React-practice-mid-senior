import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { MainForm } from '../../Components/Layout/Form/index';
import { handleForm } from './homeSlice';
import { useDispatch } from 'react-redux';

export const Home=()=> {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [drawerName, setDrawerName] = useState('');
  const defaultLocale = 'EN-US';

  const handleDrawerOpen = (name) => {
    setOpen(true);
    setDrawerName(name);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onHandleCancel = (name) => {
    dispatch(handleForm({ locale: defaultLocale, field: name, value: '' }));
  };

  const handleFormInput = (e) => {
    dispatch(
      handleForm({
        locale: defaultLocale,
        value: e.target.value,
        field: e.target.name,
        tag:true,
        name:'left'
      })
    );
  };
  const handleDrawerInput = (name, locale, e) => {
    dispatch(
      handleForm({
        locale: locale,
        value: e.target.value,
        field: name,
      })
    );
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <MainForm
            open={open}
            handleDrawerOpen={handleDrawerOpen}
            handleDrawerClose={handleDrawerClose}
            handleFormInput={handleFormInput}
            handleDrawerInput={handleDrawerInput}
            drawerName={drawerName}
            defaultLocale={defaultLocale}
            onHandleCancel={onHandleCancel}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </>
  );
}


