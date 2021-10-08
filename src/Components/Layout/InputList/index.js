import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ListNameSelector } from '../ListFieldSelector';
import { InputField } from '../../Shared/TextField';
import { addOne } from '../../../Pages/list/listSlice';
import { handleTag } from '../../../Pages/list/listSlice';

export const InputList = ({ id, sortUp, sortDown, items }) => {
  const dispatch = useDispatch();
  const [initialDropdownState, setInitialDropdownState] = useState([]);
  const valueTag = [
    { field: 'Number', value: ['>', '<', '='] },
    { field: 'String', value: ['include', 'exclude', 'equale'] },
  ];
  const nameTag = ['Number', 'String'];
  const handleChange = (e) => {
    const newObj = { ...items, [e.target.name]: e.target.value };
    dispatch(
      handleTag({
        newObj: newObj,
      })
    );

    if (e.target.name === 'firstdropdown') {
      const selectorValue = valueTag.find(
        (obj) => obj.field === e.target.value
      );
      setInitialDropdownState(selectorValue.value);
    }
  };
  
  const handleClick = () => {
    dispatch(
      addOne({
        order: items.order,
        firstinput: '',
        fistdropdown: '',
        seconddropdown: '',
        secondinput: '',
      })
    );
  };

  return (
    <>
      <button onClick={sortUp}>^</button>
      <button onClick={sortDown}>-</button>
      <InputField
        id={`firstinput-${id}`}
        name="firstinput"
        onChange={(e) => handleChange(e)}
        value={items.firstinput}
      />
      <ListNameSelector
        name="firstdropdown"
        nameTag={nameTag}
        id={`firstdropdown-${id}`}
        value={items.firstdropdown}
        onChange={(e) => handleChange(e)}
      />
      <ListNameSelector
        name="seconddropdown"
        id={`seconddropdown-${id}`}
        value={items.seconddropdown}
        nameTag={initialDropdownState}
      />
      <InputField
        name="secondinput"
        id={`secondinput-${id}`}
        onChange={(e) => handleChange(e)}
        value={items.secondinput}
      />
      <button id={`addNew-${items.order}`} onClick={handleClick}>+</button>
    </>
  );
};
