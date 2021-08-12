import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputList } from '../../Components/Layout/InputList';
import { addOne } from './listSlice';

export const List = () => {
  const initialListState = useSelector((state) => state.listdetails);

  const dispatch = useDispatch();
  const nameTag = ['Number', 'String'];
  const valueTag = [
    { field: 'Number', value: ['>', '<', '='] },
    { field: 'String', value: ['include', 'exclude', 'equale'] },
  ];

  const [initialState, setInitialState] = useState({
    firstinput: '',
    firstdropdown: '',
    deconddropdown: '',
    secondinput: '',
  });
  const [initialDropdownState, setInitialDropdownState] = useState([]);


  const handleChange = (e,name) => {
   
    
    setInitialState({ [name]: e.target.value });
   
    if (name === "firstdropdown") {
      const selectorValue = valueTag.find((obj) => obj.field === e.target.value);
      setInitialDropdownState(selectorValue.value);
    }
  };

  const handleClick = (e) => {
    dispatch(
      addOne({
        input1: initialState.input1,
        input2: initialState.field,
        input3: initialState.details,
        input4: initialState.input4,
      })
    );
  };
  const creatList = () => {
    return initialListState.value.map((items, index) => {
      return (
        <div key={index}>
          <InputList
            id={index}
            onChange={(name)=>handleChange(name)}
            nameTag1={nameTag}
            nameTag2={initialDropdownState}
          />
          <button onClick={(e) => handleClick(e.target.value)}>+</button>
        </div>
      );
    });
  };
  return <>{creatList()}</>;
};
