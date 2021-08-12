import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import AdjustIcon from '@material-ui/icons/Adjust';
import { InputField } from '../../Shared/TextField/index';
import PersistentDrawerRight from '../Drawer/index';
import { CancelButton } from '../../Shared/Button/Cancel';
import './style.css';
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
      //console.log(value, '+++++++++++');
      const findByLocale = value.find((obj) => obj.locale === defaultLocale);
     // console.log(findByLocale);
      return (
        <div className="body">
          <Typography variant="h4" className="title">
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
