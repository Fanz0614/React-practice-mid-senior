import React from 'react';
import { ListNameSelector } from '../ListFieldSelector';
import { InputField } from '../../Shared/TextField';

export const InputList = ({ nameTag1, nameTag2, onChange }) => {
  return (
    <>
      <button>^</button>
      <button>-</button>
      <InputField name="firstinput" onChange={onChange} />
      <ListNameSelector
        name="firstdropdown"
        nameTag={nameTag1}
        onChange={onChange}
      />
      <ListNameSelector name="seconddropdown" nameTag={nameTag2} />
      <InputField name="secondinput" onChange={onChange} />
    </>
  );
};
