import React from 'react';
import { SelectField } from '../../Shared/SelectFiled';
export const ListNameSelector = ({ nameTag,onChange }) => {
  
  return (
    <>
      <SelectField
        label={'type'}
        currencies={nameTag}
        onChange={onChange}
        SelectProps={{
          native: true,
        }}
      />
    </>
  );
};
