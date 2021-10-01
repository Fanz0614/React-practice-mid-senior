import React from 'react';
import { SelectField } from '../../Shared/SelectFiled';
export const ListNameSelector = ({ nameTag, onChange, name, id }) => {
  return (
    <>
      <SelectField
        label={'type'}
        name={name}
        id={id}
        currencies={nameTag}
        onChange={onChange}
        SelectProps={{
          native: true,
        }}
      />
    </>
  );
};
