import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import './style.css';

import { InputField } from '../../Shared/TextField/index';
import PersistentDrawerRight from '../Drawer/index';

export const MainForm = ({
  open,
  handleDrawerOpen,
  handleDrawerClose,
  handleFormInput,
  defaultState,
  handleDrawerInput,
  drawerName,
  defaultLocale,
  onHandleCancel,
}) => {
  const formData = useSelector((state) => state.details);
  const newObjectEntries = Object.entries(formData);

  const FormInput = () => {
    return newObjectEntries.map(([key, value]) => {
      const findByLocale = value.find((obj) => obj.locale === defaultLocale);
      return (
        <div className="body">
          <Typography
            variant="h4"
            className="title"
            style={{ marginTop: '15px' }}
          >
            {key}
          </Typography>
          <InputField
            className="textField"
            id={`input-${key}`}
            onChange={handleFormInput}
            name={key}
            value={findByLocale.value}
          />
          <AdjustIcon
            className="openicon"
            id={`${key}-button`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleDrawerOpen(key)}
          />
        </div>
      );
    });
  };

  return (
    <>
      <form className="main">
        {FormInput()}
        <PersistentDrawerRight
          props={open}
          handleDrawerClose={handleDrawerClose}
          defaultState={defaultState}
          handleDrawerInput={handleDrawerInput}
          drawerName={drawerName}
          onHandleCancel={onHandleCancel}
        />
      </form>
    </>
  );
};

MainForm.propTypes = {
  open: PropTypes.bool,
  handleDrawerOpen: PropTypes.func,
  handleDrawerClose: PropTypes.func,
  handleFormInput: PropTypes.func,
  defaultState: PropTypes.string,
  handleDrawerInput: PropTypes.func,
  drawerName: PropTypes.string,
  defaultLocale: PropTypes.string,
  onHandleCancel: PropTypes.func,
};
