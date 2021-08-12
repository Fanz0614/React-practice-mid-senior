import React from 'react';
import { useSelector } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { InputField } from '../../Shared/TextField';
import { CancelButton } from '../../Shared/Button/Cancel';
import { SubmitButton } from '../../Shared/Button/Submit';
import './style.css';

const drawerWidth = 800;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerInput: {
    margin: 20,
  },
}));
export default function PersistentDrawerRight({
  props,
  handleDrawerClose,
  onHandleCancel,
  handleDrawerInput,
  drawerName,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const drawerData = useSelector((state) => state.details);
  //[['name',[ {locale: "EN-US", value: ""},{locale: "ZH-CN", value: ""}]],['description',[ {locale: "EN-US", value: ""},{locale: "ZH-CN", value: ""}]]]
  const drawerInputFiled = () => {
    const newObjEntries = Object.entries(drawerData);
    return newObjEntries.map(([key, value]) => {
      if (key === drawerName) {
        return value.map((items, index) => {
          return (
            <div>
              <InputField
              id={`drawerinput-${key}`}
                key={index}
                className={classes.drawerInput}
                label={items.locale}
                variant="outlined"
                name={key}
                value={items.value}
                onChange={(e) => handleDrawerInput(key, items.locale, e)}
              />

              <CancelButton
                className="cancelbutton"
                onClick={() => onHandleCancel(key)}
              />
            </div>
          );
        });
      }
      return '';
    });
  };

  //点 cancel inputvalue清0，
  return (
    <>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {drawerInputFiled()}
        <div>
          <SubmitButton />
        </div>
      </Drawer>
    </>
  );
}
